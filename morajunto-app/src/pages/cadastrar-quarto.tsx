import { WithoutFooterLayout } from "@layouts";
import { CreateProperty } from "@modules/properties/pages/CreateProperty";
import { getUser } from "@services";
import { GetServerSidePropsContext } from "next";
import { NextPageWithLayout } from "./_app";

const CadastrarQuarto: NextPageWithLayout = () => {
  return <CreateProperty />;
};

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const user = getUser(context);

  if (!user.access_token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

CadastrarQuarto.getLayout = function getLayout(page) {
  return <WithoutFooterLayout>{page}</WithoutFooterLayout>;
};

export default CadastrarQuarto;
