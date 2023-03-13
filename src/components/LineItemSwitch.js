import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { colors, device, gStyle, themes } from '../constants';

// context
import Context from '../context';

function LineItemSwitch({ border, icon, onPress, selected, text }) {
  // get main app state
  const { theme } = React.useContext(Context);

  // set current theming
  const { borderColor, primary, text: textColor } = themes[theme];

  const borderBottomWidth = border ? 1 : 0;

  return (
    <TouchableOpacity
      activeOpacity={gStyle.activeOpacity}
      onPress={onPress}
      style={[
        styles.container,
        { borderBottomColor: borderColor, borderBottomWidth }
      ]}
    >
      {icon && <View style={gStyle.mR2}>{icon}</View>}

      <Text style={[styles.text, { color: textColor }]}>{text}</Text>

      <Switch
        trackColor={{ false: colors.gainsboro, true: primary }}
        thumbColor={device.android ? colors.gainsboro : null}
        onChange={onPress}
        value={selected}
      />
    </TouchableOpacity>
  );
}

LineItemSwitch.defaultProps = {
  border: true,
  icon: null,
  selected: false
};

LineItemSwitch.propTypes = {
  // required
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,

  // optional
  border: PropTypes.bool,
  icon: PropTypes.element,
  selected: PropTypes.bool
};

const styles = StyleSheet.create({
  container: {
    ...gStyle.flexRowSpace,
    ...gStyle.pV2,
    borderBottomWidth: 1
  },
  text: {
    fontSize: 16
  }
});

export default React.memo(LineItemSwitch);
