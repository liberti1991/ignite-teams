import { TouchableOpacityProps } from "react-native";
import { ButtonIconContainer } from "./styles";

type IButtonIcon = TouchableOpacityProps & {};

export function ButtonIcon({}: IButtonIcon) {
  return <ButtonIconContainer></ButtonIconContainer>;
}
