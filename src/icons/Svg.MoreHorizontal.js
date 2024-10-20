import * as React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../constants';

function SvgMoreHorizontal({ fill = colors.white, size = 24 }) {
  return (
    <Svg height={size} viewBox="0 0 32 32" width={size}>
      <Path
        d="M18.667 16c0-.359-.072-.704-.203-1.02-.136-.328-.333-.62-.579-.865s-.539-.443-.865-.579c-.316-.131-.661-.203-1.02-.203s-.704.072-1.02.203c-.328.136-.62.333-.865.579s-.443.539-.579.865c-.131.316-.203.661-.203 1.02s.072.704.203 1.02c.136.328.333.62.579.865s.539.443.865.579c.316.131.661.203 1.02.203s.704-.072 1.02-.203c.328-.136.62-.333.865-.579s.443-.539.579-.865c.131-.316.203-.661.203-1.02zM28 16c0-.359-.072-.704-.203-1.02-.136-.328-.333-.62-.579-.865s-.539-.443-.865-.579c-.316-.131-.661-.203-1.02-.203s-.704.072-1.02.203c-.328.136-.62.333-.865.579s-.443.539-.579.865c-.131.316-.203.661-.203 1.02s.072.704.203 1.02c.136.328.333.62.579.865s.539.443.865.579c.316.131.661.203 1.02.203s.704-.072 1.02-.203c.328-.136.62-.333.865-.579s.443-.539.579-.865c.131-.316.203-.661.203-1.02zM9.333 16c0-.359-.072-.704-.203-1.02-.136-.328-.333-.62-.579-.865s-.539-.443-.865-.579c-.316-.131-.661-.203-1.02-.203s-.704.072-1.02.203c-.328.136-.62.333-.865.579s-.443.539-.579.865c-.131.316-.203.661-.203 1.02s.072.704.203 1.02c.136.328.333.62.579.865s.539.443.865.579c.316.131.661.203 1.02.203s.704-.072 1.02-.203c.328-.136.62-.333.865-.579s.443-.539.579-.865c.131-.316.203-.661.203-1.02z"
        fill={fill}
      />
    </Svg>
  );
}

SvgMoreHorizontal.propTypes = {
  // optional
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number
};

export default React.memo(SvgMoreHorizontal);
