import * as React from 'react';
import { StatusBar } from 'react-native';

// root stack navigation
import RootStack from './src/navigation/RootStack';

const App = () => (
  <React.Fragment>
    <StatusBar barStyle="dark-content" />
    <RootStack />
  </React.Fragment>
);

export default App;
