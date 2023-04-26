import { PageTitle } from "@molecules";
import { Container } from "@mui/material";
import { PropertyImagesForm } from "../components/PropertyImagesForm";

export const PropertyImagesStep = () => {
  return (
    <>
      <PageTitle
        title="Cadastrar Imóvel"
        subtitle="Preencha os campos abaixo com informações sobre o imóvel que você
            está oferecendo."
      />
      <Container>
        <PropertyImagesForm />
      </Container>
    </>
  );
};
