import { AutoCompleteField } from "@molecules";
import { LocationCity, LocationOnOutlined } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { useCityRepository, useNeighborhoodRepository } from "@repositories";
import { City, Neighborhood } from "@types";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearch } from "../../hooks/useSearch";
import * as S from "./styles";

export const FilterForm = () => {
  const { city, setCity, neighborhood, setNeighborhood } = useSearch();

  const cities = useCityRepository().getCities();

  const { control, watch, reset } = useForm({
    defaultValues: {
      city: null as unknown as City,
      neighborhood: null as unknown as Neighborhood,
    },
  });

  const selectedCity = watch("city");
  const selectedNeighborhood = watch("neighborhood");

  const neighborhoods = useNeighborhoodRepository().getNeighborhoodsByCity(
    selectedCity?.id
  );

  useEffect(() => {
    console.log(city, neighborhood);
    reset({
      city,
      neighborhood,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectedCity) {
      setCity(selectedCity);
    }
  }, [selectedCity, setCity]);

  useEffect(() => {
    if (selectedNeighborhood) {
      setNeighborhood(selectedNeighborhood);
    }
  }, [selectedNeighborhood, setNeighborhood]);

  return (
    <S.Form>
      <S.Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <AutoCompleteField
              name="city"
              control={control}
              label="Cidade"
              placeholder="Busque por cidade"
              fullWidth
              loading={cities.isLoading}
              options={cities.data || []}
              InputProps={{
                startAdornment: <LocationOnOutlined />,
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <AutoCompleteField
              name="neighborhood"
              control={control}
              label="Bairro"
              placeholder="Busque por bairro"
              fullWidth
              loading={neighborhoods.isLoading}
              options={neighborhoods.data || []}
              InputProps={{
                startAdornment: <LocationCity />,
              }}
            />
          </Grid>
        </Grid>
      </S.Toolbar>
    </S.Form>
  );
};

export default FilterForm;
