import { yupResolver } from "@hookform/resolvers/yup";
import { ChipField, MoneyField, Slider } from "@molecules";
import { Grid, InputAdornment, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useOfferRepository } from "src/repositories/Offer";
import * as yup from "yup";
import { useProperty } from "../../hooks/useProperty";
import { useSteps } from "../../hooks/useSteps";
import { FormTitle } from "../FormTitle";
import { convertStay, revertStay, valueLabelFormat } from "./Converter";
import * as S from "./styles";

const schema = yup.object({
  rentPricing: yup.string().required(),
  minimumStay: yup.number().required(),
  withElectricity: yup.string().required(),
  withGas: yup.string().required(),
  withInternet: yup.string().required(),
  withWater: yup.string().required(),
  depositRequired: yup.string().required(),
});

const defaultValues = {
  rentPricing: "",
  depositAmount: "",
  minimumStay: 0 as number,
  withElectricity: "",
  withGas: "",
  withInternet: "",
  withWater: "",
  depositRequired: "",
};

const optionsDefault = [
  { label: "Sim", value: "true" },
  { label: "Não", value: "false" },
];

const PropertyValuesForm = () => {
  const { control, handleSubmit, setValue, watch, reset } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { nextStep } = useSteps();
  const [errorRent, setErrorRent] = useState("");
  const [errorDeposit, setErrorDeposit] = useState("");

  const { property, offer } = useProperty();

  const { mutateAsync } = useOfferRepository().createOffer(property?.id);
  const { enqueueSnackbar } = useSnackbar();

  function onSubmit({
    depositRequired,
    withWater,
    withInternet,
    withGas,
    withElectricity,
    rentPricing,
    depositAmount,
    minimumStay,
  }: typeof defaultValues) {
    const depositAmountField = depositRequired == "true" ? depositAmount : "";
    const toWork = offer.toWork != null ? offer.toWork : true;
    const toStudy = offer.toStudy != null ? offer.toStudy : true;
    const ageGroup = offer.ageGroup != null ? offer.ageGroup : 0;
    const menAllowed = offer.menAllowed != null ? offer.menAllowed : true;
    const womenAllowed = offer.womenAllowed != null ? offer.womenAllowed : true;

    if (
      rentPricing == "0,0" ||
      rentPricing == "0,00" ||
      rentPricing == "0,000"
    ) {
      setErrorRent("É preciso informar o valor do aluguel");

      return;
    }

    if (
      depositRequired == "true" &&
      (depositAmount == "0,0" ||
        depositAmount == "0,00" ||
        depositAmount == "0,000" ||
        depositAmount == "")
    ) {
      setErrorDeposit("É preciso informar o valor do caução");

      return;
    }
    return mutateAsync({
      id: offer.id,
      depositRequired: depositRequired == "true",
      withWater: withWater == "true",
      withInternet: withInternet == "true",
      withGas: withGas == "true",
      withElectricity: withElectricity == "true",
      rentPricing: rentPricing,
      depositAmount: depositAmountField,
      minimumStay: convertStay(minimumStay),
      toWork: toWork,
      toStudy: toStudy,
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
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue("minimumStay", newValue);
    }
  };
  const minimumStay = watch("minimumStay");
  const depositRequired = watch("depositRequired");

  const handleChangeRent = (newValue: string) => {
    if (newValue == "0,0" || newValue == "0,00" || newValue == "0,000") {
      setErrorRent("É preciso informar o valor do aluguel");
    } else {
      setErrorRent("");
    }
  };
  const handleChangeDeposit = (newValue: string) => {
    if (newValue == "0,0" || newValue == "0,00" || newValue == "0,000") {
      setErrorDeposit("É preciso informar o valor do caução");
    } else {
      setErrorDeposit("");
    }
  };

  useEffect(() => {
    reset({
      depositRequired: offer.depositRequired?.toString(),
      withWater: offer.withWater?.toString(),
      withInternet: offer.withInternet?.toString(),
      withGas: offer.withGas?.toString(),
      withElectricity: offer.withElectricity?.toString(),
      rentPricing: offer.rentPricing,
      depositAmount: offer.depositAmount,
      minimumStay: revertStay(offer?.minimumStay),
    });
  }, [offer, reset]);

  return (
    <S.Form id="step_form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid item xs={24} md={24}>
        <Typography id="non-linear-slider" gutterBottom>
          Estadia mínima: {valueLabelFormat(minimumStay)}
        </Typography>
        <Slider
          name="minimumStay"
          control={control}
          step={7}
          onChange={handleChange}
          getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Grid>
      <Grid container rowSpacing={3} columnSpacing={3}>
        <Grid item xs={12} md={3}>
          <ChipField
            name="withElectricity"
            control={control}
            label="Aluguel inclui eletricidade?"
            options={optionsDefault}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ChipField
            name="withWater"
            control={control}
            label="Aluguel inclui água?"
            options={optionsDefault}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ChipField
            name="withInternet"
            control={control}
            label="Aluguel inclui internet?"
            options={optionsDefault}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ChipField
            name="withGas"
            control={control}
            label="Aluguel inclui gás?"
            options={optionsDefault}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item md={12}>
          <FormTitle title="Qual o valor do aluguel?" />
        </Grid>
      </Grid>
      <Grid container rowSpacing={3} columnSpacing={3}>
        <Grid item xs={12} md={4}>
          <MoneyField
            name="rentPricing"
            control={control}
            onChangeValue={handleChangeRent}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">R$</InputAdornment>
              ),
            }}
            label="Valor do Aluguel"
          />
          <S.Error>{errorRent}</S.Error>
        </Grid>
      </Grid>
      <Grid container rowSpacing={3} columnSpacing={3}>
        <Grid item xs={12} md={3}>
          <ChipField
            name="depositRequired"
            control={control}
            label="Tem necessidade de caução?"
            options={optionsDefault}
          />
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={3}
        style={{ display: depositRequired == "true" ? "" : "none" }}
      >
        <Grid item xs={12} md={4}>
          <MoneyField
            name="depositAmount"
            onChangeValue={handleChangeDeposit}
            control={control}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">R$</InputAdornment>
              ),
            }}
            label="Valor do caução"
          />
          <S.Error>{errorDeposit}</S.Error>
        </Grid>
      </Grid>
    </S.Form>
  );
};

export default PropertyValuesForm;
