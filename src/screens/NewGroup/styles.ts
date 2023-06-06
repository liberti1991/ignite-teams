import Icon from "react-native-vector-icons/FontAwesome";
import styled from "styled-components/native";

export const NewGroupContainer = styled.View`
  flex: 1;
  background-color: ${(p) => p.theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const NewGroupContent = styled.View`
  flex: 1;
  justify-content: center;
`;

export const NewGroupCardIcon = styled(Icon).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GREEN_700,
}))`
  align-self: center;
`;
