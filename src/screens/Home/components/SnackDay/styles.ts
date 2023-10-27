import styled from "styled-components/native";

export const DataTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  color: ${({ theme }) => theme.COLORS.GRAY_100};
  align-self: flex-start;
  margin-top: 1rem;
`;

export const SnackDayContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: .5rem;
  justify-content: space-between;
  align-items: center;
`;