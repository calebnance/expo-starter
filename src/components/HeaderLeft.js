import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import { gStyle } from '../constants';

function HeaderLeft({ icon, onPress, text }) {
  return (
    <TouchableOpacity
      activeOpacity={gStyle.activeOpacity}
      onPress={onPress}
      style={gStyle.flexRowAlignCenter}
    >
      {icon && <View style={gStyle.mR1}>{icon}</View>}

      {text && <Text>{text}</Text>}
    </TouchableOpacity>
  );
}

HeaderLeft.defaultProps = {
  icon: null,
  onPress: () => null,
  text: null
};

HeaderLeft.propTypes = {
  // optional
  icon: PropTypes.element,
  onPress: PropTypes.func,
  text: PropTypes.string
};

export default HeaderLeft;
