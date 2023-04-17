import React from "react";
import { SvgXml } from "react-native-svg";

interface ChevronProps {
  color?: string;
  size?: number | string;
  height?: number | string;
  width?: number | string;
  direction?: "up" | "down" | "left" | "right";
}
export default function ChevronSvgComponent({
  color,
  size,
  height,
  width,
  direction = "down",
}: ChevronProps) {
  const downSvgMarkup = `<svg width="${width || 20}" height="${
    height || 20
  }" viewBox="0 0 20 20" fill="none">
<path d="M13.825 7.1582L10 10.9749L6.175 7.1582L5 8.3332L10 13.3332L15 8.3332L13.825 7.1582Z" fill="${
    color || "#0E2732"
  }"/>
</svg>`;
  const rightSvgMarkup = `<svg width="${width || 32}" height="${
    height || 32
  }" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3334 8L11.4534 9.88L17.56 16L11.4534 22.12L13.3334 24L21.3334 16L13.3334 8Z" fill="${
    color || "#1B4E63"
  }"/>
</svg>
`;
  const SvgImage: any = {
    down: () => <SvgXml xml={downSvgMarkup} width={size || "20px"} />,
    right: () => <SvgXml xml={rightSvgMarkup} width={size || "20px"} />,
  };

  const LoadSVG = SvgImage[direction] || SvgImage.down;
  return <LoadSVG />;
}
