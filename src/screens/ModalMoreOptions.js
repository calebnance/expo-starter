import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { colors, device, gStyle, themes } from '../constants';

// icons
import SvgClose from '../icons/Svg.Close';

// context
import Context from '../context';

function ModalMoreOptions({ navigation }) {
  // get main app state
  const { theme } = React.useContext(Context);

  // set current theming
  const { background, text } = themes[theme];

  // animation
  const animationDuration = 400;
  const bottomDefault = -600;
  const bottom = React.useRef(new Animated.Value(bottomDefault)).current;

  // animate out, then navigate back
  const onClose = () => {
    Animated.timing(bottom, {
      duration: animationDuration,
      toValue: bottomDefault,
      useNativeDriver: false
    }).start();
    navigation.goBack();
  };

  // animate in, on modal open
  React.useEffect(() => {
    // mount
    Animated.timing(bottom, {
      duration: animationDuration,
      toValue: 0,
      useNativeDriver: false
    }).start();

    return () => {
      // unmount
    };
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onClose}
        style={styles.backdrop}
      />

      <Animated.View
        style={[styles.containerModal, { bottom, backgroundColor: background }]}
      >
        <View style={gStyle.flexRowSpace}>
          <Text style={[styles.header, { color: text }]}>
            Half Modal Example
          </Text>

          <TouchableOpacity
            activeOpacity={gStyle.activeOpacity}
            hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
            onPress={onClose}
            style={styles.containerClose}
          >
            <SvgClose fill={colors.white} />
          </TouchableOpacity>
        </View>

        <View style={gStyle.spacer2} />

        <Text style={[styles.text, { color: text }]}>
          Fade In and Slide In Example
        </Text>
      </Animated.View>
    </View>
  );
}

ModalMoreOptions.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    ...gStyle.flex1
  },
  backdrop: {
    ...gStyle.flex1,
    backgroundColor: colors.black60,
    height: '100%',
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  containerClose: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 16,
    height: 32,
    justifyContent: 'center',
    width: 32
  },
  containerModal: {
    ...gStyle.p2,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingBottom: device.iPhoneNotch ? 48 : 24,
    position: 'absolute',
    width: '100%'
  },
  header: {
    fontSize: 28,
    fontWeight: '600'
  },
  text: {
    fontSize: 14,
    fontWeight: '400'
  }
});

export default ModalMoreOptions;
