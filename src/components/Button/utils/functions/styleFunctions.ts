import { ButtonWidthTypeProps } from "../types/ButtonTypes";


export const getWidth = (widthType: ButtonWidthTypeProps) => {
    switch (widthType) {
      case "LARGE":
        return "327px";
  
      case "MEDIUM":
        return "191px";
  
      case "SMALL":
        return "135px";
    }}
  