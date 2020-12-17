import * as React from 'react';
import { Text, View } from 'react-native';
import * as Linking from 'expo-linking';
import { gStyle } from '../constants';

// components
import HeaderLeft from '../components/HeaderLeft';
import HeaderRight from '../components/HeaderRight';

// icons
import SvgGithub from '../icons/Svg.Github';
import SvgMoreHorizontal from '../icons/Svg.MoreHorizontal';

const More = () => (
  <View style={[gStyle.flex1, gStyle.flexCenter]}>
    <Text>More Screen</Text>
  </View>
);

More.navigationOptions = {
  headerLeft: () => (
    <HeaderLeft
      icon={<SvgGithub />}
      onPress={() => Linking.openURL('https://github.com/calebnance')}
    />
  ),
  headerRight: () => <HeaderRight icon={<SvgMoreHorizontal />} />,
  headerStyle: gStyle.navHeaderContainerStyle,
  headerTitleStyle: gStyle.navHeaderTitleStyle,
  title: 'More Header'
};

export default More;
