import { Link } from "@atoms";
import { Typography } from "@mui/material";
import * as S from "./CityCard.styles";
import { CityCardProps } from "./CityCard.types";

const CityCard = ({ image, state, city }: CityCardProps) => {
  return (
    <Link href={`/busca/imovel/${city.normalizedName}`}>
      <S.Wrapper>
        <S.ImageWrapper>
          <S.Image src={image.url} alt={image.alt} fill />
        </S.ImageWrapper>
        <S.ContentWrapper>
          <Typography fontWeight="bold">{city.name}</Typography>
          <Typography variant="caption">{state.name}</Typography>
        </S.ContentWrapper>
      </S.Wrapper>
    </Link>
  );
};

export default CityCard;
