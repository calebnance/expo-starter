import * as React from 'react';
import { Text, View } from 'react-native';
import { gStyle } from '../constants';

const Home = () => (
  <View style={[gStyle.flex1, gStyle.flexCenter]}>
    <Text>Home Screen</Text>
  </View>
);

Home.navigationOptions = {
  headerStyle: gStyle.navHeaderContainerStyle,
  headerTitleStyle: gStyle.navHeaderTitleStyle,
  title: 'Home Header'
};

export default Home;
