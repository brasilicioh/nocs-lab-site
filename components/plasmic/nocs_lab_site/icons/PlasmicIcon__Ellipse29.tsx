/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse29IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse29Icon(props: Ellipse29IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 643 643"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"321.5"}
        cy={"321.5"}
        r={"320.5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></circle>
    </svg>
  );
}

export default Ellipse29Icon;
/* prettier-ignore-end */
