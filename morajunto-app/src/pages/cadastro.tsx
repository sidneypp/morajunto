import { CommonLayout } from "@layouts";
import { CreateUser } from "@modules/users/pages/CreateUser";
import type { NextPageWithLayout } from "./_app";

const Cadastro: NextPageWithLayout = () => {
  return <CreateUser />;
};

Cadastro.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};

export default Cadastro;
