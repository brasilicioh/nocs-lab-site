/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame427324142IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame427324142Icon(props: Frame427324142IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 38 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeWidth={"3"}
        d={"M1.5 1.5h35m-35 8h24m-24 8h35"}
      ></path>
    </svg>
  );
}

export default Frame427324142Icon;
/* prettier-ignore-end */
