import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { gStyle } from '../constants';

const ModalGitHub = () => (
  <View style={[gStyle.flex1, gStyle.flexCenter]}>
    <Text style={styles.text}>Full Modal Example Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: '400'
  }
});

export default ModalGitHub;
