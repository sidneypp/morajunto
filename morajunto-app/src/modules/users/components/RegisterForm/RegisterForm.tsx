import { Link } from "@atoms";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@hooks";
import { TextField } from "@molecules";
import { LoadingButton } from "@mui/lab";
import { Divider, Typography } from "@mui/material";
import { CreateUserDto, useUserRepository } from "@repositories";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { PasswordInput } from "../PasswordInput";
import * as S from "./styles";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const defaultValues = {
  name: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  const { singIn } = useAuth();

  const { mutateAsync, isLoading } = useUserRepository().createUser();
  const { enqueueSnackbar } = useSnackbar();

  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  async function onSubmit(user: CreateUserDto) {
    return mutateAsync(user).then(() => {
      singIn({ email: user.email, password: user.password })
        .finally(() => {
          enqueueSnackbar("Cadastro realizado com sucesso!", {
            variant: "success",
          });
        })
        .catch((error) =>
          enqueueSnackbar(error.message, {
            variant: "error",
          })
        );
    });
  }

  return (
    <S.Wrapper>
      <Typography variant="h6">Crie a sua conta. É grátis!</Typography>
      <S.Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          name="name"
          control={control}
          type="text"
          label="Nome"
          disabled={isLoading}
        />
        <TextField
          name="email"
          control={control}
          type="email"
          label="E-mail"
          disabled={isLoading}
        />
        <PasswordInput
          name="password"
          control={control}
          type="password"
          label="Senha"
          disabled={isLoading}
        />
        <LoadingButton type="submit" variant="contained" loading={isLoading}>
          Cadastra-se
        </LoadingButton>
      </S.Form>
      <Divider />
      <S.LoginWrapper>
        <Typography>
          Já tem uma conta? <Link href="/login">Entrar</Link>
        </Typography>
      </S.LoginWrapper>
    </S.Wrapper>
  );
};

export default RegisterForm;
