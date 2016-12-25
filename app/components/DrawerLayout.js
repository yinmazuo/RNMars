import React, { Component, PropTypes } from 'react'
import{
  Text,
  Image,
  View,
  StyleSheet,
  DrawerLayoutAndroid,
  TouchableOpacity
} from 'react-native'

import WebViewPage from '../pages/WebViewPage'
import Icon from 'react-native-vector-icons/FontAwesome'
import About from '../pages/About'

export default class DrawerLayout extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
      let {navigator} = this.props
      return (
        <DrawerLayoutAndroid
          ref={drawerlayout => this.drawerlayout = drawerlayout}
          drawerWidth={200}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => (
            <View style={style.wrapper}>
              <Text style={{marginVertical: 20, fontSize: 28, textAlign: 'center', color: '#007fff'}}>Mars</Text>
              <TouchableOpacity  onPress={() => this.drawerlayout.closeDrawer()}>
                <View style={style.item}>
                  <Icon
                    name="home"
                    size={20}
                    color="#007fff"
                  />
                  <Text style={style.itemText}>Home</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                  this.drawerlayout.closeDrawer()
                  navigator.push({
                    name: 'About',
                    component: About
                  })
                }}
              >
                <View style={style.item}>
                  <Icon
                    name="file-text"
                    size={20}
                    color="#007fff"
                  />
                  <Text style={style.itemText}>About</Text>
                </View>
              </TouchableOpacity>
              {
                [
                  {url: 'https://github.com/yinmazuo', title: 'Github', icon: 'github'},
                  {url: 'https://yinmazuo.github.io/', title: 'Blog', icon: 'user'},
                  {url: '', title: 'Code', icon: 'code'}
                ].map((item, i) => (
                    <TouchableOpacity onPress={() => {
                        this.drawerlayout.closeDrawer()
                        navigator.push({
                          name: 'WebView',
                          component: WebViewPage,
                          data: item.url
                        })
                      }}
                      key={i}
                    >
                      <View style={style.item}>
                        <Icon
                          name={item.icon}
                          size={20}
                          color="#007fff"
                        />
                        <Text style={style.itemText}>{item.title}</Text>
                      </View>
                    </TouchableOpacity>
                  ))
              }
              <Text style={style.footer}>Copyright © 2016 Yinmazuo</Text>
            </View>
          )}>
          {this.props.children}
        </DrawerLayoutAndroid>
      )
  }
}


const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: 200,
    paddingLeft: 20,
  },
  itemText: {
    fontSize: 20,
    color: '#333',
    textAlign: 'left',
    marginLeft: 10
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    color: '#666',
    width: 200,
    textAlign: 'center'
  }
})
