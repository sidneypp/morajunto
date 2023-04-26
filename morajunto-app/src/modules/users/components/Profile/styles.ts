import { Avatar, Box, Card, styled } from "@mui/material";

export const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  margin: theme.spacing(4, 0),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

export const ProfileCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  width: "100%",
  padding: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    width: "calc(100%/3)",
  },
}));

export const PhotoWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const UserAvatar = styled(Avatar)({
  width: 128,
  height: 128,
});

export const ProfileWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "calc(100%/1.5)",
  },
}));
