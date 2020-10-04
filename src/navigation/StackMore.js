import * as React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import MoreScreen from '../screens/More';

// icons
import SvgMenu from '../icons/Svg.Menu';

const Icon = ({ focused }) => <SvgMenu active={focused} />;

Icon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

export default createStackNavigator(
  {
    More: {
      screen: MoreScreen
    }
  },
  {
    navigationOptions: {
      tabBarIcon: Icon,
      tabBarLabel: 'More tab'
    }
  }
);
