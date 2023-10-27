import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 1rem;
  width: 327px;
`;

export const Logo = styled.Image`
  width: 36px;
  height: 31px;
`;

export const LogoContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const UserIcon = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
`;
