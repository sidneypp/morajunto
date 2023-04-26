import { SnackbarProvider as Provider } from "notistack";
import { PropsWithChildren } from "react";

const SnackbarProvider = (props: PropsWithChildren) => {
  return (
    <Provider
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      autoHideDuration={3000}
    >
      {props.children}
    </Provider>
  );
};

export default SnackbarProvider;
