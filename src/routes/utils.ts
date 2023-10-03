import { DefaultTheme } from "@react-navigation/native";

export  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
      primary: "blue",
      text: "black",
    },
    dark: false,
    cardStyle: {
      backgroundColor: "white",
    },
    borderStyle: {
      borderWidth: 1,
      borderColor: "black",
    },
    notification: {
      backgroundColor: "red",
      color: "white",
    },
  };