/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse12Icon(props: Ellipse12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 134 139"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <ellipse
        cx={"67"}
        cy={"69.5"}
        fill={"currentColor"}
        opacity={".8"}
        rx={"67"}
        ry={"69.5"}
      ></ellipse>
    </svg>
  );
}

export default Ellipse12Icon;
/* prettier-ignore-end */
