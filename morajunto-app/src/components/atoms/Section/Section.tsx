import { PropsWithChildren } from "react";
import * as S from "./Section.styles";

const Section = ({ children }: PropsWithChildren) => {
  return <S.Section>{children}</S.Section>;
};

export default Section;
