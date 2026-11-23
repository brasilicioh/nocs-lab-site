/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LaptopCodeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LaptopCodeIcon(props: LaptopCodeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 84 84"}
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
          "M14 20.25c0-3.418 2.752-6.25 6.222-6.25h43.556C67.248 14 70 16.832 70 20.25V52.5a7 7 0 0 1 7 7V63a7 7 0 0 1-7 7H14a7 7 0 0 1-7-7v-3.5a7 7 0 0 1 7-7zm7 32.25h42V21H21zm7.965-26.914a3.5 3.5 0 0 1 4.949-.12l9.187 8.75a3.5 3.5 0 0 1 0 5.069l-9.187 8.75a3.5 3.5 0 0 1-4.828-5.07l6.526-6.215-6.526-6.215a3.5 3.5 0 0 1-.12-4.949zM42 45.5a3.5 3.5 0 0 1 3.5-3.5h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 0 1-3.5-3.5m-28 14V63h56v-3.5z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default LaptopCodeIcon;
/* prettier-ignore-end */
