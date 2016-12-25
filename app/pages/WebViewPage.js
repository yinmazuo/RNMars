import React, {Component, PropTypes} from 'react'
import {
  View,
  Text,
  StyleSheet,
  WebView,
  Clipboard,
  ToastAndroid,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class WebViewPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uri: this.props.route.data
    }
  }

  render() {
    let uri = this.state.uri
    return (
      <View style={{flex: 1, position: 'relative'}}>
        <View style={style.headerBar}>
          <View style={style.icon}>
            <TouchableOpacity onPress={this.goBack}>
              <Icon
                name="angle-left"
                size={30}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
          <View style={style.icon}>
            <TouchableOpacity onPress={this.goForward}>
              <Icon
                name="angle-right"
                size={30}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
          <View style={style.icon}>
            <TouchableOpacity onPress={this.reload}>
              <Icon
                name="repeat"
                size={20}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
          <View style={style.icon}>
            <TouchableOpacity onPress={this.copyUri}>
              <Icon
                name="copy"
                size={20}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        </View>
        <WebView
           ref={webview => this.webview = webview}
           automaticallyAdjustContentInsets={false}
           source={{uri: uri}}
           javaScriptEnabled={true}
           domStorageEnabled={true}
           decelerationRate="normal"
           startInLoadingState={true}
           onMessage={this.onMessage}
           injectedJavaScript="document.addEventListener('message', function(e) {eval(e.data)})"
           renderLoading={() => <ActivityIndicator color='#007fff' size='large' style={{marginTop: 20}}/>}
         />
      </View>
    )
  }

  goBack = () => {
    this.webview.goBack()
    this.postMessage()
  }

  goForward = () => {
    this.webview.goForward()
    this.postMessage()
  }

  reload = () => {
    this.webview.reload()
  }
  copyUri = () => {
    Clipboard.setString(this.state.uri)
    ToastAndroid.show('Copied URL successfully!', ToastAndroid.SHORT)
  }
  postMessage = () => {
    if (this.webview) {
      this.webview.postMessage('window.postMessage(window.location)')
    }
  }
  onMessage = (e) => {
    this.setState({uri: e.nativeEvent.data})
  }
}


const style = StyleSheet.create({
  headerBar: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#007fff',
    justifyContent: 'center',

  },
  icon: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
