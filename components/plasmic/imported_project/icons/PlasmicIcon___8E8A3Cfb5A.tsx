/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _8E8A3Cfb5AIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _8E8A3Cfb5AIcon(props: _8E8A3Cfb5AIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 238 46"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"currentColor"} d={"M0 0h238v45.769H0z"}></path>
    </svg>
  );
}

export default _8E8A3Cfb5AIcon;
/* prettier-ignore-end */
