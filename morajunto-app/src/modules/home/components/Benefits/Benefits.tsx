import { BenefitCard } from "@molecules";
import { Container, Grid, Typography } from "@mui/material";
import { benefits } from "./config";
import * as S from "./styles";

const Benefits = () => {
  return (
    <S.Background>
      <Container>
        <S.TitleWrapper>
          <Typography variant="h2">Diferenças MoraJunto</Typography>
          <Typography>Isto é o que nos torna diferentes.</Typography>
        </S.TitleWrapper>
        <Grid container spacing={2}>
          {benefits.map((props, index) => (
            <Grid key={index} item xs={12} md={4}>
              <BenefitCard {...props} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </S.Background>
  );
};

export default Benefits;
