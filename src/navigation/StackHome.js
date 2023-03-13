import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { gStyle, themes } from '../constants';

// screens
import HomeScreen from '../screens/Home';

// context
import Context from '../context';

const Stack = createNativeStackNavigator();

function StackHome() {
  // get main app state
  const { theme } = React.useContext(Context);

  // set current theming
  const { navHeaderStyle } = themes[theme];

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: navHeaderStyle,
          headerTitleStyle: gStyle.navHeaderTitleStyle,
          title: 'Home'
        }}
      />
    </Stack.Navigator>
  );
}

export default StackHome;
