import { CommonLayout } from "@layouts";
import { LoginUser } from "@modules/users/pages/LoginUser";
import { NextPageWithLayout } from "./_app";

const Login: NextPageWithLayout = () => {
  return <LoginUser />;
};

Login.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};

export default Login;
