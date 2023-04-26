import { CityCard } from "@molecules";
import { Grid, Typography } from "@mui/material";
import { cities } from "./config";
import * as S from "./styles";

const AvailableCities = () => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <Typography variant="h2">Localidades disponíveis</Typography>
        <Typography>
          Estas são as cidades em que estamos presentes. Em breve ampliaremos
          nosso alcance
        </Typography>
      </S.TitleWrapper>
      <Grid container spacing={2}>
        {cities.map((props, index) => (
          <Grid key={index} item xs={6} md={3}>
            <CityCard {...props} />
          </Grid>
        ))}
      </Grid>
    </S.Wrapper>
  );
};

export default AvailableCities;
