import * as React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../constants';

function SvgClose({ fill, size }) {
  return (
    <Svg height={size} viewBox="0 0 32 32" width={size}>
      <Path
        d="M7.057 8.943 14.114 16l-7.057 7.057a1.332 1.332 0 1 0 1.885 1.885l7.057-7.057 7.057 7.057a1.332 1.332 0 1 0 1.885-1.885L17.884 16l7.057-7.057a1.332 1.332 0 1 0-1.885-1.885l-7.057 7.057-7.057-7.057a1.332 1.332 0 1 0-1.885 1.885z"
        fill={fill}
      />
    </Svg>
  );
}

SvgClose.defaultProps = {
  fill: colors.black,
  size: 24
};

SvgClose.propTypes = {
  // optional
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number
};

export default React.memo(SvgClose);
