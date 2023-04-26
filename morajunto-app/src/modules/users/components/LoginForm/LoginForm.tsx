import { Link } from "@atoms";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@hooks";
import { TextField } from "@molecules";
import { LoadingButton } from "@mui/lab";
import { Divider, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as Yup from "yup";
import { PasswordInput } from "../PasswordInput";
import * as S from "./styles";

const schema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
});

const defaultValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const { singIn } = useAuth();

  const { mutateAsync, isLoading } = useMutation(singIn);
  const { enqueueSnackbar } = useSnackbar();

  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  function onSubmit(user: typeof defaultValues) {
    return mutateAsync(user).catch((error) =>
      enqueueSnackbar(error.message, {
        variant: "error",
      })
    );
  }

  return (
    <S.Wrapper>
      <Typography variant="h6">Acesse sua conta</Typography>
      <S.Form onSubmit={handleSubmit(onSubmit)} noValidate>
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
        <S.ActionWrapper>
          <Link href="">Esqueceu sua senha?</Link>
          <LoadingButton type="submit" variant="contained" loading={isLoading}>
            Entrar
          </LoadingButton>
        </S.ActionWrapper>
      </S.Form>
      <Divider />
      <S.RegisterWrapper>
        <Typography>
          Não tem uma conta? <Link href="/cadastro">Cadastre-se</Link>
        </Typography>
      </S.RegisterWrapper>
    </S.Wrapper>
  );
};

export default LoginForm;
