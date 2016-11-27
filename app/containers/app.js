'use strict';

import React from 'react';
import {
    Navigator,
    StatusBar,
    View,
} from 'react-native';

import Splash from '../pages/Splash';

class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor="#999"
          barStyle="default"
        />
        <Navigator
          initialRoute={{name: 'Splash', component: Splash}}
          configureScene={()=>{
            return  Navigator.SceneConfigs.PushFromRight;
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            return (
              <Component navigator = {navigator} route = {route} {...route.passProps} />
            )
          }}
        />
      </View>
    )
  }
}

export default App;
