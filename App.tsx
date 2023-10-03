import { StatusBar } from "react-native";
import theme from "@theme/index";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { Text } from "react-native";
import { Routes } from "./src/routes";


export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {/* <Button type="SECONDARY" title="Teste" widthType="LARGE" icon="TrashIcon"/> */}
        {/* <SelectButton title="YES" type="YES"/>
        <SelectButton title="NO" type="NO"/> */}
        {/* <Button title="Label" buttonWidthType="MEDIUM" variant="PRIMARY" /> */}
        {/* <Input label="Label" /> */}
        {/* <Text>Teste</Text> */}
        {fontsLoaded ? <Routes /> : <Text> Loading... </Text>}

      </>
    </ThemeProvider>
  );
}
