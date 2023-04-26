import { CommonLayout } from "@layouts";
import { SearchProperty } from "@modules/properties/pages/SearchProperty";
import { City, Neighborhood } from "@types";
import { GetStaticPropsContext } from "next";
import {
  fetchCities,
  fetchCityByNormalizedName,
} from "src/repositories/City/City.fetch";
import {
  fetchNeighborhoods,
  fetchNeighborhoodsByNormalizedName,
} from "src/repositories/Neighborhood/Neighborhood.fetch";
import { NextPageWithLayout } from "../../_app";

const BuscaImovel: NextPageWithLayout<{
  city: City;
  neighborhood?: Neighborhood;
}> = ({ city, neighborhood }) => {
  return <SearchProperty city={city} neighborhood={neighborhood} />;
};

export async function getStaticPaths() {
  const cities = await fetchCities();
  const neighborhoods = await fetchNeighborhoods();

  const citiesPaths = cities.map((city) => ({
    params: {
      search: [city.normalizedName],
    },
  }));
  const neighborhoodsPaths = neighborhoods.map((neighborhood) => ({
    params: {
      search: [neighborhood.city?.normalizedName, neighborhood.normalizedName],
    },
  }));

  return {
    paths: [...citiesPaths, ...neighborhoodsPaths],
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const [cityNormalizedName, neighborhoodNormalizedName] =
    params.search as string[];

  const city = await fetchCityByNormalizedName(cityNormalizedName);
  let neighborhood = null as unknown as Neighborhood;

  if (!city.id) {
    return {
      notFound: true,
    };
  }

  if (neighborhoodNormalizedName) {
    neighborhood = await fetchNeighborhoodsByNormalizedName(
      city.id,
      neighborhoodNormalizedName
    );
  }

  return { props: { city, neighborhood } };
}

BuscaImovel.getLayout = function getLayout(page) {
  return (
    <CommonLayout headerPosition="static" headerElevation={0}>
      {page}
    </CommonLayout>
  );
};

export default BuscaImovel;
