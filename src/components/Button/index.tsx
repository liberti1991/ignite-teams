import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonTitle } from "./styles";

type IButtonStylesProps = "PRIMARY" | "SECONDARY";

export interface ButtonStyles {
  type: IButtonStylesProps;
}
type IButton = TouchableOpacityProps & {
  title: string;
  type?: IButtonStylesProps;
};

export function Button({ title, type = "PRIMARY", ...rest }: IButton) {
  return (
    <ButtonContainer type={type} {...rest}>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContainer>
  );
}
