import { createBottomTabNavigator } from 'react-navigation-tabs';
import { colors, gStyle } from '../constants';

// grabs stacks
import StackHome from './StackHome';
import StackMore from './StackMore';

export default createBottomTabNavigator(
  {
    StackHome,
    StackMore
  },
  {
    initialRouteName: 'StackHome',
    tabBarOptions: {
      activeTintColor: colors.itemActive,
      inactiveTintColor: colors.itemInactive,
      labelStyle: gStyle.navTabLabelStyle,
      style: gStyle.navTabStyle
    }
  }
);
