import { Dimensions, Platform } from 'react-native';

// is tablet device
const { isPad } = Platform;

// types of devices
const android = Platform.OS === 'android';
const iOS = Platform.OS === 'ios';
const web = Platform.OS === 'web';

const windowInfo = Dimensions.get('window');
const { height, width } = windowInfo;
const aspectRatio = height / width;

/**
 * checks if the current ios device is an iphone with a notch.
 * considers both portrait and landscape orientations.
 * reference: https://blog.calebnance.com/development/iphone-ipad-pixel-sizes-guide-complete-list.html
 * updated for iphone x, xs, xr, 11, 12, 13, 14, 15 and all pro/pro max/plus/mini variants.
 */
const NOTCH_SCREEN_SIZES = new Set([
  780, 812, 844, 852, 874, 896, 926, 932, 956, 1179
]);

let iPhoneNotch = false;
if (iOS && !isPad) {
  // check for notch screen sizes (portrait or landscape orientation)
  if (NOTCH_SCREEN_SIZES.has(height) || NOTCH_SCREEN_SIZES.has(width)) {
    iPhoneNotch = true;
  }
}

export default {
  android,
  aspectRatio,
  height,
  iOS,
  iPhoneNotch,
  isPad,
  web,
  width
};
