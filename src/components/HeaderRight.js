import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import { gStyle } from '../constants';

function HeaderRight({ icon, onPress, text }) {
  return (
    <TouchableOpacity
      activeOpacity={gStyle.activeOpacity}
      onPress={onPress}
      style={gStyle.flexRowAlignCenter}
    >
      {text && <Text>{text}</Text>}

      {icon && <View style={gStyle.mL1}>{icon}</View>}
    </TouchableOpacity>
  );
}

HeaderRight.defaultProps = {
  icon: null,
  onPress: () => null,
  text: null
};

HeaderRight.propTypes = {
  // optional
  icon: PropTypes.element,
  onPress: PropTypes.func,
  text: PropTypes.string
};

export default HeaderRight;
