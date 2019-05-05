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
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      borderBottom: "2px solid #000"
    }
  }
});
