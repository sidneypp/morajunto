import { useAuth } from "@hooks";
import { Footer, Header } from "@organisms";
import { CommonLayoutProps } from "./CommonLayout.types";

export const CommonLayout = (props: CommonLayoutProps) => {
  const { user, signOut } = useAuth();

  return (
    <>
      <Header
        user={user}
        signOut={signOut}
        isHome={props?.isHome}
        position={props.headerPosition}
        elevation={props?.headerElevation}
      />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
