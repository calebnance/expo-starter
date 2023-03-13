import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { gStyle, themes } from '../constants';

// screens
import MoreScreen from '../screens/More';

// components
import HeaderLeft from '../components/HeaderLeft';
import HeaderRight from '../components/HeaderRight';

// icons
import SvgGithub from '../icons/Svg.Github';
import SvgMoreHorizontal from '../icons/Svg.MoreHorizontal';

// context
import Context from '../context';

const Stack = createNativeStackNavigator();

function StackMore() {
  // get main app state
  const { theme } = React.useContext(Context);

  // set current theming
  const { navHeaderStyle } = themes[theme];

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="More"
        component={MoreScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderLeft
              icon={<SvgGithub />}
              onPress={() => navigation.navigate('ModalGitHub')}
            />
          ),
          headerRight: () => (
            <HeaderRight
              icon={<SvgMoreHorizontal />}
              onPress={() => navigation.navigate('ModalMoreOptions')}
            />
          ),
          headerStyle: navHeaderStyle,
          headerTitleStyle: gStyle.navHeaderTitleStyle,
          title: 'More'
        })}
      />
    </Stack.Navigator>
  );
}

export default StackMore;
