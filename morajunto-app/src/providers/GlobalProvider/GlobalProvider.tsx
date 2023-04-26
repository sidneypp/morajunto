import {
  AuthProvider,
  QueryClientProvider,
  SnackbarProvider,
  ThemeProvider,
} from "@providers";
import { PropsWithChildren } from "react";

const GlobalProvider = (props: PropsWithChildren) => {
  return (
    <QueryClientProvider>
      <AuthProvider>
        <ThemeProvider>
          <SnackbarProvider>{props.children}</SnackbarProvider>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default GlobalProvider;
