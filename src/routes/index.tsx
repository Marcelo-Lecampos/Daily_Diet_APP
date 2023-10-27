import { NavigationContainer } from "@react-navigation/native";
import { View, PixelRatio } from "react-native";
import { AppRoutes } from "./app.routes";
import { MyTheme } from "./utils";


export const Routes = () => {
  const marginSize = PixelRatio.getPixelSizeForLayoutSize(10);



  return (
    <>
      <View style={{ flex: 1, marginHorizontal: marginSize }}>
        <NavigationContainer theme={MyTheme}>
          <AppRoutes />
        </NavigationContainer>
      </View>
    </>
  );
};
