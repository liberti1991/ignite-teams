import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import Icon from "react-native-vector-icons/FontAwesome";

export const GroupCardContainer = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${(p) => p.theme.COLORS.GRAY_500};
  border-radius: 6px;
  flex-direction: row;
  padding: 24px;
  margin-bottom: 12px;
`;

export const GroupCardTitle = styled.Text`
  font-size: ${(p) => p.theme.FONT_SIZE.MD}px;
  color: ${(p) => p.theme.COLORS.GRAY_200};
  font-family: ${(p) => p.theme.FONT_FAMILY.REGULAR};
`;

export const GroupCardIcon = styled(Icon).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
}))`
  margin-right: 20px;
`;
