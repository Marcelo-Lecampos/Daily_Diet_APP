import { View, Text } from "react-native";
import {
  DashboardContainer,
  DashboardIcon,
  DashboardNumber,
  DashboardTitle,
  HeaderContainer,
} from "./styles";
import { ArrowUpRightIcon, ForkKnifeIcon } from "@components/Icons";
import { Image } from "react-native";
import logoImg from "@assets/banner.png";

// const logoImg = require("../../assets/banner.png");

export const Home = () => {
  return (
    <>
      <HeaderContainer>
        <View>
          <ForkKnifeIcon />
          <Image source={logoImg} />
          <Image source={require("../../assets/banner.png")} />
          <Text>Olá, Mundo</Text>
        </View>
        <Text>Home</Text>
      </HeaderContainer>

      <DashboardContainer>
        <DashboardIcon>
          <ArrowUpRightIcon />
        </DashboardIcon>

        <DashboardNumber>90,86%</DashboardNumber>
        <DashboardTitle>das refeições dentro da dieta</DashboardTitle>
      </DashboardContainer>
    </>
  );
};
