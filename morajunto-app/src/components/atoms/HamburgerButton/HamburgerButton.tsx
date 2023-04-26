import { Menu as MenuIcon } from "@mui/icons-material";
import * as S from "./HamburgerButton.styles";
import { HamburgerMenuProps } from "./HamburgerButton.types";

const HamburgerButton = ({ onClick }: HamburgerMenuProps) => {
  return (
    <S.HamburgerMenu aria-label="open menu" edge="end" onClick={onClick}>
      <MenuIcon fontSize="large" />
    </S.HamburgerMenu>
  );
};

export default HamburgerButton;
