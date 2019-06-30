import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import { Header, HeaderProps } from "./Header";
import { HeaderTitle } from "./HeaderTitle";
import { Category } from "../../api";

const useStyles = makeStyles({
  nav: {
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    alignItems: "center",
    marginRight: "0.5rem",
    flexGrow: 1,
    height: "4rem",
    "-webkit-overflow-scrolling": "touch",
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  navItem: {
    flex: "0 0 auto",
    marginRight: "1rem",
    "& > a": {
      color: "inherit",
      textDecoration: "none",
      padding: "1rem 0"
    }
  }
});

interface Props extends HeaderProps {
  items: Array<Pick<Category, "id" | "title" | "slug">>;
  selectedSlug: string;
}

export const HeaderSlider: React.FC<Props> = ({
  backUri,
  items,
  selectedSlug
}) => {
  const classes = useStyles();
  const menuEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuEl || !menuEl.current) {
      return;
    }

    const itemEl = menuEl.current.querySelector("[data-selected=true]");

    if (!itemEl) {
      return;
    }

    itemEl.scrollIntoView({ inline: "start", behavior: "smooth" });
  });

  return (
    <Header backUri={backUri}>
      <nav className={classes.nav} ref={menuEl}>
        {items.map(category => (
          <HeaderTitle
            selected={selectedSlug === category.slug}
            className={classes.navItem}
            data-selected={selectedSlug === category.slug ? true : undefined}
            key={category.id}
          >
            <Link to={`/category/${category.slug}/`}>{category.title}</Link>
          </HeaderTitle>
        ))}
      </nav>
    </Header>
  );
};
