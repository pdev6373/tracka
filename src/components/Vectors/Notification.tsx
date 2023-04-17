import * as React from "react";
import Svg, { Path } from "react-native-svg";

const NotificationIcon = ({
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
    <Path d="M10 18.333c.917 0 1.667-.75 1.667-1.667H8.333c0 .917.75 1.667 1.667 1.667Zm5-5V9.166c0-2.558-1.358-4.7-3.75-5.266v-.567c0-.692-.558-1.25-1.25-1.25s-1.25.558-1.25 1.25V3.9C6.367 4.466 5 6.6 5 9.166v4.167L3.333 15v.833h13.334V15L15 13.333Zm-1.667.833H6.667v-5c0-2.066 1.258-3.75 3.333-3.75s3.333 1.684 3.333 3.75v5Z" />
  </Svg>
);

export default NotificationIcon;
