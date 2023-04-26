import { CommonLayout } from "@layouts";
import { Home as HomePage } from "@modules/home/pages/Home";
import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return <HomePage />;
};

Home.getLayout = function getLayout(page) {
  return <CommonLayout isHome>{page}</CommonLayout>;
};

export default Home;
