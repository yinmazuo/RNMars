import React, { Component, PropTypes } from 'react'
import{
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

export default class Tabbar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={style.tabs}>
        {
          this.props.tabs.map((name, page) => {
            let isTabActive = this.props.activeTab === page,
                activeTextColor = this.props.activeTextColor || "#007fff",
                inactiveTextColor = this.props.inactiveTextColor || "#aaa"
            return (
              <TouchableOpacity
                style={style.tab}
                key={name}
                onPress={() => this.props.goToPage(page)}
                >
                <View>
                  <Text
                    style={[style.text, {color: isTabActive ? activeTextColor : inactiveTextColor}]}
                  >
                    {name}
                  </Text>
                </View>
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }
}

const style = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderTopColor: 'rgba(192, 192, 192, .2)',
    borderTopWidth: 1
  },
  text: {
    fontSize: 16,
    color: '#999',
    fontWeight: 'bold'
  }
});
