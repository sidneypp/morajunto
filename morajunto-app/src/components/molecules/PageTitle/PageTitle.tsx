import { Container, Typography } from "@mui/material";
import * as S from "./PageTitle.styles";
import { PageTitleProps } from "./PageTitle.types";

export const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Typography variant="h4" fontWeight="bold">
          {title}
        </Typography>
        <Typography>{subtitle}</Typography>
      </Container>
    </S.Wrapper>
  );
};

export default PageTitle;
