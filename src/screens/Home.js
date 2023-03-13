import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fonts, gStyle, themes } from '../constants';

// context
import Context from '../context';

function Home() {
  // get main app state
  const { theme } = React.useContext(Context);

  // set current theming
  const { background, text } = themes[theme];

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <Text style={[styles.text, { color: text }]}>Home Screen</Text>
      <Text style={[styles.text, { color: text }]}>with Custom Font</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...gStyle.flex1,
    ...gStyle.flexCenter
  },
  text: {
    fontFamily: fonts.rubikRegular,
    fontSize: 18,
    lineHeight: 26
  }
});

export default Home;
