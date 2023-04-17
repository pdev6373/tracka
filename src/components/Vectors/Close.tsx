import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Close = ({
  width = 20,
  height = 20,
  fill,
  ...props
}: {
  fill?: string;
  width?: number;
  height?: number;
}) => (
  <Svg fill={fill} width={width} height={height} {...props}>
    <Path d="m12.667 4.273-.94-.94L8 7.06 4.273 3.333l-.94.94L7.06 8l-3.727 3.726.94.94L8 8.94l3.727 3.726.94-.94L8.94 8l3.727-3.727Z" />
  </Svg>
);

export default Close;
