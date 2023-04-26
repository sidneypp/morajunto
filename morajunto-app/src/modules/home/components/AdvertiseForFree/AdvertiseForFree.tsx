import advertiseImg from "@assets/home/advertise.jpg";
import { Link } from "@atoms";
import { Button, Typography } from "@mui/material";
import * as S from "./styles";

const AdvertiseForFree = () => {
  return (
    <S.Wrapper>
      <S.AdvertiseCard>
        <S.ImageWrapper>
          <S.Image
            src={advertiseImg}
            alt="Sala de estar integrada com cozinha"
            fill
          />
        </S.ImageWrapper>
        <S.ContentWrapper>
          <S.DescriptionWrapper>
            <Typography variant="h2">
              Anuncie gratuitamente quartos para alugar
            </Typography>
            <Typography>
              Não deixe seu imóvel parado, encontre pessoas confiáveis que
              estejam interessadas em alugar seu quarto para morar junto
            </Typography>
          </S.DescriptionWrapper>
          <Link href="/cadastrar-quarto">
            <Button variant="contained">Anunciar Quarto</Button>
          </Link>
        </S.ContentWrapper>
      </S.AdvertiseCard>
    </S.Wrapper>
  );
};

export default AdvertiseForFree;
