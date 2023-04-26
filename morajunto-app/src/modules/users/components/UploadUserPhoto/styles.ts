import { Avatar, CircularProgress, styled } from "@mui/material";

export const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const AvatarWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  margin: theme.spacing(1),
}));

export const UserAvatar = styled(Avatar)({
  width: 128,
  height: 128,
  cursor: "pointer",
});

export const Progress = styled(CircularProgress)({
  position: "absolute",
  top: -6,
  left: -6,
  zIndex: 1,
});
