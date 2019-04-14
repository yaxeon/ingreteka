import { createMuiTheme } from "@material-ui/core";
import green from "@material-ui/core/colors/green";
import orange from "@material-ui/core/colors/orange";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[700]
    },
    secondary: orange
  },
  typography: {
    useNextVariants: true,
    fontFamily: ["Noto Sans", "Roboto", "Arial", "sans-serif"].join(",")
  }
});
