import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const File = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1Zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6ZM8 21V7h6v5h5v9H8Z" />
  </Svg>
);

export default File;
