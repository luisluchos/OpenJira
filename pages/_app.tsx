import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { LightTheme, DarkTheme } from "../themes";
import { UIProvider } from '../context/ui/UIProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
    </UIProvider>
  );
}

export default MyApp;
