import { yupResolver } from "@hookform/resolvers/yup";
import { AutoCompleteField } from "@molecules";
import { LocationCity, LocationOnOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useCityRepository, useNeighborhoodRepository } from "@repositories";
import { City, Neighborhood } from "@types";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import * as S from "./styles";

export type SearchFormValues = {
  city: City;
  neighborhood?: Neighborhood;
};

type SearchFormProps = {
  onSubmit: (values: SearchFormValues) => void;
};

const schema = Yup.object({
  city: Yup.object().nullable().required(),
  neighborhood: Yup.object().nullable(),
});

const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const cities = useCityRepository().getCities();

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      city: null as unknown as City,
      neighborhood: null as unknown as Neighborhood,
    },
    resolver: yupResolver(schema),
  });

  const city = watch("city");
  const neighborhoods = useNeighborhoodRepository().getNeighborhoodsByCity(
    city?.id
  );

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <S.Title variant="h1">Alugue um quarto em lugares únicos</S.Title>
      <S.Wrapper>
        <AutoCompleteField
          name="city"
          control={control}
          label="Cidade"
          placeholder="Busque por cidade"
          size="medium"
          fullWidth
          loading={cities.isLoading}
          options={cities.data || []}
          InputProps={{
            startAdornment: <LocationOnOutlined />,
          }}
        />
        <AutoCompleteField
          name="neighborhood"
          control={control}
          label="Bairro"
          placeholder="Busque por bairro"
          size="medium"
          fullWidth
          loading={neighborhoods.isLoading}
          options={neighborhoods.data || []}
          InputProps={{
            startAdornment: <LocationCity />,
          }}
        />
        <Button variant="contained" type="submit">
          Procurar
        </Button>
      </S.Wrapper>
    </S.Form>
  );
};

export default SearchForm;
