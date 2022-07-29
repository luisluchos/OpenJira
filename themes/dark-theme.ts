import { createTheme } from "@mui/material";
import { grey, pink } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00e676",
    },
    secondary: {
      main: "#00b0ff",
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
          backgroundColor: "#263238",
        },
      },
    },
  },
});
