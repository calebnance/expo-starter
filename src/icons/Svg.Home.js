import * as React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../constants';

const SvgHome = ({ fill, size }) => (
  <Svg height={size} viewBox="0 0 32 32" width={size}>
    <Path
      d="M3.181 10.948c-.315.245-.515.625-.515 1.052v14.667c0 .54.108 1.057.304 1.531.203.491.5.931.868 1.299s.808.665 1.299.868c.472.195.989.303 1.529.303h18.667c.54 0 1.057-.108 1.531-.304.491-.203.931-.5 1.299-.868s.665-.808.868-1.299c.195-.472.303-.989.303-1.529V12.001c-.001-.4-.179-.791-.515-1.052l-12-9.333c-.477-.367-1.148-.38-1.637 0zM21.333 28V16c0-.736-.597-1.333-1.333-1.333h-8c-.736 0-1.333.597-1.333 1.333v12h-4c-.183 0-.355-.036-.509-.1-.163-.067-.309-.167-.433-.291s-.223-.271-.291-.433c-.064-.155-.1-.327-.1-.509V12.652l10.667-8.296 10.667 8.296v14.015c0 .183-.036.355-.1.509-.067.163-.167.309-.291.433s-.271.223-.433.291c-.155.064-.327.1-.509.1zm-8 0V17.333h5.333V28z"
      fill={fill}
    />
  </Svg>
);

SvgHome.defaultProps = {
  fill: colors.black,
  size: 24
};

SvgHome.propTypes = {
  // optional
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number
};

export default React.memo(SvgHome);
