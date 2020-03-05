import React from 'react';
import { Text, View } from 'react-native';
import { gStyle } from '../constants';

const More = () => (
  <View style={[gStyle.flex1, gStyle.flexCenter]}>
    <Text>More Screen</Text>
  </View>
);

More.navigationOptions = {
  headerStyle: gStyle.navHeaderContainerStyle,
  headerTitleContainerStyle: gStyle.navHeaderTitleContainerStyle,
  headerTitleStyle: gStyle.navHeaderTitleStyle,
  title: 'More Header'
};

export default More;
