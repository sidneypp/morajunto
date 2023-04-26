import { User } from "@types";
import { MouseEventHandler } from "react";

export type Positions = "fixed" | "absolute" | "sticky" | "static" | "relative";

export type NavBarProps = {
  user?: User;
  signOut: () => void;
  onOpenHamburgerMenu?: MouseEventHandler<HTMLButtonElement>;
  isHome?: boolean;
  position?: Positions;
  defaultElevation?: number;
};

export type AppBarProps = {
  isTransparent?: boolean;
};

export type ToolbarProps = {
  isHome?: boolean;
};
