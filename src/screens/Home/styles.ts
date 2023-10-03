import styled, { css } from "styled-components/native";

// crie um header container

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;


export const DashboardContainer = styled.View`
  width: 327px;
  height: 102px;
  border-radius: 10px;



  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
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

// button no react native é o touchable opacity

export const DashboardIcon = styled.TouchableOpacity`
color: ${({ theme }) => theme.COLORS.GREEN_DARK};
font-weight: bold;
align-self: flex-end;
margin-right: 1rem;

  
`
