import { useAuth } from "@hooks";
import { Header } from "@organisms";
import { PropsWithChildren } from "react";

export const WithoutFooterLayout = (props: PropsWithChildren) => {
  const { user, signOut } = useAuth();

  return (
    <>
      <Header user={user} signOut={signOut} />
      <main>{props.children}</main>
    </>
  );
};
