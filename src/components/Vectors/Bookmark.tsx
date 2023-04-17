import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Bookmark = ({ fill = "#4B5768", ...props }: SvgProps) => (
  <Svg fill={fill} width={16} height={16} {...props}>
    <Path
      d="M11.333 2H4.667c-.734 0-1.334.6-1.334 1.333V14L8 12l4.667 2V3.333c0-.733-.6-1.333-1.334-1.333Zm0 10L8 10.547 4.667 12V4c0-.367.3-.667.666-.667h5.334c.366 0 .666.3.666.667v8Z"
      fill={fill}
    />
  </Svg>
);

export default Bookmark;
