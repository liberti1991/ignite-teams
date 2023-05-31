import styled from "styled-components/native";

export const HighlightContainer = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const HighlightTitle = styled.Text`
  text-align: center;
  font-size: ${(p) => p.theme.FONT_SIZE.XL}px;
  font-family: ${(p) => p.theme.FONT_FAMILY.BOLD};
  color: ${(p) => p.theme.COLORS.WHITE};
`;

export const HighlightSubTitle = styled.Text`
  text-align: center;
  font-size: ${(p) => p.theme.FONT_SIZE.XL}px;
  font-family: ${(p) => p.theme.FONT_FAMILY.REGULAR};
  color: ${(p) => p.theme.COLORS.GRAY_300};
`;
