import { PencilSimpleLineIcon, TrashIcon } from "@components/Icons";
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

// type ButtonProps = {

// };

export const Button = ({ title, buttonWidthType, variant }: ButtonProps) => {
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
          <PencilSimpleLineIcon iconSize={18} />
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
          <PencilSimpleLineIcon iconSize={18} />
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
          <TrashIcon iconSize={18} />
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
          <TrashIcon iconSize={18} />
          <ButtonTitleSecondary>{title}</ButtonTitleSecondary>
        </SecondaryButton>
      </>
    );
  }
};
