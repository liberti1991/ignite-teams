import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import { ButtonIconContainer, ButtonIconStyles, Icon } from "./styles";

type IButtonIcon = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconStyles;
};

export function ButtonIcon({ icon, type = "PRIMARY", ...rest }: IButtonIcon) {
  return (
    <ButtonIconContainer {...rest}>
      <Icon name={icon} type={type} />
    </ButtonIconContainer>
  );
}
