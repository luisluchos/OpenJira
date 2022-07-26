import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { LightTheme, DarkTheme } from "../themes";
import { UIProvider } from '../context/ui/UIProvider';
import { EntriesProvider } from '../context/entries/EntriesProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
    <UIProvider>
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
    </UIProvider>
    </EntriesProvider>
  );
}

export default MyApp;
