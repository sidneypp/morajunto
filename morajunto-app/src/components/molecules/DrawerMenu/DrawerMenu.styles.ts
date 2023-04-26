import { Drawer, styled } from "@mui/material";

export const DrawerMenu = styled(Drawer)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  "& .MuiDrawer-paper": {
    width: "80vw",
  },
}));

export const LogoWrapper = styled("div")(({ theme }) => ({
  height: 56,
  padding: theme.spacing(1),
  color: theme.palette.primary.main,
}));

export const ContentWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(0, 2),
}));

export const AnnouncementWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  margin: theme.spacing(2, 0),
}));

export const Menu = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: theme.spacing(2, 0),
  gap: theme.spacing(2),
}));

export const MenuItem = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));
