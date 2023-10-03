import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { StyleProps } from "./utils/types/SelectButtonTypes";

export const ContainerSelectButton = styled(TouchableOpacity)<StyleProps>`
  min-height: 56px;
  max-height: 56px;
  width: 159.9px;
  border-radius: 6px;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const ColorContainerSelectButton = styled(ContainerSelectButton)`
    background-color: ${({ theme, type }) =>
    type === "YES" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

    border : 1px solid ${({ theme, type }) =>
    type === "YES" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK}
`;


export const Circle = styled.View<StyleProps>`
  margin-right: 8px;
  width: 8px;
  height: 8px;
  border-radius: 25px;
  background-color: ${({ theme, type }) =>
    type === "YES" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;
