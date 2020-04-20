import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MoreVert from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme>({
  menu: {
    "& a": {
      color: "black"
    }
  }
});

export const HeaderAbout: React.FC = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleMenu(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget as any);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton onClick={handleMenu} color="inherit">
        <MoreVert />
      </IconButton>
      <Menu
        className={classes.menu}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/about/">Обо мне</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a target="_blank" href="https://www.instagram.com/ingreteka/">
            @ingreteka
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
};
