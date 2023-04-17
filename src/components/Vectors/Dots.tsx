import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Dots = ({
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
    <Path d="M5 8.333c-.917 0-1.667.75-1.667 1.667 0 .916.75 1.666 1.667 1.666s1.667-.75 1.667-1.666c0-.917-.75-1.667-1.667-1.667Zm10 0c-.917 0-1.667.75-1.667 1.667 0 .916.75 1.666 1.667 1.666s1.667-.75 1.667-1.666c0-.917-.75-1.667-1.667-1.667Zm-5 0c-.917 0-1.667.75-1.667 1.667 0 .916.75 1.666 1.667 1.666s1.667-.75 1.667-1.666c0-.917-.75-1.667-1.667-1.667Z" />
  </Svg>
);

export default Dots;
