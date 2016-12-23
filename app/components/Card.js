import React, { Component, PropTypes } from 'react'
import{
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import TopicDetail from '../pages/TopicDetail'

export default class Card extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let {navigator, member, modalVisible} = this.props,
        data = this.props
    return (
      <View style={style.card}>
        <View style={style.header}>
          <TouchableOpacity onPress={() => {
            // navigator.push({
            //   name: 'UserInfo',
            //   component: UserInfo,
            //   data: member.username
            // })
          }}>
            <View style={style.avatar}>
              <Image
                style={style.avatarImg}
                source={{uri: `http:${member.avatar_normal}`}}
              />
            </View>
          </TouchableOpacity>
          <Text style={style.name}>
            {`${member.username}发布主题`}
          </Text>
          <Text style={style.replies}>
            {this.props.replies}
          </Text>
        </View>

        <TouchableOpacity onPress={() => {
          navigator.push({
            name: 'TopicDetail',
            component: TopicDetail,
            data: data
          })
        }}>
          <View>
            <Text style={style.title}>
              {this.props.title}
            </Text>
            <Text
              numberOfLines={5}
              style={style.content}
            >
              {this.props.content}
            </Text>
          </View>
        </TouchableOpacity>

        <View style={style.footer}>
          <TouchableOpacity onPress={() => {
            // navigator.push({
            //   name: 'NodeInfo',
            //   component: NodeInfo,
            //   data: member.username
            // })
          }}>
            <Text style={{color: '#999'}}>
              {this.props.node.title}
            </Text>
          </TouchableOpacity>
          <Text style={{color: '#999'}}>
            {
              ' - ' +
              new Date(new Date().getTime() - this.props.created).toLocaleTimeString() +
              '创建'
            }
          </Text>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, .2)'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    height: 30,
    marginBottom: 5,
    alignItems: 'center'
  },
  avatar: {
    flex: 1,
  },
  avatarImg: {
    width: 30,
    height: 30,
    borderRadius: 5
  },
  name: {
    flex: 8,
    padding: 5,
    color: '#666'
  },
  replies: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#55b070',
    color: '#55b070',
    textAlign: 'center',
    borderRadius: 5
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    color: '#000',
  },
  content: {
    marginVertical: 10,
    lineHeight: 22,
    color: '#333',
  },
  footer: {
    flexDirection: 'row'
  }
})

Card.propTypes = {

}
