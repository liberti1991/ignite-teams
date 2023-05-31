import logoImg from "../../assets/logo.png";
import { HeaderBtn, HeaderContainer, HeaderLogo } from "./styles";

import Icon from "react-native-vector-icons/AntDesign";

interface IHeader {
  showBtn?: boolean;
}

export function Header({ showBtn }: IHeader) {
  return (
    <HeaderContainer>
      {showBtn && (
        <HeaderBtn>
          <Icon name="left" color="#FFF" size={32} />
        </HeaderBtn>
      )}
      <HeaderLogo source={logoImg} />
    </HeaderContainer>
  );
}
//  parei no bibliotoca de icones
