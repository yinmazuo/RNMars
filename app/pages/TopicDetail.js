import React, {Component, PropTypes} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  InteractionManager
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import WebViewPage from './WebViewPage'
import * as HttpService from '../utils/HttpService'

let {height, width} = Dimensions.get('window')

export default class TopicDetail extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { navigator, route } = this.props,
        data = route.data
    return (
      <View style={{flex: 1, position: 'relative'}}>
        <View style={style.header}>
          <View style={{flexDirection: 'row', marginVertical: 10, position: 'relative'}}>
            <View style={{width: 40, justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity onPress={navigator.pop}>
                <Icon
                  name="angle-left"
                  size={40}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
            <View style={{height: 40, justifyContent: 'center'}}>
              <TouchableOpacity onPress={() => {
                  navigator.push({
                    name: 'WebView',
                    component: WebViewPage,
                    data: data.node.url
                  })
                }}
              >
                <Text style={{color: '#fff', fontSize: 22}}>
                  {data.node.title}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{height: 40, justifyContent: 'center', position: 'absolute', right: 20}}>
              <TouchableOpacity onPress={() => {

                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    borderWidth: 1,
                    borderColor: '#fff',
                    paddingLeft: 2,
                    paddingRight: 2,
                    paddingVertical: 1,
                    borderRadius: 5
                  }}
                >
                  <Icon
                    name="comment"
                    size={20}
                    color="#fff"
                  />
                  <Text style={{color: '#fff', fontSize: 16, marginLeft: 5}}>
                    {data.replies}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => {
                navigator.push({
                  name: 'WebView',
                  component: WebViewPage,
                  data: data.url
                })
              }}
            >
              <Text
                numberOfLines={2}
                style={{color: '#fff', fontSize: 18, width: 0.8 * width, lineHeight: 22}}
              >
                {data.title}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.userInfoWrapper}>
          <View style={style.userInfo}>
            <View style={{flex: 2, alignItems: 'center'}}>
              <TouchableOpacity onPress={() => {
                HttpService.GetV2EX('/members/show.json?username=' + data.member.username)
                  .then(
                    (res) => {
                      navigator.push({
                        name: 'WebView',
                        component: WebViewPage,
                        data: res.url
                      })
                    }
                  )
                }}
              >
                <Image
                  style={{width: 48, height: 48, borderRadius: 5}}
                  source={{uri: `http:${data.member.avatar_normal}`}}
                />
              </TouchableOpacity>
            </View>
            <View style={{flex: 8}}>
              <Text style={{color: '#333'}}>
                {data.member.username}
              </Text>
              <Text style={{color: '#999'}}>
                {new Date(new Date().getTime() - data.created).toLocaleTimeString() + '创建'}
              </Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <Text style={style.content}>
            {data.content}
          </Text>
          <View>

          </View>
        </ScrollView>
      </View>
    )
  }
}

const style = StyleSheet.create({
  header: {
    height: 160,
    backgroundColor: '#007fff'
  },
  userInfoWrapper: {
    height: 70,
    position: 'relative',
    top: -35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 0.95 * width,
    height: 70,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(192, 192, 192, .2)',
    borderRadius: 8
  },
  content: {
    padding: 20,
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
  }
})
