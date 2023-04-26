import { Section } from "@atoms";
import { CommonLayout } from "@layouts";
import { Typography } from "@mui/material";
import { NextPageWithLayout } from "./_app";

const NotFound: NextPageWithLayout = () => {
  return (
    <Section>
      <Typography>Não achei</Typography>
    </Section>
  );
};

NotFound.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};

export default NotFound;
