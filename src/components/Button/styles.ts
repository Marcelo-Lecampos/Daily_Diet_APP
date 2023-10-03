import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { getWidth } from "./utils/functions/styleFunctions";
import { ButtonPropsStyle } from "./utils/types/ButtonTypes";



export const BaseButton = styled(TouchableOpacity)<ButtonPropsStyle>`
  min-height: 56px;
  max-height: 56px;

  width: ${({ widthType }) => getWidth(widthType)};
  gap: 0.5rem;
  border-radius: 6px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const PrimaryButton = styled(BaseButton)<ButtonPropsStyle>`
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const PrimaryColoredButton = styled(PrimaryButton)<ButtonPropsStyle>`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const SecondaryButton = styled(BaseButton)<ButtonPropsStyle>`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const SecondaryColoredButton = styled(SecondaryButton)<ButtonPropsStyle>`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const ButtonTitle = styled.Text`
  font-weight: bold;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
`;

export const ButtonTitlePrimary = styled(ButtonTitle)`
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ButtonTitleSecondary = styled(ButtonTitle)`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
