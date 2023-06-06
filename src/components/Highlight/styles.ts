import styled, { css } from "styled-components/native";

export const HighlightContainer = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const HighlightTitle = styled.Text`
  ${(p) => css`
    font-size: ${p.theme.FONT_SIZE.XL}px;
    font-family: ${p.theme.FONT_FAMILY.BOLD};
    color: ${p.theme.COLORS.WHITE};
  `}
  text-align: center;
`;

export const HighlightSubTitle = styled.Text`
  ${(p) => css`
    font-size: ${p.theme.FONT_SIZE.XL}px;
    font-family: ${p.theme.FONT_FAMILY.REGULAR};
    color: ${p.theme.COLORS.GRAY_300};
  `}
  text-align: center;
`;
