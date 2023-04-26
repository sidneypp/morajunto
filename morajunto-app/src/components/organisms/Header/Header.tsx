import { DrawerMenu, NavBar } from "@molecules";
import { useState } from "react";
import * as S from "./Header.styles";
import { HeaderProps } from "./Header.types";

const Header = ({
  user,
  signOut,
  isHome = false,
  position,
  elevation,
}: HeaderProps) => {
  const [openMobile, setOpenMobile] = useState(false);

  function handleDrawerToggle() {
    setOpenMobile((prevState) => !prevState);
  }

  return (
    <S.Header>
      <NavBar
        user={user}
        signOut={signOut}
        onOpenHamburgerMenu={handleDrawerToggle}
        isHome={isHome}
        position={position}
        defaultElevation={elevation}
      />
      {!isHome && !position && <S.Offset />}
      <DrawerMenu
        open={openMobile}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        user={user}
        signOut={signOut}
      />
    </S.Header>
  );
};

export default Header;
