/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame427321643IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame427321643Icon(props: Frame427321643IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 64 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"7"} cy={"7"} r={"7"} fill={"currentColor"}></circle>

      <circle
        cx={"32"}
        cy={"7"}
        r={"7"}
        fill={"currentColor"}
        fillOpacity={".43"}
      ></circle>

      <circle
        cx={"57"}
        cy={"7"}
        r={"7"}
        fill={"currentColor"}
        fillOpacity={".43"}
      ></circle>
    </svg>
  );
}

export default Frame427321643Icon;
/* prettier-ignore-end */
