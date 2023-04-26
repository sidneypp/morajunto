import { PageTitle } from "@molecules";
import { Container } from "@mui/material";
import { HostForm } from "../components/HostForm";

export const HostStep = () => {
  return (
    <>
      <PageTitle
        title="Cadastrar Imóvel"
        subtitle="Preencha os campos abaixo com informações sobre o imóvel que você
            está oferecendo."
      />
      <Container>
        <HostForm />
      </Container>
    </>
  );
};
