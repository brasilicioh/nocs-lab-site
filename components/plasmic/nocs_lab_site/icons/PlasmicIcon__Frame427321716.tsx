/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame427321716IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame427321716Icon(props: Frame427321716IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 102 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"13"} cy={"13"} r={"13"} fill={"currentColor"}></circle>

      <circle cx={"51"} cy={"13"} r={"12.5"} stroke={"currentColor"}></circle>

      <circle cx={"89"} cy={"13"} r={"12.5"} stroke={"currentColor"}></circle>
    </svg>
  );
}

export default Frame427321716Icon;
/* prettier-ignore-end */
