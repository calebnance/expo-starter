import * as React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../constants';

function SvgPlus({ fill = colors.black, size = 24 }) {
  return (
    <Svg height={size} viewBox="0 0 24 24" width={size}>
      <Path
        d="M5 13h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2z"
        fill={fill}
      />
    </Svg>
  );
}

SvgPlus.propTypes = {
  // optional
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number
};

export default React.memo(SvgPlus);
