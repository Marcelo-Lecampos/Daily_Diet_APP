import React from "react";
import { ButtonContainer, SnackTitle } from "./styles";
import { Button } from "@components/Button";

export const SnackButton = () => {
  return (
    <div>
      <ButtonContainer>
        <SnackTitle>Refeições</SnackTitle>
        <Button
          buttonWidthType="LARGE"
          title="Nova Refeição"
          variant="PRIMARY"
          icon="PLUS"
        />
      </ButtonContainer>
    </div>
  );
};
