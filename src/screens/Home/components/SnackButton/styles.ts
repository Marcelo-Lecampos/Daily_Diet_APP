import styled from "styled-components/native";

export const ButtonContainer = styled.View`
  display: flex;
  margin-top: 2.0rem;
`;

export const SnackTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

  margin-bottom: 0.5rem;
`;