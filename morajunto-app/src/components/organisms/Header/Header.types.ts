import { Positions } from "@molecules";
import { User } from "@types";

export type HeaderProps = {
  user?: User;
  signOut: () => void;
  isHome?: boolean;
  position?: Positions;
  elevation?: number;
};
