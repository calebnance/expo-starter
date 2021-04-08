import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { gStyle } from '../constants';

const Home = () => (
  <View style={[gStyle.flex1, gStyle.flexCenter]}>
    <Text style={styles.text}>Home Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: '600'
  }
});

export default Home;
