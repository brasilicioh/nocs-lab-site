/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BgIcon(props: BgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1840 593"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={"M0 593V0h1840v593z"}
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default BgIcon;
/* prettier-ignore-end */
