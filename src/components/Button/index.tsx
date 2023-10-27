import {
  PrimaryColoredButton,
  SecondaryButton,
  SecondaryColoredButton,
  PrimaryButton,
  ButtonTitlePrimary,
  ButtonTitleSecondary,
} from "./styles";
import { useState } from "react";
import { ButtonProps } from "./utils/types/ButtonTypes";
import { getIcon } from "./utils/functions/iconFunctions";

export const Button = ({
  title,
  buttonWidthType,
  variant,
  icon,
}: ButtonProps) => {
  const [selected, setSelected] = useState(true);

  const handleSelectButtonPress = () => {
    setSelected(!selected);
  };

  if (variant === "PRIMARY" && !selected) {
    return (
      <>
        <PrimaryColoredButton
          widthType={buttonWidthType}
          onPress={handleSelectButtonPress}
        >
          {icon ? getIcon(icon) : null}
          <ButtonTitlePrimary>{title}</ButtonTitlePrimary>
        </PrimaryColoredButton>
      </>
    );
  }

  if (variant === "PRIMARY" && selected) {
    return (
      <>
        <PrimaryButton
          widthType={buttonWidthType}
          onPress={handleSelectButtonPress}
        >
          {icon ? getIcon(icon) : null}
          <ButtonTitlePrimary>{title}</ButtonTitlePrimary>
        </PrimaryButton>
      </>
    );
  }

  if (variant === "SECONDARY" && !selected) {
    return (
      <>
        <SecondaryColoredButton
          widthType={buttonWidthType}
          onPress={handleSelectButtonPress}
        >
          {icon ? getIcon(icon) : null}
          <ButtonTitleSecondary>{title}</ButtonTitleSecondary>
        </SecondaryColoredButton>
      </>
    );
  }

  if (variant === "SECONDARY" && selected) {
    return (
      <>
        <SecondaryButton
          widthType={buttonWidthType}
          onPress={handleSelectButtonPress}
        >
          {icon ? getIcon(icon) : null}
          <ButtonTitleSecondary>{title}</ButtonTitleSecondary>
        </SecondaryButton>
      </>
    );
  }
};
