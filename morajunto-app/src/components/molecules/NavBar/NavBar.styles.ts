import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  AppBar,
  Avatar as MuiAvatar,
  Popper,
  styled,
  Toolbar as MuiToolbar,
} from "@mui/material";
import { AppBarProps, ToolbarProps } from "./NavBar.types";

export const NavBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "isTransparent",
})<AppBarProps>(({ theme, isTransparent }) => ({
  backgroundColor: isTransparent
    ? "transparent"
    : theme.palette.background.paper,
}));

export const Toolbar = styled(MuiToolbar, {
  shouldForwardProp: (prop) => prop !== "isHome",
})<ToolbarProps>(({ theme, isHome }) => ({
  width: "100%",
  maxWidth: isHome ? "100%" : 1200,
  marginLeft: "auto",
  marginRight: "auto",
  backgroundColor: "inherit",
  [theme.breakpoints.up("lg")]: {
    padding: isHome ? theme.spacing(2, "10%") : 0,
  },
}));

export const MenuWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flex: 1,
  justifyContent: "flex-end",
  gap: theme.spacing(3),
}));

export const DesktopWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const ActionsWrapper = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  gap: theme.spacing(2),
}));

export const Avatar = styled(MuiAvatar)({
  cursor: "pointer",
});

export const ArrowDownIcon = styled(KeyboardArrowDownIcon)(({ theme }) => ({
  marginLeft: theme.spacing(0.5),
  fontSize: theme.typography.body1.fontSize,
}));

export const PopperModal = styled(Popper)(({ theme }) => ({
  zIndex: theme.zIndex.appBar,
  "& .MuiPaper-root": {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    marginTop: theme.spacing(2),
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      backgroundColor: theme.palette.background.paper,
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
}));
