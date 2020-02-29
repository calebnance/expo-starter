import { createBottomTabNavigator } from 'react-navigation-tabs';

// grabs stacks
import StackHome from './StackHome';
import StackMore from './StackMore';

export default createBottomTabNavigator(
  {
    StackHome,
    StackMore
  },
  {
    initialRouteName: 'StackHome'
  }
);
