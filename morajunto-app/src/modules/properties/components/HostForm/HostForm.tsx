import { yupResolver } from "@hookform/resolvers/yup";
import { ChipField, Slider, TextField } from "@molecules";
import { Grid, MenuItem, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useOfferRepository } from "src/repositories/Offer";
import * as yup from "yup";
import { useProperty } from "../../hooks/useProperty";
import { useSteps } from "../../hooks/useSteps";
import { FormTitle } from "../FormTitle";
import * as S from "./styles";

const schema = yup.object({
  ageGroup: yup.number().required(),
  toWork: yup.string().required(),
  toStudy: yup.string().required(),
});
export const genders = [
  { value: "masculine", label: "Masculino" },
  { value: "feminine", label: "Feminino" },
  { value: "indifferent", label: "Indiferente" },
];

const defaultValues = {
  toWork: "",
  toStudy: "",
  gender: "",
  ageGroup: 0 as number,
};

const optionsDefault = [
  { label: "Sim", value: "true" },
  { label: "Não", value: "false" },
];

const HostForm = () => {
  const { control, handleSubmit, setValue, watch, reset } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { property, offer } = useProperty();
  function valueLabelFormat(value: number) {
    if (value == null) {
      return "";
    }
    switch (value) {
      case 0:
        return "";
      case 1:
        return "1 ano";
      default:
        break;
    }

    return `${value} anos`;
  }

  const { nextStep } = useSteps();
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue("ageGroup", newValue);
    }
  };

  const ageGroup = watch("ageGroup");
  const { mutateAsync } = useOfferRepository().createOffer(property?.id);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    let gender = "";
    if (offer.menAllowed) {
      gender = "masculine";
    }
    if (offer.womenAllowed) {
      gender = "feminine";
    }
    if (offer.menAllowed && offer.womenAllowed) {
      gender = "indifferent";
    }
    reset({
      ageGroup: offer?.ageGroup,
      toWork: offer.toWork?.toString(),
      toStudy: offer.toStudy?.toString(),
      gender: gender,
    });
  }, [offer, reset]);

  function onSubmit({
    toWork,
    toStudy,
    ageGroup,
    gender,
  }: typeof defaultValues) {
    const depositAmountField = offer.depositRequired ? offer.depositAmount : "";
    let menAllowed = gender == "masculine";
    let womenAllowed = gender == "feminine";
    if (gender == "indifferent") {
      menAllowed = true;
      womenAllowed = true;
    }
    const minimumStay = offer.minimumStay != null ? offer?.minimumStay : 0;
    return mutateAsync({
      id: offer.id,
      depositRequired: offer.depositRequired,
      withWater: offer.withWater,
      withInternet: offer.withInternet,
      withGas: offer.withGas,
      withElectricity: offer.withElectricity,
      rentPricing: offer.rentPricing,
      depositAmount: depositAmountField,
      minimumStay: minimumStay,
      toWork: toWork == "true",
      toStudy: toStudy == "true",
      ageGroup: ageGroup,
      menAllowed: menAllowed,
      womenAllowed: womenAllowed,
    })
      .then(nextStep)
      .catch((error) =>
        enqueueSnackbar(error.message, {
          variant: "error",
        })
      );
  }
  return (
    <S.Form id="step_form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid item xs={24} md={24}>
        <Typography id="non-linear-slider" gutterBottom>
          Faixa etária: {valueLabelFormat(ageGroup)}
        </Typography>
        <Slider
          name="ageGroup"
          control={control}
          step={1}
          onChange={handleChange}
          getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Grid>
      <Grid container rowSpacing={3} columnSpacing={3}>
        <Grid item xs={12} md={6}>
          <ChipField
            name="toStudy"
            control={control}
            label="Gostaria que a pessoa fosse estudante?"
            options={optionsDefault}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ChipField
            name="toWork"
            control={control}
            label="Gostaria que a pessoa tivesse um trabalho?"
            options={optionsDefault}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item md={12}>
          <FormTitle title="Gênero que deseja oferecer?" />
        </Grid>
      </Grid>

      <Grid item xs={12} md={12}>
        <TextField
          select
          name="gender"
          control={control}
          label="Gênero"
          style={{ width: "20%" }}
        >
          {genders.map((gender) => (
            <MenuItem key={gender.value} value={gender.value}>
              {gender.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </S.Form>
  );
};

export default HostForm;
