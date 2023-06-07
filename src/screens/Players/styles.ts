import styled from "styled-components/native";

export const PlayerContainer = styled.View`
  flex: 1;
  background-color: ${(p) => p.theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const PlayerForm = styled.View`
  width: 100%;
  background-color: ${(p) => p.theme.COLORS.GRAY_700};
  flex-direction: row;
  justify-content: center;
  border-radius: 6px;
`;
