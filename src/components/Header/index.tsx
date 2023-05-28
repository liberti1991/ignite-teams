import logoImg from "../../assets/logo.png";
import { HeaderContainer, HeaderLogo } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo source={logoImg} />
    </HeaderContainer>
  );
}
