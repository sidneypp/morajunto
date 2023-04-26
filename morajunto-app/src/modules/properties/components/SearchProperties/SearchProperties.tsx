import { Grid, Hidden, Typography } from "@mui/material";
import { useSearch } from "../../hooks/useSearch";
import * as S from "./styles";

const mockCity = {};

const SearchProperties = () => {
  const { city, neighborhood } = useSearch();

  return (
    <S.Wrapper>
      <Grid container rowGap={2}>
        <Grid item xs={12}>
          <Typography variant="h3">
            Quartos para alugar • {neighborhood?.name}, {city.name} -{" "}
            {city.stateAcronym}
          </Typography>
        </Grid>
        <Hidden mdDown>
          <Grid item md={4} sx={{ background: "black", height: 500 }}></Grid>
        </Hidden>
        <Grid
          item
          xs={12}
          md={8}
          sx={{ background: "red", height: 500 }}
        ></Grid>
      </Grid>
    </S.Wrapper>
  );
};

export default SearchProperties;
