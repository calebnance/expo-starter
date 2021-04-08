import * as React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../constants';

const SvgMenu = ({ fill, size }) => (
  <Svg height={size} viewBox="0 0 32 32" width={size}>
    <Path
      d="M4 17.333h24c.736 0 1.333-.597 1.333-1.333s-.597-1.333-1.333-1.333H4c-.736 0-1.333.597-1.333 1.333S3.264 17.333 4 17.333zm0-8h24c.736 0 1.333-.597 1.333-1.333S28.736 6.667 28 6.667H4c-.736 0-1.333.597-1.333 1.333S3.264 9.333 4 9.333zm0 16h24c.736 0 1.333-.597 1.333-1.333s-.597-1.333-1.333-1.333H4c-.736 0-1.333.597-1.333 1.333S3.264 25.333 4 25.333z"
      fill={fill}
    />
  </Svg>
);

SvgMenu.defaultProps = {
  fill: colors.black,
  size: 24
};

SvgMenu.propTypes = {
  // optional
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number
};

export default React.memo(SvgMenu);
