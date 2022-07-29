import { createTheme } from "@mui/material";
import { grey, pink } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#abd699",
    },
    secondary: {
      main: "#c7ddcc",
    },
    error:{
      main:"#F6116B"



    }
 
  
  },
  components: {
    MuiAppBar: {
      defaultProps: {},
      styleOverrides: {
        root: {
          backgroundColor: "#abd299",
        },
      },
    },
  },
});
