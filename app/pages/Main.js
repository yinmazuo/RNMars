'use strict'

import React from 'react'
import {
  View,
  ListView
} from 'react-native'

import Card from '../components/Card'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let {fetchLatestNews} = this.props.actions;
    fetchLatestNews();
  }
  render() {
    let {data} = this.props.store;
    return(
      <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
        <Card data={data.date}/>
      </View>
    )
  }
}
