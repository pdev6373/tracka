import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Message = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="M2.667 2.666h10.666v8H3.447l-.78.78v-8.78Zm0-1.333c-.734 0-1.327.6-1.327 1.333l-.007 12L4 12h9.333c.734 0 1.334-.6 1.334-1.334v-8c0-.733-.6-1.333-1.334-1.333H2.667ZM4 8h8v1.333H4V8Zm0-2h8v1.333H4V6Zm0-2h8v1.333H4V4Z"
      fill="#1B4E63"
    />
  </Svg>
);

export default Message;
