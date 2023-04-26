import { Card, CardProps, styled } from "@mui/material";

export const CardSelect = styled(Card, {
  shouldForwardProp: (prop) => prop !== "isSelected",
})<{ isSelected: boolean } & CardProps>(({ theme, isSelected }) => ({
  width: "100%",
  borderColor: isSelected
    ? theme.palette.primary.light
    : theme.palette.secondary.light,
  color: isSelected ? theme.palette.primary.main : "inherit",
  borderStyle: "solid",
  cursor: "pointer",
  borderWidth: "thin",
  textAlign: "center",
  padding: theme.spacing(2, 0),
}));
