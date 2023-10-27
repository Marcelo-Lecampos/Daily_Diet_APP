import React from "react";
import { HeaderContainer, Logo, LogoContainer, UserIcon } from "./styles";
import { ForkKnifeIcon } from "@components/Icons";
import logoImg from "@assets/banner.png";
import userImg from "@assets/user.png";

export const HeaderHome = () => {
  return (
    <div>
      <HeaderContainer>
        <LogoContainer>
          <ForkKnifeIcon />
          <Logo source={logoImg} />
        </LogoContainer>
        <UserIcon source={userImg} />
      </HeaderContainer>
    </div>
  );
};
