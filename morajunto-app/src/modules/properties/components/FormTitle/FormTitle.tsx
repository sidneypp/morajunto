import { Box, Typography } from "@mui/material";

type FormTitleProps = {
  title: string;
  subtitle?: string;
};

const FormTitle = ({ title, subtitle }: FormTitleProps) => {
  return (
    <Box>
      <Typography fontWeight="bold"> {title}</Typography>
      {subtitle && <Typography color="grey.600">{subtitle}</Typography>}
    </Box>
  );
};

export default FormTitle;
