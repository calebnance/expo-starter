import * as React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../constants';

function SvgChevronLeft({ fill, size }) {
  return (
    <Svg height={size} viewBox="0 0 32 32" width={size}>
      <Path
        d="M20.943 23.057 13.886 16l7.057-7.057a1.332 1.332 0 1 0-1.885-1.885l-8 8a1.332 1.332 0 0 0 0 1.885l8 8a1.332 1.332 0 1 0 1.885-1.885z"
        fill={fill}
      />
    </Svg>
  );
}

SvgChevronLeft.defaultProps = {
  fill: colors.black,
  size: 24
};

SvgChevronLeft.propTypes = {
  // optional
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number
};

export default React.memo(SvgChevronLeft);
