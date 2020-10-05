import * as React from 'react';
import { StatusBar } from 'react-native';

// root stack navigation
import RootStack from './src/navigation/RootStack';

const App = () => (
  <React.Fragment>
    <StatusBar barStyle="default" />
    <RootStack />
  </React.Fragment>
);

export default App;
