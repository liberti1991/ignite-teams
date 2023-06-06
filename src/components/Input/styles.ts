import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const InputContainer = styled(TextInput)`
  ${(p) => css`
    background-color: ${p.theme.COLORS.GRAY_700};
    color: ${p.theme.COLORS.WHITE};
    font-family: ${p.theme.FONT_FAMILY.REGULAR};
    font-size: ${p.theme.FONT_SIZE.MD}px;
  `}

  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  padding: 16px;
`;
