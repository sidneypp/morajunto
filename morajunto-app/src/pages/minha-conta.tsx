import { CommonLayout } from "@layouts";
import { MyAccount } from "@modules/users/pages/MyAccount";
import { getUser } from "@services";
import type { GetServerSidePropsContext } from "next";
import { NextPageWithLayout } from "./_app";

const MinhaConta: NextPageWithLayout = () => {
  return <MyAccount />;
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

MinhaConta.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};

export default MinhaConta;
