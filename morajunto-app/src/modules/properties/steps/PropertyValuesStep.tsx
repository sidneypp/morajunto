import { PageTitle } from "@molecules";
import { Container } from "@mui/material";
import { PropertyValuesForm } from "../components/PropertyValuesForm";

export const PropertyValuesStep = () => {
  return (
    <>
      <PageTitle
        title="Cadastrar Imóvel"
        subtitle="Preencha os campos abaixo com informações sobre o imóvel que você
            está oferecendo."
      />
      <Container>
        <PropertyValuesForm />
      </Container>
    </>
  );
};
