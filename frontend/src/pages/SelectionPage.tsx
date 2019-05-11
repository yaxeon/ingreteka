import React from "react";
import Typography from "@material-ui/core/Typography";
import { RouteComponentProps } from "react-router-dom";
import idx from "idx";

import { useSelectionItemQuery } from "../api";
import { HeaderMenu } from "../components/Header/HeaderMenu";
import { Loading } from "../components/Loading";
import { TitleList } from "../components/TitleList";
import { DraftHtml } from "../components/DraftHtml";

type PageParams = { slug: string; id: string };

export const SelectionPage: React.FC<RouteComponentProps<PageParams>> = ({
  match: {
    params: { slug, id }
  }
}) => {
  const { data, loading } = useSelectionItemQuery({ variables: { id } });
  const selection = idx(data, _ => _.selection.item);

  if (loading || !selection) {
    return <Loading />;
  }

  const { title, text, categories, shops, brands } = selection;
  const categoryBySlug = categories.find(category => category.slug === slug);

  return (
    <React.Fragment>
      <HeaderMenu backUri={`/category/${slug}`}>
        {categoryBySlug ? categoryBySlug.title : slug}
      </HeaderMenu>
      <Typography variant="h1" gutterBottom>
        {title}
      </Typography>
      <TitleList variant="body2" title="Бренды" items={brands} />
      <TitleList variant="body2" title="Категории" items={categories} />
      <TitleList variant="body2" title="Магазины" items={shops} />
      <DraftHtml text={text} />
    </React.Fragment>
  );
};