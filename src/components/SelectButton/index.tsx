import { useState } from "react";
import { Text } from "react-native";
import {
  ContainerSelectButton,
  Circle,
  ColorContainerSelectButton,
} from "./styles";
import { SelectButtonProps, isYesOrNo } from "./utils/types/SelectButtonTypes";



export const SelectButton = ({ type = "YES" as isYesOrNo, title }: SelectButtonProps) => {
  const [selected, setSelected] = useState(false);

  const handleSelectButtonPress = () => {
    setSelected(!selected);
  };

  return (
    <div>
      {selected ? (
        <ColorContainerSelectButton
          type={type}
          onPress={handleSelectButtonPress}
        >
          <Circle type={type} />
          <Text>{title}</Text>
        </ColorContainerSelectButton>
      ) 
      : 
      (
        <ContainerSelectButton
          type={type}
          onPress={handleSelectButtonPress}
        >
          <Circle type={type} />
          <Text>{title}</Text>
        </ContainerSelectButton>
      )}
    </div>
  );
};

// todo:

// ajustar as cores no styles
