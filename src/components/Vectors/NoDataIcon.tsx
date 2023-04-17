import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const NoDataIcon = (props: SvgProps) => (
  <Svg width={67} height={60} fill="none" {...props}>
    <Path
      d="M50.929 38.695H48.15l-.985-.95c4.22-4.924 6.401-11.642 5.206-18.782C50.718 9.186 42.558 1.413 32.745.182 19.415-1.472 8.019 8.377 7.069 21.109h7.105c.844-7.457 6.753-13.366 14.28-13.999 8.933-.773 17.199 6.788 17.199 15.757 0 8.758-7.07 15.828-15.827 15.828-.598 0-1.161-.106-1.76-.176v7.105l.036.035c6.331.457 12.205-1.653 16.601-5.452l.95.985v2.778L60.6 58.92a3.715 3.715 0 0 0 5.24 0 3.715 3.715 0 0 0 0-5.241L50.93 38.695Z"
      fill="#DC2626"
    />
    <Path
      d="m17.938 28.742-7.457 7.456-7.456-7.456a1.741 1.741 0 0 0-2.497 0 1.741 1.741 0 0 0 0 2.497l7.456 7.457-7.456 7.456a1.741 1.741 0 0 0 0 2.497 1.741 1.741 0 0 0 2.497 0l7.456-7.456 7.457 7.456a1.741 1.741 0 0 0 2.497 0 1.741 1.741 0 0 0 0-2.497l-7.457-7.456 7.457-7.457a1.741 1.741 0 0 0 0-2.497 1.806 1.806 0 0 0-2.497 0Z"
      fill="#DC2626"
    />
  </Svg>
);

export default NoDataIcon;
