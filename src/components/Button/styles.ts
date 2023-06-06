import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { ButtonStyles } from ".";

export const ButtonContainer = styled(TouchableOpacity)<ButtonStyles>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: ${(p) =>
    p.type === "PRIMARY" ? p.theme.COLORS.GREEN_700 : p.theme.COLORS.RED_DARK};
`;

export const ButtonTitle = styled.Text`
  ${(p) => css`
    font-size: ${p.theme.FONT_SIZE.MD};
    color: ${p.theme.COLORS.WHITE};
    font-family: ${p.theme.FONT_FAMILY.BOLD};
  `}
`;
