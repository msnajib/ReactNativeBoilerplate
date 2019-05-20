import React, { Component } from 'react';
import { BackHandler, View } from "react-native";
import { NavigationActions } from 'react-navigation';


const handleBackAndroid = (StackComponent) => {
  class CustomHandleBackAndroid extends Component {

    componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
      const { dispatch, state } = this.props;
      console.log("state : ", state)
      if ((state.index === 1 && state.routes[1].index === 0) ||
        (state.index === 2 && state.routes[2].index === 0)) {
        return false;
      }

      dispatch(NavigationActions.back());
      return true;
    }

    //   // handle back for screen login and orders
    //   // if ((
    //   //   router.index === 1 &&
    //   //   router.routes[1].index === 0
    //   // ) ||
    //   //   (
    //   //     router.index === 2 &&
    //   //     router.routes[2].index === 0 &&
    //   //     router.routes[2].routes[0].index === 0 &&
    //   //     router.routes[2].routes[0].routes[0].index === 0 &&
    //   //     router.routes[2].routes[0].routes[0].routes[0].index === 0
    //   //   )
    //   // ) {
    //   //   this.countPressBack = this.countPressBack + 1;
    //   //   if (this.countPressBack < 2) {
    //   //     ToastAndroid.show('Press BACK again to Exit', ToastAndroid.SHORT);
    //   //     setTimeout(() => {
    //   //       this.countPressBack = 0;
    //   //     }, 1000);
    //   //   } else {
    //   //     return false;
    //   //   }
    //   // }

    render() {
      return (
        <View style={{ flex: 1 }}>
          <StackComponent {...this.props} />
        </View>
      )
    }
  }

  return CustomHandleBackAndroid;
}


export default handleBackAndroid;