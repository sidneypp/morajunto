import { PageTitle } from "@molecules";
import { Container } from "@mui/material";
import Profile from "../components/Profile/Profile";

export function MyAccount() {
  return (
    <>
      <PageTitle
        title="Minha Conta"
        subtitle="Utilize o formulário abaixo para editar as informações da sua conta"
      />
      <Container>
        <Profile />
      </Container>
    </>
  );
}
