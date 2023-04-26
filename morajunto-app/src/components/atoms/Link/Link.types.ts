import { LinkProps as LinkMUIProps } from "@mui/material";
import { LinkProps as NextLinkProps } from "next/link";

export type LinkProps = Omit<LinkMUIProps, "href" | "classes"> &
  Pick<NextLinkProps, "href" | "as" | "prefetch">;
