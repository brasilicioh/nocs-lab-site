/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse11Icon(props: Ellipse11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 534 553"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <ellipse
        cx={"267"}
        cy={"276.5"}
        fill={"currentColor"}
        opacity={".8"}
        rx={"267"}
        ry={"276.5"}
      ></ellipse>
    </svg>
  );
}

export default Ellipse11Icon;
/* prettier-ignore-end */
