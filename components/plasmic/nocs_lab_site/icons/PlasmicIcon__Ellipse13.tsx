/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse13Icon(props: Ellipse13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 803 825"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#a)"} opacity={".8"}>
        <ellipse
          cx={"401.409"}
          cy={"412.409"}
          fill={"currentColor"}
          fillOpacity={".44"}
          rx={"313.5"}
          ry={"324.5"}
        ></ellipse>
      </g>

      <defs>
        <filter
          id={"a"}
          width={"802.817"}
          height={"824.817"}
          x={"0"}
          y={"0"}
          colorInterpolationFilters={"sRGB"}
          filterUnits={"userSpaceOnUse"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feGaussianBlur
            result={"effect1_foregroundBlur_2029_1618"}
            stdDeviation={"43.954"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse13Icon;
/* prettier-ignore-end */
