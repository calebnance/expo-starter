import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { gStyle, themes } from '../constants';

// components
import LineItemSwitch from '../components/LineItemSwitch';
import SectionHeading from '../components/SectionHeading';

// context
import Context from '../context';

function More() {
  // get main app state
  const { theme, updateState } = React.useContext(Context);

  // set current theming
  const { background } = themes[theme];

  const toggleDarkMode = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    // set new theme preference
    await AsyncStorage.setItem('theme', JSON.stringify(newTheme));

    // update main state
    updateState('theme', newTheme);
  };

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <SectionHeading text="Options" />

      <LineItemSwitch
        onPress={toggleDarkMode}
        text="Dark mode"
        selected={theme === 'dark'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...gStyle.flex1,
    ...gStyle.p2
  }
});

export default More;
