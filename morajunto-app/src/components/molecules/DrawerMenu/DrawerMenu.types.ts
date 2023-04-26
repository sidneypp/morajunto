import { DrawerProps } from "@mui/material";
import { User } from "@types";

export interface DrawerMenuProps extends DrawerProps {
  user?: User;
  signOut: () => void;
}
