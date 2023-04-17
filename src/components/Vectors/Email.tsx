import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Email = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="M14.667 4c0-.733-.6-1.333-1.334-1.333H2.667c-.734 0-1.334.6-1.334 1.333v8c0 .734.6 1.334 1.334 1.334h10.666c.734 0 1.334-.6 1.334-1.334V4Zm-1.334 0L8 7.334 2.667 4h10.666Zm0 8H2.667V5.334L8 8.667l5.333-3.333V12Z"
      fill="#1B4E63"
    />
  </Svg>
);

export default Email;
