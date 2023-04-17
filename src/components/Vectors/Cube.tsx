import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Cube = ({ width = 24, height = 24, ...props }: SvgProps) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 8h4V4H4v4Zm6 12h4v-4h-4v4Zm-6 0h4v-4H4v4Zm0-6h4v-4H4v4Zm6 0h4v-4h-4v4Zm6-10v4h4V4h-4Zm-6 4h4V4h-4v4Zm6 6h4v-4h-4v4Zm0 6h4v-4h-4v4Z"
    />
  </Svg>
);

export default Cube;
