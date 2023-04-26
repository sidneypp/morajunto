import { Typography } from "@mui/material";
import * as S from "./BenefitCard.styles";
import { BenefitCardProps } from "./BenefitCard.types";

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
  const IconComponent = icon;

  return (
    <S.Wrapper>
      <IconComponent fontSize="large" />
      <S.ContentWrapper>
        <Typography variant="h3">{title}</Typography>
        <Typography>{description}</Typography>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default BenefitCard;
