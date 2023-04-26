import { Positions } from "@molecules";
import { PropsWithChildren } from "react";

export type CommonLayoutProps = PropsWithChildren<{
  isHome?: boolean;
  headerPosition?: Positions;
  headerElevation?: number;
}>;
