import * as React from "react";
import Svg, { Path } from "react-native-svg";

const AllocationIcon = ({
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
    <Path d="M15.833 2.5H4.167C3.25 2.5 2.5 3.25 2.5 4.167v11.666c0 .917.75 1.667 1.667 1.667h11.666c.917 0 1.667-.75 1.667-1.667V4.167c0-.917-.75-1.667-1.667-1.667Zm0 13.333H4.167V4.167h11.666v11.666Zm-10-7.5H7.5v5.834H5.833V8.333Zm3.334-2.5h1.666v8.334H9.167V5.833Zm3.333 5h1.667v3.334H12.5v-3.334Z" />
  </Svg>
);

export default AllocationIcon;
