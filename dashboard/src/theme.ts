import { createMuiTheme } from "@material-ui/core";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[700]
    },
    secondary: red
  },
  typography: {
    fontFamily: ["Noto Sans", "Roboto", "Arial", "sans-serif"].join(",")
  }
});
