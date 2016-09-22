/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet
} from 'react-native';

import BaseListView from './BaseListView';

class RNDailyPractice extends Component {
  render() {
    return ( 
      <Navigator 
        initialRoute = {{ title: 'Daily', index: 0 }}
        renderScene= { (route, navigator) => {
          return ( 
            <BaseListView 
              title={route.title}
              onForward={ () => {
                const nextIndex = route.index + 1;
                navigator.push({
                  title: 'Scene' + nextIndex,
                  index: nextIndex
                });
              }}
              onBack= { () => {
                if (route.index > 0) {
                  navigator.pop();
                }
              }}
            />
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('RNDailyPractice', () => RNDailyPractice);