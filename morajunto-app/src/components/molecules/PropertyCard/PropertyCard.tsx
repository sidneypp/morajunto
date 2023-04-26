import { MouseEvent, useMemo } from "react";
import * as S from "./PropertyCard.styles";
import { PropertyCardProps } from "./PropertyCard.types";

const price = 0;

const PropertyCard = ({ property }: PropertyCardProps) => {
  const { kind, address, photos, tags } = property;

  function onClickAction(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  const currencyPrice = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  const imageTabLabel = useMemo(() => {
    const qty = photos?.length;
    if (!qty) return;

    const word = qty > 1 ? "fotos" : "foto";
    return `${qty} ${word}`;
  }, [photos?.length]);

  return (
    <S.Card href="#">
      <S.Wrapper>
        <S.ImageWrapper></S.ImageWrapper>
      </S.Wrapper>
    </S.Card>
  );
};

export default PropertyCard;
