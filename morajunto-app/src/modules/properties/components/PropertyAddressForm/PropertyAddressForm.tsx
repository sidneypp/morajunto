import { yupResolver } from "@hookform/resolvers/yup";
import {
  AutoCompleteField,
  ChipField,
  NumberField,
  TextField,
} from "@molecules";
import { LoadingButton } from "@mui/lab";
import { Grid, InputAdornment } from "@mui/material";
import {
  useAddressRepository,
  useCityRepository,
  useNeighborhoodRepository,
  usePropertyRepository,
  useStateRepository,
} from "@repositories";
import { City, Neighborhood, PropertyKind, State } from "@types";
import { masker } from "@utils";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NumberFormatValues } from "react-number-format";
import * as yup from "yup";
import { useProperty } from "../../hooks/useProperty";
import { useSteps } from "../../hooks/useSteps";
import { FormTitle } from "../FormTitle";
import * as S from "./styles";

const schema = yup.object({
  address: yup.object({
    zipcode: yup.object({
      value: yup.string().length(8).required(),
    }),
    state: yup.object().nullable().required(),
    city: yup.object().nullable().required(),
    neighborhood: yup.object().nullable().required(),
    street: yup.string().required(),
    number: yup.string().nullable().required(),
  }),
  area: yup
    .number()
    .typeError("O campo é obrigatório.")
    .positive()
    .nullable()
    .required(),
});

const defaultValues = {
  kind: "apartment",
  area: null as unknown as number,
  address: {
    zipcode: {} as NumberFormatValues,
    state: null as unknown as State,
    city: null as unknown as City,
    neighborhood: null as unknown as Neighborhood,
    street: "",
    number: "",
    complement: "",
  },
};

const PropertyAddressForm = () => {
  const { mutateAsync } = usePropertyRepository().createProperty();

  const { nextStep } = useSteps();
  const { enqueueSnackbar } = useSnackbar();

  const addresses = useAddressRepository().searchAddressByZipCode();
  const states = useStateRepository().getStates();

  const { property } = useProperty();
  const {
    control,
    handleSubmit,
    setValue,
    clearErrors,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  function onSubmit({ kind, area, address }: typeof defaultValues) {
    return mutateAsync({
      id: property?.id,
      kind: kind as PropertyKind,
      address: {
        id: property.address?.id,
        zipcode: address.zipcode.value,
        stateId: address.state.id!,
        cityId: address.city.id!,
        neighborhoodId: address.neighborhood.id!,
        street: address.street,
        number: parseInt(address.number),
        complement: address.complement,
      },
      area: area,
    })
      .then(nextStep)
      .catch((error) =>
        enqueueSnackbar(error.message, {
          variant: "error",
        })
      );
  }

  const zipCode = watch("address.zipcode");
  const state = watch("address.state");
  const city = watch("address.city");
  const neighborhood = watch("address.neighborhood");

  const cities = useCityRepository().getCitiesByState(state?.acronym);
  const neighborhoods = useNeighborhoodRepository().getNeighborhoodsByCity(
    city?.id
  );

  async function searchAddresses() {
    const { state, city, neighborhood, street } = await addresses.mutateAsync(
      zipCode.value
    );
    if (state?.id) {
      setValue("address.state", state);
      clearErrors("address.state");
    }
    if (city?.id) {
      setValue("address.city", city);
      clearErrors("address.city");
    }
    if (neighborhood?.id) {
      setValue("address.neighborhood", neighborhood);
      clearErrors("address.neighborhood");
    }

    if (street) {
      setValue("address.street", street);
      clearErrors("address.street");
    }
  }

  useEffect(() => {
    if (state && city && state.acronym !== city.stateAcronym) {
      setValue("address.city", null as unknown as City);
    }
  }, [state, city, setValue]);

  useEffect(() => {
    if (city?.id !== neighborhood?.cityId) {
      setValue("address.neighborhood", null as unknown as Neighborhood);
    }
  }, [city, neighborhood, setValue]);

  useEffect(() => {
    reset({
      kind: property.kind,
      area: property.area,
      address: {
        zipcode: {
          formattedValue: masker(property.address?.zipcode, "99999-999"),
          value: property.address?.zipcode,
        },
        state: property.address?.state,
        city: property.address?.city,
        neighborhood: property.address?.neighborhood,
        street: property.address?.street,
        number: property.address?.number?.toString(),
        complement: property.address?.complement,
      },
    });
  }, [property, reset]);

  return (
    <S.Form id="step_form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ChipField
            name="kind"
            control={control}
            label="Que tipo de imóvel você quer anunciar?"
            options={[
              { label: "Apartamento", value: "apartment" },
              { label: "Studio/Kitnet", value: "studio" },
              { label: "Casa", value: "house" },
            ]}
          />
        </Grid>
        <Grid item xs={12}>
          <FormTitle
            title="Qual a localização do imóvel"
            subtitle="Apenas interessados no seu imóvel que agendarem uma visita terão
          acesso ao endereço completo do seu imóvel."
          />
        </Grid>
        <Grid item xs={8} md={4}>
          <NumberField
            name="address.zipcode"
            control={control}
            label="CEP"
            format="#####-###"
            error={Boolean(errors.address?.zipcode?.value)}
            helperText={errors.address?.zipcode?.value?.message}
            fullWidth
          />
        </Grid>
        <Grid item xs={4} md={2}>
          <LoadingButton
            variant="contained"
            onClick={searchAddresses}
            loading={addresses.isLoading}
            disabled={zipCode?.value?.length !== 8}
          >
            Procurar
          </LoadingButton>
        </Grid>
        <Grid item md={6} />
        <Grid item xs={12} md={4}>
          <AutoCompleteField
            name="address.state"
            control={control}
            label="Estado"
            fullWidth
            loading={addresses.isLoading || states.isLoading}
            options={states.data || []}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AutoCompleteField
            name="address.city"
            control={control}
            label="Cidade"
            fullWidth
            noOptionsText="Selecione um estado"
            loading={addresses.isLoading || cities.isLoading}
            options={cities.data || []}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AutoCompleteField
            name="address.neighborhood"
            control={control}
            label="Bairro"
            fullWidth
            noOptionsText="Selecione uma cidade"
            loading={addresses.isLoading || neighborhoods.isLoading}
            options={neighborhoods.data || []}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="address.street"
            control={control}
            label="Endereço"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            name="address.number"
            type="number"
            control={control}
            label="Número"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            name="address.complement"
            control={control}
            label="Complemento"
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormTitle
            title="Quantos m²?"
            subtitle="Informe a área útil. Se não souber o valor exato, você pode informar um tamanho aproximado."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            name="area"
            type="number"
            inputProps={{ min: 1 }}
            control={control}
            fullWidth
            InputProps={{
              endAdornment: <InputAdornment position="end">m²</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
    </S.Form>
  );
};

export default PropertyAddressForm;
