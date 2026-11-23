/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UsersGroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UsersGroupIcon(props: UsersGroupIconProps) {
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
          "M26.25 21a5.25 5.25 0 0 0-1.054 10.395 3.5 3.5 0 0 1-1.392 6.86C18.21 37.12 14 32.18 14 26.25 14 19.485 19.485 14 26.25 14c2.754 0 5.305.913 7.353 2.452a3.5 3.5 0 1 1-4.205 5.596A5.2 5.2 0 0 0 26.25 21m24.148-4.548A12.2 12.2 0 0 1 57.75 14C64.516 14 70 19.485 70 26.25c0 5.93-4.21 10.87-9.804 12.005a3.5 3.5 0 0 1-1.392-6.86 5.25 5.25 0 1 0-4.202-9.347 3.5 3.5 0 0 1-4.205-5.596zM42 28a5.25 5.25 0 1 0 0 10.5A5.25 5.25 0 0 0 42 28m-12.25 5.25C29.75 26.485 35.234 21 42 21s12.25 5.485 12.25 12.25c0 6.766-5.484 12.25-12.25 12.25s-12.25-5.484-12.25-12.25M21 49a7 7 0 0 0-7 7h1.75a3.5 3.5 0 1 1 0 7H14a7 7 0 0 1-7-7c0-7.732 6.268-14 14-14h3.5a3.5 3.5 0 1 1 0 7zm35-3.5a3.5 3.5 0 0 1 3.5-3.5H63c7.733 0 14 6.268 14 14a7 7 0 0 1-7 7h-1.75a3.5 3.5 0 1 1 0-7H70a7 7 0 0 0-7-7h-3.5a3.5 3.5 0 0 1-3.5-3.5M36.75 56a7 7 0 0 0-7 7h24.5a7 7 0 0 0-7-7zm-14 7c0-7.732 6.268-14 14-14h10.5c7.732 0 14 6.268 14 14a7 7 0 0 1-7 7h-24.5a7 7 0 0 1-7-7"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default UsersGroupIcon;
/* prettier-ignore-end */
