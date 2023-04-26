import { Link } from "@atoms";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import LoginIcon from "@mui/icons-material/Login";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import {
  ClickAwayListener,
  ListItemIcon,
  MenuList,
  Paper,
} from "@mui/material";
import { menuItems } from "./config";
import * as S from "./Menu.styles";
import { MenuProps } from "./Menu.types";

const Menu = ({ user, signOut, onClickAway = () => null }: MenuProps) => {
  return (
    <Paper elevation={0}>
      <ClickAwayListener onClickAway={onClickAway}>
        <MenuList>
          {!user?.id &&
            menuItems.map((item, index) => (
              <Link href={item.href} key={index}>
                <S.Item>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  {item.text}
                </S.Item>
              </Link>
            ))}
          {user?.id && [
            <Link href="/minha-conta" key="my-account">
              <S.Item>
                <ListItemIcon>
                  <PersonOutlineIcon fontSize="small" />
                </ListItemIcon>
                Minha Conta
              </S.Item>
            </Link>,
            <Link href="/mensagens" key="messages">
              <S.Item>
                <ListItemIcon>
                  <ChatOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Mensagens
              </S.Item>
            </Link>,
            <Link href="/meus-anuncios" key="my-ads">
              <S.Item>
                <ListItemIcon>
                  <FormatListBulletedOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Meus Anúncios
              </S.Item>
            </Link>,
            <Link href="/reservas" key="reservations">
              <S.Item>
                <ListItemIcon>
                  <HouseOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Reservas
              </S.Item>
            </Link>,
            <Link href="/favoritos" key="favorites">
              <S.Item>
                <ListItemIcon>
                  <FavoriteBorderOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Favoritos
              </S.Item>
            </Link>,
            <S.Item
              key="logout"
              onClick={() => {
                onClickAway();
                return signOut();
              }}
            >
              <ListItemIcon>
                <LoginIcon fontSize="small" />
              </ListItemIcon>
              Sair
            </S.Item>,
          ]}
        </MenuList>
      </ClickAwayListener>
    </Paper>
  );
};

export default Menu;
