import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { gStyle, images, themes } from '../constants';

// context
import Context from '../context';

function ModalGitHub() {
  // get main app state
  const { theme } = React.useContext(Context);

  // set current theming
  const { background, text } = themes[theme];

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <View style={gStyle.spacer4} />

      <Text style={[styles.text, { color: text }]}>
        Full Modal Example Screen with preloaded image
      </Text>

      <View style={gStyle.spacer4} />

      <Image source={images.salyWave} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...gStyle.flex1,
    alignItems: 'center'
  },
  text: {
    fontSize: 14,
    fontWeight: '400'
  },
  image: {
    height: 300,
    width: 300
  }
});

export default ModalGitHub;
