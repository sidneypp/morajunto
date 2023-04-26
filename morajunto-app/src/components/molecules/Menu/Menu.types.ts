import { User } from "@types";

export interface MenuProps {
  user?: User;
  signOut: () => void;
  onClickAway?: () => void;
  isDesktop?: boolean;
}
