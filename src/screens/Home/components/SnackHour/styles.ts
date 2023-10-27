import styled from "styled-components/native";

type IconBallProps = {
  onDiet: boolean;
};

export const SnackCardContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 327px;
  padding: 15px 8px;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Snack = styled.View`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  flex-direction: row;
`;

export const Hour = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.S}px;
  font-weight: 700;
  align-self: center;
`;

export const SnackSpan = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const SnackText = styled.Text`
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const IconBall = styled.View<IconBallProps>`
  width: 14px;
  height: 14px;
  border-radius: 40px;
  background-color: ${({ theme, onDiet }) =>
    onDiet === true ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  margin-right: 1rem;
`;
