import React, { useContext } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import { FavoriteContext } from "../containers/FavoriteContext";

const useStyles = makeStyles<Theme>(theme => ({
  icon: {
    color: theme.palette.text.primary
  }
}));

interface Props {
  id: string;
}

export const Favorite: React.FC<Props> = ({ id }) => {
  const classes = useStyles();
  const [favorites, toggleFavorite] = useContext(FavoriteContext);
  const isFavorite = favorites.includes(id);

  const handleFavorite = () => {
    toggleFavorite(id);
  };

  return (
    <IconButton onClick={handleFavorite}>
      {isFavorite ? (
        <FavoriteIcon color="error" />
      ) : (
        <FavoriteBorderIcon className={classes.favoriteIcon} />
      )}
    </IconButton>
  );
};
