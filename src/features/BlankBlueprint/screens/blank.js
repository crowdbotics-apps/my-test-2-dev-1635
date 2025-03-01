import React from "react";
import { View } from "react-native";

export class _Blank extends React.Component {
  static navigationOptions = {
    title: "Blank".toUpperCase()
  };

  render = () => <View style={this.props.themedStyle.container}></View>;
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}));
