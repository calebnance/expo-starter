import React from 'react';
import { StatusBar } from 'react-native';

// root stack navigation
import RootStack from './src/navigation/RootStack';

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <RootStack />
  </>
);

export default App;
