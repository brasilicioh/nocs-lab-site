/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowLeftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowLeftIcon(props: ArrowLeftIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M6.471 4.862c.26.26.26.682 0 .943L4.943 7.333h7.724a.667.667 0 0 1 0 1.334H4.943l1.528 1.528a.667.667 0 1 1-.942.943L2.862 8.471a.667.667 0 0 1 0-.942l2.667-2.667c.26-.26.682-.26.942 0"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default ArrowLeftIcon;
/* prettier-ignore-end */
