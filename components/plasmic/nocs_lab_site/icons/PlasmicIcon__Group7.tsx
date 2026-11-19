/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group7Icon(props: Group7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M1.963 21c-.176-.047-.346-.111-.381-.146-.064-.065 12.662-12.833 12.932-12.979.205-.105.709-.105.914 0 .27.146 12.996 12.914 12.931 12.979-.035.035-.216.1-.41.146-.31.082-1.746.094-13.008.088-10.962 0-12.697-.012-12.978-.088M.105 19.266c-.1-.293-.105-.721-.105-8.72C0 2.55.006 2.122.105 1.835c.06-.17.13-.31.147-.31.023 0 2.074 2.033 4.553 4.511l4.511 4.512-4.511 4.512C2.326 17.543.275 19.57.252 19.57c-.018 0-.088-.14-.147-.304m25.032-4.207-4.512-4.512 4.512-4.512c2.478-2.478 4.529-4.512 4.552-4.512.018 0 .088.141.147.311.1.287.105.715.105 8.713s-.005 8.426-.105 8.719c-.059.164-.129.304-.146.304-.024 0-2.075-2.027-4.553-4.511"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M6.006 4.775c-2.9-2.9-4.46-4.5-4.424-4.535s.217-.1.41-.146C2.302.012 3.744 0 14.971 0s12.668.012 12.978.094c.194.047.375.111.41.146s-1.523 1.635-4.435 4.547L19.43 9.281l-1.395-1.377c-1.277-1.265-1.435-1.4-1.857-1.611l-.469-.229h-1.477l-.468.229c-.422.21-.586.352-1.846 1.6-.756.75-1.389 1.365-1.406 1.365a646 646 0 0 1-4.506-4.483"
        }
      ></path>
    </svg>
  );
}

export default Group7Icon;
/* prettier-ignore-end */
