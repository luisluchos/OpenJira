import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const DarkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main:'#abd699',
          },
          secondary: {
            main: '#c7ddcc',
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
   