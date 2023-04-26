import { PropertyCard } from "@molecules";
import { Grid } from "@mui/material";
import { PropertiesListProps } from "./PropertiesList.types";

const PropertiesList = ({ properties }: PropertiesListProps) => {
  return (
    <Grid container spacing={2}>
      {properties.map((property, index) => (
        <Grid key={index} item xs={12} sm={6} lg={3}>
          <PropertyCard property={property} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PropertiesList;
