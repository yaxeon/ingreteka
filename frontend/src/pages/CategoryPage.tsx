import React from "react";

import { SelectionItem } from "../components/SelectionItem";
import { HeaderMenu } from "../components/HeaderMenu";
import { selections } from "../json/selections";

export const CategoryPage = () => (
  <React.Fragment>
    <HeaderMenu />
    {selections.map(({ image, title, path, description }) => (
      <SelectionItem
        key={path}
        image={image}
        path={path}
        title={title}
        description={description}
      />
    ))}
  </React.Fragment>
);
