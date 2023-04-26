import { createTheme } from "@mui/material";
import { components } from "./overrides";
import { palette } from "./palette";
import { typography } from "./typography";

const theme = createTheme({
  components,
  palette,
  typography,
});

export default theme;
