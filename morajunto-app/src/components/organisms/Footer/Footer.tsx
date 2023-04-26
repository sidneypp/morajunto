import { Link } from "@atoms";
import { ArrowForward } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { actionItems } from "./config";
import * as S from "./Footer.styles";

const Footer = () => {
  return (
    <S.Footer>
      <S.ContainerWrapper>
        <S.ActionLinks>
          <Typography variant="h3">Conheça mais</Typography>
          {actionItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <S.LinkWrapper>
                {item.text}
                <ArrowForward />
              </S.LinkWrapper>
            </Link>
          ))}
        </S.ActionLinks>
        <S.Copyright>
          <Typography>MoraJunto ©2023</Typography>
          <Typography>Todos os direitos reservados</Typography>
          <Typography>Versão 1.0.0</Typography>
        </S.Copyright>
      </S.ContainerWrapper>
    </S.Footer>
  );
};

export default Footer;
