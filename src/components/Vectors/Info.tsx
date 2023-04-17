import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Info = ({stroke, props}: SvgProps) => (
  <Svg width={24} stroke={stroke} height={24} fill="none" {...props}>
    <Path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM12 16v-4M12 8h.01"
      strokeWidth={2}
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Info;
