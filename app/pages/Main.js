'use strict'

import React from 'react'
import {
  View,
  Text,
  ListView,
  StatusBar,
  RefreshControl,
  ToolbarAndroid,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'

import Card from '../components/Card'
import DrawerLayout from '../components/DrawerLayout'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      ds,
      isRefreshing: false,
      status: 'latest'
    }
    this._onRefresh = this._onRefresh.bind(this)
  }
  componentDidMount() {
    let { fetchLatestTopics } = this.props.actions
    fetchLatestTopics()
  }
  render() {
      let {data, isDone} = this.props.store,
          {navigator} = this.props,
          {height, width} = Dimensions.get('window')
      this.state.ds = this.state.ds.cloneWithRows(this.props.store.data)

      return(
        <DrawerLayout navigator={navigator}>
          <View style={{flex: 1,flexDirection: 'column'}}>
            <StatusBar
               backgroundColor="#005fff"
               barStyle="light-content"
             />
            <ToolbarAndroid
              style={{backgroundColor: '#007fff', height: 60, marginBottom: 10}}
              titleColor='#fff'
              title={'Mars-V2EX'}
            >
              <Text style={{color: '#fff'}}>
                @yinmazuo
              </Text>
            </ToolbarAndroid>
            {
              isDone ?
              <ListView
                dataSource={this.state.ds}
                renderRow={(rowData) => <Card {...rowData} navigator={navigator} />}
                style={{backgroundColor: 'rgba(192, 192, 192, .2)'}}
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.isRefreshing}
                    onRefresh={this._onRefresh}
                    tintColor="#007fff"
                    title="Loading..."
                    titleColor="#007fff"
                    colors={['#007fff']}
                    progressBackgroundColor="#fff"
                  />
                }
              /> :
              <ActivityIndicator
                color='#007fff'
                size='large'
                style={{marginTop: 20}}
              />
            }
          </View>
        </DrawerLayout>
      )
  }
  _onRefresh() {
     this.setState({isRefreshing: true})
     let { fetchLatestTopics, fetchHotTopics } = this.props.actions
     if (this.state.status === 'latest') {
       fetchHotTopics()
       this.setState({status: 'hot'})
     } else if (this.state.status === 'hot') {
       fetchLatestTopics()
       this.setState({status: 'latest'})
     }
     setTimeout(() => {
       this.setState({
         isRefreshing: false,
         ds: this.state.ds.cloneWithRows(this.props.store.data),
       })
     }, 3000)
   }
}
