import { createSwitchNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import HomeContainer from './../screens/home/view/HomeContainer';

// const RouteConfigs = {
//   Home: {
//     screen: HomeContainer,
//     navigationOptions: ({ navigation }) => ({
//       title: `Home`,
//     }),
//   }
// }

// const SwitchNavigatorConfig = {
//   initialRouteName: 'Home'
// }

// const RootNavigation = createSwitchNavigator(RouteConfigs, SwitchNavigatorConfig)


const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeContainer,
    navigationOptions: ({ navigation }) => ({
      title: `Home`,
    }),
  }
});

const RootNavigation = createAppContainer(MainNavigator);

export default RootNavigation;