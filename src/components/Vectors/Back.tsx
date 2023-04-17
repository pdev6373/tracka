import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Back = ({
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
    <Path d="M15.833 9.167H6.525L10.592 5.1a.84.84 0 0 0 0-1.183.83.83 0 0 0-1.175 0L3.925 9.408a.83.83 0 0 0 0 1.175l5.492 5.492a.83.83 0 1 0 1.175-1.175l-4.067-4.067h9.308a.836.836 0 0 0 .834-.833.836.836 0 0 0-.834-.833Z" />
  </Svg>
);

export default Back;
