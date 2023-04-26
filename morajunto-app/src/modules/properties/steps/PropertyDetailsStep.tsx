import { PageTitle } from "@molecules";
import { Container } from "@mui/material";
import { PropertyDetailsForm } from "../components/PropertyDetailsForm";

export const PropertyDetailsStep = () => {
  return (
    <>
      <PageTitle
        title="Cadastrar Imóvel"
        subtitle="Preencha os campos abaixo com informações sobre o imóvel que você
            está oferecendo."
      />
      <Container>
        <PropertyDetailsForm />
      </Container>
    </>
  );
};
