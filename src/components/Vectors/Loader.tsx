import * as React from "react"
import Svg, { Rect } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: animate */

const SvgComponent = ({width = 10, height = 10, fill='#1B4E63', ...props}: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      margin: "auto",
      display: "block",
      shapeRendering: "auto",
    }}
    width={props.width}
    height={props.height}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    fill={fill}
    {...props}
  >
    <Rect
      x={48.5}
      y={30}
      rx={1.2}
      ry={1.2}
      width={3}
      height={12}
    ></Rect>
    <Rect
      x={48.5}
      y={30}
      rx={1.2}
      ry={1.2}
      width={3}
      height={12}
      transform="rotate(30 50 50)"
    ></Rect>
    <Rect
      x={48.5}
      y={30}
      rx={1.2}
      ry={1.2}
      width={3}
      height={12}
      transform="rotate(60 50 50)"
    ></Rect>
    <Rect
      x={48.5}
      y={30}
      rx={1.2}
      ry={1.2}
      width={3}
      height={12}
      transform="rotate(90 50 50)"
    ></Rect>
    <Rect
      x={48.5}
      y={30}
      rx={1.2}
      ry={1.2}
      width={3}
      height={12}
      transform="rotate(120 50 50)"
    ></Rect>
    <Rect
      x={48.5}
      y={30}
      rx={1.2}
      ry={1.2}
      width={3}
      height={12}
      transform="rotate(150 50 50)"
    ></Rect>
    <Rect
      x={48.5}
      y={30}
      rx={1.2}
      ry={1.2}
      width={3}
      height={12}
      transform="rotate(180 50 50)"
    ></Rect>
    <Rect
      x={48.5}
      y={30}
      rx={1.2}
      ry={1.2}
      width={3}
      height={12}
      transform="rotate(210 50 50)"
    ></Rect>
    <Rect
      x={48.5}
      y={30}
      rx={1.2}
      ry={1.2}
      width={3}
      height={12}
      transform="rotate(240 50 50)"
    ></Rect>
    <Rect
      x={48.5}
      y={30}
      rx={1.2}
      ry={1.2}
      width={3}
      height={12}
      
      transform="rotate(270 50 50)"
    ></Rect>
    <Rect
      x={48.5}
      y={30}
      rx={1.2}
      ry={1.2}
      width={3}
      height={12}
      
      transform="rotate(300 50 50)"
    ></Rect>
    <Rect
      x={48.5}
      y={30}
      rx={1.2}
      ry={1.2}
      width={3}
      height={12}
      
      transform="rotate(330 50 50)"
    ></Rect>
  </Svg>
)

export default SvgComponent
