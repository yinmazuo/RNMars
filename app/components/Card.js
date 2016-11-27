import React from 'react';
import{
  Text
} from 'react-native';
import * as ZhihuNewsActions from '../actions/ZhihuNewsActions';

export default class Card extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Text numberOfLines={2}>
        {this.props.data}
      </Text>
    )
  }
}
