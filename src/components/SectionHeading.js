import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import { themes } from '../constants';

// context
import Context from '../context';

function SectionHeading({ text }) {
  // get main app state
  const { theme } = React.useContext(Context);

  // set current theming
  const { text: textColor } = themes[theme];

  return <Text style={[styles.heading, { color: textColor }]}>{text}</Text>;
}

SectionHeading.propTypes = {
  // required
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: '600'
  }
});

export default React.memo(SectionHeading);
