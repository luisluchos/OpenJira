import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const DarkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main:'#abd699',
          },
          secondary: {
            main: '#abd699',
          },
        error: {
          main: "#FF336B",
        },
      },
      components: {
        MuiAppBar: {
          defaultProps: {},
          styleOverrides: {
            root: {
              backgroundColor: "#abd699",
        },},},},})
   