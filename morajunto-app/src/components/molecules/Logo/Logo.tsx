import LogoSvg from "@assets/logo.svg";
import { Link } from "@atoms";
import * as S from "./Logo.styles";

const Logo = () => {
  return (
    <Link href="/" aria-label="Página Inicial do MoraJunto">
      <S.Wrapper>
        <LogoSvg />
      </S.Wrapper>
    </Link>
  );
};

export default Logo;
