import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const Facebook = (props: SvgProps) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.968 4h-2.455c-2.26 0-4.09 1.79-4.09 4v2.4H7.967v3.2h2.454V20h3.273v-6.4h2.454l.819-3.2h-3.273V8c0-.442.366-.8.818-.8h2.455V4Z"
      fill="#fff"
    />
  </Svg>
)

export default Facebook
