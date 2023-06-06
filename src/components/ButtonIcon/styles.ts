import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonIconStyles = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonIconStyles;
};

export const ButtonIconContainer = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  margin-left: 12px;
  justify-content: center;
  align-items: center;
`;
