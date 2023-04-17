import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const LargeBell = (props: SvgProps) => (
  <Svg width={60} height={60} fill="none" 
  viewBox="0 0 60 60"
>
   <Path d="M25.7237 9.64954L4.54871 44.9995C4.11213 45.7556 3.88113 46.6128 3.87868 47.4858C3.87624 48.3589 4.10244 49.2174 4.53478 49.9759C4.96711 50.7343 5.59052 51.3664 6.34298 51.8092C7.09543 52.2519 7.95071 52.4899 8.82371 52.4995H51.1737C52.0467 52.4899 52.902 52.2519 53.6544 51.8092C54.4069 51.3664 55.0303 50.7343 55.4626 49.9759C55.895 49.2174 56.1212 48.3589 56.1187 47.4858C56.1163 46.6128 55.8853 45.7556 55.4487 44.9995L34.2737 9.64954C33.828 8.9148 33.2005 8.30733 32.4517 7.88574C31.7029 7.46416 30.858 7.24268 29.9987 7.24268C29.1394 7.24268 28.2945 7.46416 27.5457 7.88574C26.7969 8.30733 26.1694 8.9148 25.7237 9.64954V9.64954Z" stroke="#DC2626" stroke-width="4.33" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M30 22.5V32.5" stroke="#DC2626" stroke-width="4.33" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M30 42.4998H30.0248" stroke="#DC2626" stroke-width="4.33" stroke-linecap="round" stroke-linejoin="round"/>
  </Svg>
);

export default LargeBell;
