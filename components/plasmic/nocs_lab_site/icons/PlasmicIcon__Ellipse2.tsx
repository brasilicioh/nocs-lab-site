/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse2Icon(props: Ellipse2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 42 42"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <foreignObject width={"50"} height={"50"} x={"-4"} y={"-4"}>
        <div
          xmlns={"http://www.w3.org/1999/xhtml"}
          clipPath={"url(#a)"}
          style={{
            backdropFilter: "blur(2px)",
            height: "100%",
            width: '100%"'
          }}
        ></div>
      </foreignObject>

      <circle
        cx={"21"}
        cy={"21"}
        r={"21"}
        fill={"currentColor"}
        data-figma-bg-blur-radius={"4"}
      ></circle>

      <defs>
        <clipPath id={"a"} transform={"translate(4 4)"}>
          <circle cx={"21"} cy={"21"} r={"21"}></circle>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Ellipse2Icon;
/* prettier-ignore-end */
