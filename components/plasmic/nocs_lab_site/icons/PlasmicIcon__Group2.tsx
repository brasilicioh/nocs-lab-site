/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group2Icon(props: Group2IconProps) {
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
        fill={"currentColor"}
        d={
          "M4.629 29.912c-1.143-.21-2.045-.68-2.912-1.512a5.6 5.6 0 0 1-1.418-2.19C-.006 25.301 0 25.594 0 15S-.006 4.7.299 3.791C.844 2.203 2.203.844 3.79.299 4.699-.006 4.406 0 15 0s10.3-.006 11.209.299c1.588.545 2.947 1.904 3.492 3.492.305.908.299.615.299 11.209s.006 10.3-.299 11.209c-.545 1.588-1.904 2.947-3.492 3.492-.908.305-.604.299-11.262.293-8.033-.006-9.96-.017-10.318-.082m2.935-5.033a3 3 0 0 0 .616-.2c.861-.439 1.37-1.47 1.207-2.437-.082-.515-.27-.873-.645-1.248-.375-.38-.814-.586-1.43-.68-1.769-.257-3.152 1.002-2.917 2.66.199 1.39 1.605 2.233 3.17 1.905zm14.004-6.293c2.186-.574 3.451-2.191 3.739-4.775.04-.352.064-2.163.064-4.758v-4.19h-4.506l-.017 4.12c-.018 3.697-.035 4.148-.123 4.464-.235.803-.592 1.278-1.155 1.547-.287.135-.392.152-.966.152-.58 0-.68-.017-.985-.158-.433-.205-.931-.68-1.183-1.13-.3-.534-.323-.891-.323-5.204v-3.79l-2.238.011-2.244.018.012 6.767.011 6.768 2.233.017 2.226.012.006-.95v-.954l.158.205c.088.111.37.416.627.68.68.685 1.424 1.072 2.432 1.248.498.087 1.717.035 2.232-.1M9.141 11.66V4.863H4.629v13.594H9.14z"
        }
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
