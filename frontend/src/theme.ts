import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import deepPurple from "@material-ui/core/colors/deepPurple";
import grey from "@material-ui/core/colors/grey";

export const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#FFFFFF",
      dark: grey[200]
    },
    secondary: deepPurple,
    background: {
      default: "#FFFFFF"
    }
  },
  typography: {
    useNextVariants: true,
    fontSize: 14,
    fontFamily: ["Noto Sans", "Roboto", "Arial", "sans-serif"].join(","),
    h1: {
      fontSize: "1.2rem"
    },
    body2: {
      fontSize: "0.8rem"
    },
    h3: {
      fontWeight: 600,
      fontSize: "0.8rem"
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.2rem"
    },
    h5: {
      fontWeight: 500,
      fontSize: "0.8rem"
    },
    h6: {
      fontWeight: 600,
      fontSize: "0.8rem",
      paddingLeft: 2,
      paddingRight: 2,
      borderBottom: "2px solid #000"
    }
  }
});
