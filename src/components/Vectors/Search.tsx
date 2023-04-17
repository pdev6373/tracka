import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Search = ({
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
    <Path d="M10.333 9.333h-.526l-.187-.18a4.314 4.314 0 0 0 1.047-2.82 4.333 4.333 0 1 0-4.334 4.334c1.074 0 2.06-.394 2.82-1.047l.18.187v.526l3.334 3.327.993-.993-3.327-3.334Zm-4 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3Z" />
  </Svg>
);

export default Search;
