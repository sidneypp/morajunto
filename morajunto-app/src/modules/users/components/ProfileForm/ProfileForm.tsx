import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@hooks";
import { NumberField, TextField } from "@molecules";
import PersonIcon from "@mui/icons-material/Person";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { LoadingButton } from "@mui/lab";
import { Divider, Grid, MenuItem, Typography } from "@mui/material";
import { useUserRepository } from "@repositories";
import { User } from "@types";
import { masker, removeEmptyValues } from "@utils";
import dayjs from "dayjs";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NumberFormatValues } from "react-number-format";
import * as yup from "yup";
import { genders } from "./config";
import * as S from "./styles";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  birthDate: yup.object({
    formattedValue: yup.string().test({
      message: "Digite uma data de nascimento válida",
      test: (originalValue) => {
        const date = dayjs(originalValue, "DD/MM/YYYY", true);
        return date.isValid() && date.isBefore(dayjs());
      },
    }),
  }),
  phoneNumber: yup.object().shape({
    value: yup.string().length(11, "Digite o celular corretamente com o DDD"),
  }),
});

const defaultValues = {
  name: "",
  email: "",
  gender: "",
  birthDate: {} as NumberFormatValues,
  phoneNumber: {} as NumberFormatValues,
};

const ProfileForm = () => {
  const { user } = useAuth();

  const { mutateAsync, isLoading } = useUserRepository().updateUser();
  const { enqueueSnackbar } = useSnackbar();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  function onSubmit({ birthDate, phoneNumber, ...user }: typeof defaultValues) {
    const formattedBirthDate = birthDate.formattedValue
      ? dayjs(birthDate.formattedValue, "DD/MM/YYYY").format("YYYY-MM-DD")
      : "";

    const userWithoutEmpties = removeEmptyValues<User>({
      ...user,
      birthDate: formattedBirthDate,
      phoneNumber: phoneNumber?.value,
    });

    return mutateAsync(userWithoutEmpties)
      .then(() => {
        enqueueSnackbar("Dados atualizados com sucesso", {
          variant: "success",
        });
      })
      .catch((error) =>
        enqueueSnackbar(error.message, {
          variant: "error",
        })
      );
  }

  useEffect(() => {
    if (user) {
      const birthDate = user.birthDate
        ? dayjs(user.birthDate).format("DD/MM/YYYY")
        : "";
      const phoneNumber = user.phoneNumber ?? "";

      reset({
        name: user.name,
        email: user.email,
        gender: user.gender ?? "",
        birthDate: {
          value: birthDate,
          formattedValue: birthDate,
        },
        phoneNumber: {
          value: phoneNumber,
          formattedValue: masker(phoneNumber, "(99) 9 9999-9999"),
        } as unknown as NumberFormatValues,
      });
    }
  }, [reset, user]);

  return (
    <S.ProfileCard>
      <S.CardTitle>
        <PersonIcon />
        <Typography variant="h6">Informações Básicas</Typography>
      </S.CardTitle>
      <Divider />
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <TextField
              name="name"
              control={control}
              type="text"
              label="Nome"
              disabled={isLoading}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <TextField
              name="email"
              control={control}
              type="email"
              label="E-mail"
              disabled={isLoading}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <TextField
              select
              name="gender"
              control={control}
              type="email"
              label="Gênero"
              disabled={isLoading}
              fullWidth
            >
              {genders.map((gender) => (
                <MenuItem key={gender.value} value={gender.value}>
                  {gender.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={8}>
            <NumberField
              name="birthDate"
              control={control}
              placeholder="dd/mm/aaaa"
              label="Data de Nascimento"
              format="##/##/####"
              disabled={isLoading}
              error={Boolean(errors.birthDate?.formattedValue)}
              helperText={errors.birthDate?.formattedValue?.message}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <NumberField
              name="phoneNumber"
              control={control}
              type="tel"
              label="Celular"
              format="(##) # ####-####"
              disabled={isLoading}
              error={Boolean(errors.phoneNumber?.value)}
              helperText={errors.phoneNumber?.value?.message}
              fullWidth
            />
          </Grid>
          <Grid item md={4} />

          <Grid item xs={12} md={3}>
            <LoadingButton
              type="submit"
              variant="contained"
              startIcon={<SaveOutlinedIcon />}
              loading={isLoading}
              fullWidth
            >
              Salvar
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
    </S.ProfileCard>
  );
};

export default ProfileForm;
