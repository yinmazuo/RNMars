'use strict'

import React from 'react'
import {
    Navigator,
    StatusBar,
    View,
    BackAndroid
} from 'react-native'

import Splash from '../pages/Splash'

let _navigator, isRemoved = false

class App extends React.Component {
  constructor(props) {
    super(props)
    this.renderScene = this.renderScene.bind(this)
    this.goBack = this.goBack.bind(this)
    BackAndroid.addEventListener('hardwareBackPress', this.goBack)
  }
  goBack () {
    if (_navigator && _navigator.getCurrentRoutes().length > 1) {
      _navigator.pop();
      return true;
    }
    return false;
  }

  renderScene (route, navigator) {
    let Component = route.component;
    _navigator = navigator;
    if (route.name === 'WebViewPage') {
      BackAndroid.removeEventListener('hardwareBackPress', this.goBack);
      isRemoved = true;
    } else {
      if (isRemoved) {
        BackAndroid.addEventListener('hardwareBackPress', this.goBack);
      }
    }
    return (
      <Component navigator={navigator} route={route}/>
    )
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor="#F5FCFF"
          barStyle="light-content"
         />
        <Navigator
          initialRoute={{name: 'Splash', component: Splash}}
          configureScene={()=>{
            return  Navigator.SceneConfigs.FloatFromRight
          }}
          renderScene={this.renderScene}
        />
      </View>
    )
  }
}

export default App
