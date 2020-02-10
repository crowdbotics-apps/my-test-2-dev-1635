import { createStackNavigator } from "react-navigation-stack";

import Blank from "./screens/blank";
import Home from "./screens";

export const BlankBlueprintNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Blank: { screen: Blank },
  },
  {
    initialRouteName: "Home"
  }
);
