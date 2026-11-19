/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse28IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse28Icon(props: Ellipse28IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 713 713"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"356.5"}
        cy={"356.5"}
        r={"355.5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></circle>
    </svg>
  );
}

export default Ellipse28Icon;
/* prettier-ignore-end */
