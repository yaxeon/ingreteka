import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import grey from "@material-ui/core/colors/grey";

const color = {
  white: "#FFF",
  black: "#000"
};

export const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: grey[800],
      main: grey[900],
      dark: color.black,
      contrastText: color.white
    },
    secondary: {
      light: color.white,
      main: color.white,
      dark: grey[100],
      contrastText: grey[900]
    },
    background: {
      default: color.white
    }
  },
  typography: {
    fontSize: 14,
    fontFamily: ["Noto Sans", "Roboto", "Arial", "sans-serif"].join(","),
    h1: {
      fontWeight: 600,
      fontSize: "1.2rem",
      lineHeight: 1.4
    },
    body2: {
      fontSize: "0.8rem"
    },
    h2: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.4
    },
    h3: {
      fontWeight: 600,
      fontSize: "0.8rem"
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.2rem"
    }
  }
});
