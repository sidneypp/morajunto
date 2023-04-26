import { HamburgerButton, Link } from "@atoms";
import { Logo, Menu } from "@molecules";
import { Button, Tooltip, useScrollTrigger } from "@mui/material";
import { MouseEvent, useState } from "react";
import * as S from "./NavBar.styles";
import { NavBarProps } from "./NavBar.types";

const NavBar = ({
  user,
  signOut,
  onOpenHamburgerMenu,
  isHome,
  position = "fixed",
  defaultElevation = 4,
}: NavBarProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const isTransparent = isHome && !trigger;
  const elevation = isTransparent ? 0 : defaultElevation;

  return (
    <S.NavBar
      position={position}
      elevation={elevation}
      isTransparent={isTransparent}
    >
      <S.Toolbar isHome={isHome}>
        <Logo />
        <S.MenuWrapper>
          <HamburgerButton onClick={onOpenHamburgerMenu} />

          <S.DesktopWrapper>
            {!user?.id && (
              <>
                <Link href="/login">
                  <Button variant="outlined">Entrar</Button>
                </Link>
                <Link href="/cadastro">
                  <Button variant="contained">Criar conta</Button>
                </Link>
              </>
            )}
            {user?.id && (
              <>
                <S.ActionsWrapper>
                  <Link href="/mensagens">
                    <Button variant="text" focusRipple={false}>
                      Mensagens
                    </Button>
                  </Link>
                  <Link href="#">
                    <Button variant="text" focusRipple={false}>
                      Meus Anúncios
                    </Button>
                  </Link>
                  <Link href="#">
                    <Button variant="text" focusRipple={false}>
                      Reservas
                    </Button>
                  </Link>
                  <Link href="#">
                    <Button variant="text" focusRipple={false}>
                      Favoritos
                    </Button>
                  </Link>
                </S.ActionsWrapper>
                <Link href="/cadastrar-quarto">
                  <Button variant="contained">Anunciar Quarto</Button>
                </Link>
                <Tooltip title="Seu perfil">
                  <S.Avatar
                    src={user.photo?.url}
                    alt={user.name}
                    onClick={handleClick}
                  />
                </Tooltip>
                <S.PopperModal
                  placement="bottom-end"
                  disablePortal
                  anchorEl={anchorEl}
                  open={openMenu}
                >
                  <Menu
                    user={user}
                    signOut={signOut}
                    onClickAway={handleClose}
                  />
                </S.PopperModal>
              </>
            )}
          </S.DesktopWrapper>
        </S.MenuWrapper>
      </S.Toolbar>
    </S.NavBar>
  );
};

export default NavBar;
