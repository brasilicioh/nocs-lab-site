/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse10Icon(props: Ellipse10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 436 451"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <ellipse
        cx={"218"}
        cy={"225.5"}
        fill={"currentColor"}
        opacity={".8"}
        rx={"218"}
        ry={"225.5"}
      ></ellipse>
    </svg>
  );
}

export default Ellipse10Icon;
/* prettier-ignore-end */
