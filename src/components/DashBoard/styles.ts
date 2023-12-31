import styled from "styled-components/native";

type DashboardContainerProps = {
  BackgroundColor: boolean;
}

type DashboardIconProps = {
  icon: "LEFT" | "UP_RIGHT";
}


export const DashboardContainer = styled.View<DashboardContainerProps>`
  width: 327px;
  height: 102px;
  border-radius: 10px;

  justify-content: center;
  align-items: center;
  background-color: ${({ theme, BackgroundColor }) => BackgroundColor ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const DashboardNumber = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const DashboardTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.S}px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

  color: ${({ theme }) => theme.COLORS.GRAY_200};
  margin-bottom: 1rem;
`;

export const DashboardIcon = styled.TouchableOpacity<DashboardIconProps>`
  color: ${({ theme }) => theme.COLORS.GREEN_DARK};
  font-weight: bold;
  align-self: ${({ icon }) =>  icon === "LEFT" ? "flex-start" : "flex-end"};
  ${({ icon }) =>  icon === "LEFT" ? "margin-left: 1rem;" : "margin-right: 1rem;"}
`;