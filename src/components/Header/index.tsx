import { useNavigation } from "@react-navigation/native";
import logoImg from "../../assets/logo.png";
import { HeaderBtn, HeaderContainer, HeaderLogo } from "./styles";

import Icon from "react-native-vector-icons/AntDesign";

interface IHeader {
  showBtn?: boolean;
}

export function Header({ showBtn = false }: IHeader) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("groups");
  }

  return (
    <HeaderContainer>
      {showBtn && (
        <HeaderBtn onPress={handleGoBack}>
          <Icon name="left" color="#FFF" size={32} />
        </HeaderBtn>
      )}
      <HeaderLogo source={logoImg} />
    </HeaderContainer>
  );
}
