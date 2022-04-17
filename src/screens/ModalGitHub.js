import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { gStyle, themes } from '../constants';

// context
import Context from '../context';

const ModalGitHub = () => {
  // get main app state
  const { theme } = React.useContext(Context);

  // set current theming
  const { background, text } = themes[theme];

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <Text style={[styles.text, { color: text }]}>
        Full Modal Example Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...gStyle.flex1,
    ...gStyle.flexCenter
  },
  text: {
    fontSize: 14,
    fontWeight: '400'
  }
});

export default ModalGitHub;
