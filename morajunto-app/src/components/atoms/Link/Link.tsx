import { Link as LinkMUI } from "@mui/material";
import NextLink from "next/link";
import React from "react";
import { LinkProps } from "./Link.types";

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, as, prefetch, ...props }, ref) => (
    <NextLink href={href} as={as} prefetch={prefetch} passHref legacyBehavior>
      <LinkMUI ref={ref} {...props} />
    </NextLink>
  )
);

Link.displayName = "Link";

export default Link;
