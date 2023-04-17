import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Share = ({
  width = 16,
  height = 16,
  fill,
  ...props
}: {
  fill?: string;
  width?: number;
  height?: number;
}) => (
  <Svg fill={fill} width={width} height={height} {...props}>
    <Path d="M12 10.72c-.507 0-.96.2-1.307.513L5.94 8.466C5.973 8.313 6 8.16 6 8c0-.16-.027-.314-.06-.467l4.7-2.74A1.997 1.997 0 0 0 14 3.333c0-1.107-.893-2-2-2s-2 .893-2 2c0 .16.027.313.06.467l-4.7 2.74A1.997 1.997 0 0 0 2 8a1.997 1.997 0 0 0 3.36 1.46l4.747 2.773c-.034.14-.054.287-.054.433 0 1.074.874 1.947 1.947 1.947a1.949 1.949 0 0 0 1.947-1.947A1.949 1.949 0 0 0 12 10.72Zm0-8.054c.367 0 .667.3.667.667 0 .367-.3.667-.667.667a.669.669 0 0 1-.667-.667c0-.367.3-.667.667-.667Zm-8 6A.669.669 0 0 1 3.333 8c0-.367.3-.667.667-.667.367 0 .667.3.667.667 0 .366-.3.666-.667.666Zm8 4.68a.669.669 0 0 1-.667-.666c0-.367.3-.667.667-.667.367 0 .667.3.667.667 0 .366-.3.666-.667.666Z" />
  </Svg>
);

export default Share;
