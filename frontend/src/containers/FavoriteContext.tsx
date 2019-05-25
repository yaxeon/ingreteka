import React, { useState, useEffect } from "react";

import { store } from "../store";

type TypeToggle = (id: string) => void;
type TypeItems = string[];
type TypeFavoriteContext = [TypeItems, TypeToggle];

const FavoriteContext = React.createContext<TypeFavoriteContext>([
  [],
  () => {}
]);

const FAVORITE_KEY = "FAV";
const checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");

const FavoriteProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<TypeItems>([]);

  useEffect(() => {
    store
      .getItem<TypeItems | null>(FAVORITE_KEY)
      .then(value => {
        if (!value) {
          return;
        }

        setItems(value.filter(id => checkForHexRegExp.test(id)));
      })
      .catch(console.error);
  }, []);

  const handleToggle: TypeToggle = id => {
    const nextItems = items.includes(id)
      ? items.filter(item => item !== id)
      : [id, ...items];

    setItems(nextItems);
    store.setItem(FAVORITE_KEY, nextItems).catch(console.error);
  };

  return (
    <FavoriteContext.Provider value={[items, handleToggle]}>
      {children}
    </FavoriteContext.Provider>
  );
};

export { FavoriteContext, FavoriteProvider };
