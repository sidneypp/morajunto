import { yupResolver } from "@hookform/resolvers/yup";
import { CardSelect, ChipField } from "@molecules";
import {
  AccessibleRounded,
  BalconyRounded,
  BathtubRounded,
  ChairRounded,
  CleaningServicesRounded,
  ElevatorRounded,
  FitnessCenterRounded,
  HeatPumpRounded,
  HvacRounded,
  KingBedRounded,
  LocalParkingRounded,
  NaturePeopleRounded,
  PoolRounded,
  TvRounded,
  WifiRounded,
} from "@mui/icons-material";
import { Grid } from "@mui/material";
import { useFeatureAndRuleRepository } from "@repositories";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useProperty } from "../../hooks/useProperty";
import { useSteps } from "../../hooks/useSteps";

import { FormTitle } from "../FormTitle";
import * as S from "./styles";

const optionsDefault = [
  { label: "Sim", value: "true" },
  { label: "Não", value: "false" },
];

const schema = yup.object({
  smokingAllowed: yup.string().required(),
  childrenAllowed: yup.string().required(),
  petsAllowed: yup.string().required(),
  alcoholAllowed: yup.string().required(),
  guestsAllowed: yup.string().required(),
});

const defaultValues = {
  isUnfurnished: false,
  hasParking: false,
  hasGym: false,
  hasPool: false,
  hasAccessibility: false,
  hasAirConditioning: false,
  hasTv: false,
  hasCentralHeating: false,
  hasElevator: false,
  hasOutdoorArea: false,
  hasBalcony: false,
  hasWifi: false,
  furnishedRoom: false,
  cleaningService: false,
  bathroom: false,
  smokingAllowed: "",
  childrenAllowed: "",
  petsAllowed: "",
  guestsAllowed: "",
  alcoholAllowed: "",
  isUnfurnishedBedroom: false,
  hasEnsuite: false,
  hasCleaningService: false,
};

const PropertyDetailsForm = () => {
  const { control, handleSubmit, setValue, reset } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { property, feature, rule } = useProperty();

  const { mutateAsync } = useFeatureAndRuleRepository().createFeatureAndRule(
    property?.id
  );
  const { enqueueSnackbar } = useSnackbar();

  const { nextStep } = useSteps();

  function onSubmit({
    isUnfurnished,
    hasParking,
    hasGym,
    hasPool,
    hasAccessibility,
    hasAirConditioning,
    hasTv,
    hasCentralHeating,
    hasElevator,
    hasOutdoorArea,
    hasBalcony,
    hasWifi,
    smokingAllowed,
    childrenAllowed,
    petsAllowed,
    guestsAllowed,
    alcoholAllowed,
    isUnfurnishedBedroom,
    hasEnsuite,
    hasCleaningService,
  }: typeof defaultValues) {
    return mutateAsync({
      isUnfurnished: !isUnfurnished,
      hasParking: hasParking,
      hasGym: hasGym,
      hasPool: hasPool,
      hasAccessibility: hasAccessibility,
      hasAirConditioning: hasAirConditioning,
      hasTv: hasTv,
      hasCentralHeating: hasCentralHeating,
      hasElevator: hasElevator,
      hasOutdoorArea: hasOutdoorArea,
      hasBalcony: hasBalcony,
      hasWifi: hasWifi,
      isUnfurnishedBedroom: !isUnfurnishedBedroom,
      hasEnsuite: hasEnsuite,
      hasCleaningService: hasCleaningService,
      smokingAllowed: smokingAllowed == "true",
      childrenAllowed: childrenAllowed == "true",
      petsAllowed: petsAllowed == "true",
      guestsAllowed: guestsAllowed == "true",
      alcoholAllowed: alcoholAllowed == "true",
    })
      .then(nextStep)
      .catch((error) =>
        enqueueSnackbar(error.message, {
          variant: "error",
        })
      );
  }

  useEffect(() => {
    const isUnfurnished = feature != null && feature.isUnfurnished == false;
    const isUnfurnishedBedroom =
      feature != null && feature.isUnfurnishedBedroom == false;

    reset({
      isUnfurnished: isUnfurnished,
      hasParking: feature?.hasParking,
      hasGym: feature?.hasGym,
      hasPool: feature?.hasPool,
      hasAccessibility: feature?.hasAccessibility,
      hasAirConditioning: feature?.hasAirConditioning,
      hasTv: feature?.hasTv,
      hasCentralHeating: feature?.hasCentralHeating,
      hasElevator: feature?.hasElevator,
      hasOutdoorArea: feature?.hasOutdoorArea,
      hasBalcony: feature?.hasBalcony,
      hasWifi: feature?.hasWifi,
      isUnfurnishedBedroom: isUnfurnishedBedroom,
      hasEnsuite: feature?.hasEnsuite,
      hasCleaningService: feature?.hasCleaningService,
    });
  }, [feature, reset]);

  useEffect(() => {
    setValue("smokingAllowed", rule.smokingAllowed?.toString());
    setValue("childrenAllowed", rule.childrenAllowed?.toString());
    setValue("petsAllowed", rule.petsAllowed?.toString());
    setValue("alcoholAllowed", rule.alcoholAllowed?.toString());
    setValue("guestsAllowed", rule.guestsAllowed?.toString());
  }, [rule, setValue]);
  return (
    <S.Form id="step_form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <FormTitle title="Quais as regras do local e comodidades oferecidas?" />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <FormTitle title="Comodidades da propriedade" />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={4} md={3}>
          <CardSelect
            name="isUnfurnished"
            control={control}
            label="Mobiliado"
            icon={<ChairRounded fontSize="large" />}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <CardSelect
            name="hasParking"
            control={control}
            label="Estacionamento"
            icon={<LocalParkingRounded fontSize="large" />}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <CardSelect
            name="hasGym"
            control={control}
            label="Academia"
            icon={<FitnessCenterRounded fontSize="large" />}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <CardSelect
            name="hasPool"
            control={control}
            label="Piscina"
            icon={<PoolRounded fontSize="large" />}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <CardSelect
            name="hasAccessibility"
            control={control}
            label="Acessibilidade"
            icon={<AccessibleRounded fontSize="large" />}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <CardSelect
            name="hasAirConditioning"
            control={control}
            label="Ar condicionado"
            icon={<HeatPumpRounded fontSize="large" />}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <CardSelect
            name="hasTv"
            control={control}
            label="TV"
            icon={<TvRounded fontSize="large" />}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <CardSelect
            name="hasCentralHeating"
            control={control}
            label="Aquecimento"
            icon={<HvacRounded fontSize="large" />}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <CardSelect
            name="hasElevator"
            control={control}
            label="Elevador"
            icon={<ElevatorRounded fontSize="large" />}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <CardSelect
            name="hasOutdoorArea"
            control={control}
            label="Área externa"
            icon={<NaturePeopleRounded fontSize="large" />}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <CardSelect
            name="hasBalcony"
            control={control}
            label="Varanda"
            icon={<BalconyRounded fontSize="large" />}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <CardSelect
            name="hasWifi"
            control={control}
            label="Wi-fi"
            icon={<WifiRounded fontSize="large" />}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <FormTitle title="Serviços da Propriedade" />
        </Grid>
      </Grid>
      <Grid container rowSpacing={3} columnSpacing={3}>
        <Grid item xs={6} sm={4} md={3}>
          <CardSelect
            name="hasCleaningService"
            control={control}
            label="Serviço de limpeza"
            icon={<CleaningServicesRounded fontSize="large" />}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <FormTitle title="Comodidades do Quarto" />
        </Grid>
      </Grid>
      <Grid container rowSpacing={3} columnSpacing={3}>
        <Grid item xs={6} sm={4} md={3}>
          <CardSelect
            name="isUnfurnishedBedroom"
            control={control}
            label="Mobiliado"
            icon={<KingBedRounded fontSize="large" />}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <CardSelect
            name="hasEnsuite"
            control={control}
            label="Banheiro privativo"
            icon={<BathtubRounded fontSize="large" />}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <FormTitle title="Regras do local" />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <ChipField
            name="smokingAllowed"
            control={control}
            label="Inquilinos podem fumar?"
            options={optionsDefault}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ChipField
            name="childrenAllowed"
            control={control}
            label="Inquilinos podem ter criança?"
            options={optionsDefault}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ChipField
            name="petsAllowed"
            control={control}
            label="Inquilinos podem ter animais de estimação?"
            options={optionsDefault}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ChipField
            name="alcoholAllowed"
            control={control}
            label="Inquilinos podem consumir bebidas alcoólica?"
            options={optionsDefault}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <ChipField
            name="guestsAllowed"
            control={control}
            label="Inquilinos podem receber visitas?"
            options={optionsDefault}
          />
        </Grid>
      </Grid>
    </S.Form>
  );
};

export default PropertyDetailsForm;
