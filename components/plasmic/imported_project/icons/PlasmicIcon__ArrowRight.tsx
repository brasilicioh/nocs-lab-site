/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowRightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowRightIcon(props: ArrowRightIconProps) {
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
          "M9.529 4.862c.26-.26.682-.26.942 0l2.667 2.667a.667.667 0 0 1 0 .942l-2.667 2.667a.667.667 0 0 1-.942-.943l1.528-1.528H3.333a.667.667 0 0 1 0-1.334h7.724L9.53 5.805a.667.667 0 0 1 0-.943z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default ArrowRightIcon;
/* prettier-ignore-end */
