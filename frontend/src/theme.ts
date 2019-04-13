import { createMuiTheme } from "@material-ui/core";
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
    htmlFontSize: 12,
    fontFamily: ["Noto Sans", "Roboto", "Arial", "sans-serif"].join(","),
    h3: {
      fontSize: "1.4rem",
      fontWeight: 600
    }
  }
});
