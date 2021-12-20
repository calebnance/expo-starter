import * as React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { func } from './src/constants';

// root stack navigation
import RootStack from './src/navigation/RootStack';

// app context state
import AppState from './src/context/AppState';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true
    };
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <AppLoading
          onError={() => {
            // console.warn
          }}
          onFinish={() => this.setState({ isLoading: false })}
          startAsync={func.loadAssetsAsync}
        />
      );
    }

    return (
      <AppState>
        <StatusBar barStyle="light-content" />

        <RootStack />
      </AppState>
    );
  }
}

export default App;
