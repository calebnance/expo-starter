import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// tab navigation
import TabNavigation from './TabNavigation';

const StackNavigator = createStackNavigator(
  {
    Main: {
      screen: TabNavigation
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Main'
  }
);

// app container
const App = createAppContainer(StackNavigator);

export default App;
