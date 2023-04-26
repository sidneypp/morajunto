import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import theme from "@theme";
import { PropsWithChildren } from "react";

const ThemeProvider = (props: PropsWithChildren) => {
  return (
    <>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </>
  );
};

export default ThemeProvider;
