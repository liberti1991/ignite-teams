import { MaterialIcons } from "@expo/vector-icons";
import styled, { css } from "styled-components/native";

export const PlayerCardContainer = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${(p) => p.theme.COLORS.GRAY_500};
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 6px;
`;

export const PlayerCardText = styled.Text`
  ${(p) => css`
    font-size: ${p.theme.FONT_SIZE.MD}px;
    color: ${p.theme.COLORS.GRAY_200};
    font-family: ${p.theme.FONT_FAMILY.REGULAR};
  `}

  flex: 1;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))`
  margin-left: 16px;
  margin-right: 4px;
`;
