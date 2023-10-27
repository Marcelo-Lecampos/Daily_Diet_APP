import { TouchableOpacityProps } from "react-native";

export type ButtonPropsStyle = {
  widthType: "LARGE" | "MEDIUM" | "SMALL";
};

export type ButtonProps = TouchableOpacityProps & {
  title: string;
  buttonWidthType: "LARGE" | "MEDIUM" | "SMALL";
  variant: "PRIMARY" | "SECONDARY";
  icon: "PLUS" | "PENCIL" | "TRASH" | "NONE"
};
