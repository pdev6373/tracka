import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ProjectIcon = ({
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
    <Path d="M10 5.833V4.167C10 3.25 9.25 2.5 8.333 2.5h-5c-.916 0-1.666.75-1.666 1.667v11.666c0 .917.75 1.667 1.666 1.667h13.334c.916 0 1.666-.75 1.666-1.667V7.5c0-.917-.75-1.667-1.666-1.667zm-1.667 10h-5v-1.666h5zm0-3.333h-5v-1.667h5zm0-3.333h-5V7.5h5zm0-3.334h-5V4.167h5zm8.334 10H10V7.5h6.667zM15 9.167h-3.333v1.666H15zm0 3.333h-3.333v1.667H15z" />
  </Svg>
);

export default ProjectIcon;
