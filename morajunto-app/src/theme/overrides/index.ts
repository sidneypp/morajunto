import { Components, Theme } from "@mui/material";
import { MuiButton } from "./MuiButton";
import { MuiLink } from "./MuiLink";
import { MuiTextField } from "./MuiTextField";

export const components: Components<Omit<Theme, "components">> = {
  MuiButton,
  MuiLink,
  MuiTextField,
};
