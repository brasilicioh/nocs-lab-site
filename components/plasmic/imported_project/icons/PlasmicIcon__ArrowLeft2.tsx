/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowLeft2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowLeft2Icon(props: ArrowLeft2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"1.5"}
        d={"m18.375 24.402-7.987-7.987a2.433 2.433 0 0 1 0-3.43l7.987-7.987"}
      ></path>
    </svg>
  );
}

export default ArrowLeft2Icon;
/* prettier-ignore-end */
