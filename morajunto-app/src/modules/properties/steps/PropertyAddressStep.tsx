import { PageTitle } from "@molecules";
import { Container } from "@mui/material";
import { PropertyAddressForm } from "../components/PropertyAddressForm";

export const PropertyAddressStep = () => {
  return (
    <>
      <PageTitle
        title="Cadastrar Imóvel"
        subtitle="Preencha os campos abaixo com informações sobre o imóvel que você
            está oferecendo."
      />
      <Container>
        <PropertyAddressForm />
      </Container>
    </>
  );
};
