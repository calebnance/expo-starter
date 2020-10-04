import * as React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import HomeScreen from '../screens/Home';

// icons
import SvgHome from '../icons/Svg.Home';

const Icon = ({ focused }) => <SvgHome active={focused} />;

Icon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

export default createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    navigationOptions: {
      tabBarIcon: Icon,
      tabBarLabel: 'Home tab'
    }
  }
);
