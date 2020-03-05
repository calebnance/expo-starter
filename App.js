import React from 'react';
import { StatusBar } from 'react-native';

// root stack navigation
import RootStack from './src/navigation/RootStack';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StatusBar barStyle="dark-content" />
        <RootStack />
      </React.Fragment>
    );
  }
}
