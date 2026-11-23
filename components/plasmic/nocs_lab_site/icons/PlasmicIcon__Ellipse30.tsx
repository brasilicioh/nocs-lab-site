/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse30Icon(props: Ellipse30IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 33"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"16.5"} cy={"16.5"} r={"16.5"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Ellipse30Icon;
/* prettier-ignore-end */
