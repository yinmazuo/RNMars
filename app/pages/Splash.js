import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  InteractionManager
} from 'react-native';

import MainContainer from '../containers/MainContainer';

class Splash extends React.Component {
  componentDidMount () {
    const {navigator} = this.props;
    setTimeout(() => {
      InteractionManager.runAfterInteractions(() => {
        navigator.resetTo({
          component: MainContainer,
          name: 'Main'
        });
      });
    }, 1500);
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Mars!
        </Text>
        <Text style={styles.sentence}>
          不乱于心，不困于情，不畏将来，不念过往。
        </Text>
        <Text style={styles.info}>
          powered by 银马座
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  sentence: {
    textAlign: 'center',
    marginBottom: 10,
  },
  info: {
    textAlign: 'center',
  }
});

export default Splash;
