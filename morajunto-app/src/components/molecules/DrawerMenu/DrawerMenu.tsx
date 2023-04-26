import { Link } from "@atoms";
import { Logo, Menu } from "@molecules";
import { Button, Divider, Typography } from "@mui/material";
import * as S from "./DrawerMenu.styles";
import { DrawerMenuProps } from "./DrawerMenu.types";

const DrawerMenu = ({ user, signOut, ...props }: DrawerMenuProps) => {
  return (
    <S.DrawerMenu {...props}>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>
      <S.ContentWrapper>
        <Divider />
        {user?.id ? (
          <></>
        ) : (
          <>
            <S.AnnouncementWrapper>
              <Typography>
                Entre para ver seus favoritos, quartos e mensagens
              </Typography>
              <Link href="login">
                <Button variant="contained" fullWidth>
                  Entrar
                </Button>
              </Link>
            </S.AnnouncementWrapper>
            <Divider />
          </>
        )}
        <Menu user={user} signOut={signOut} />
      </S.ContentWrapper>
    </S.DrawerMenu>
  );
};

export default DrawerMenu;
