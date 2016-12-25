import React, { Component, PropTypes } from 'react'
import{
  Text,
  Image,
  View,
  StyleSheet,
  DrawerLayoutAndroid,
  TouchableOpacity
} from 'react-native'

export default class DrawerLayout extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
      return (
        <DrawerLayoutAndroid
          drawerWidth={200}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
              <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I am in the Drawer!</Text>
            </View>
          )}>
          {this.props.children}
        </DrawerLayoutAndroid>
      )
  }
}
