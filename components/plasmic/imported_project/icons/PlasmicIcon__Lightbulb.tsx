/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LightbulbIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LightbulbIcon(props: LightbulbIconProps) {
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
          "M24.676 14.176A24.5 24.5 0 0 1 66.5 31.5c0 8.426-4.19 13.557-7.65 17.794l-.139.17C55.197 53.768 52.5 57.187 52.5 63a3.5 3.5 0 0 1-3.5 3.5H35a3.5 3.5 0 0 1-3.5-3.5c0-5.643-2.697-9.144-6.233-13.564l-.156-.195C21.675 44.95 17.5 39.732 17.5 31.5a24.5 24.5 0 0 1 7.176-17.324M42 14a17.5 17.5 0 0 0-17.5 17.5c0 5.643 2.697 9.144 6.233 13.564l.156.195c2.922 3.65 6.378 7.968 7.347 14.241h7.519c.958-6.41 4.443-10.678 7.396-14.294l.138-.17C56.803 40.732 59.5 37.313 59.5 31.5A17.5 17.5 0 0 0 42 14m0 10.5a7 7 0 0 0-7 7 3.5 3.5 0 1 1-7 0 14 14 0 0 1 14-14 3.5 3.5 0 1 1 0 7m-10.5 49A3.5 3.5 0 0 1 35 70h14a3.5 3.5 0 1 1 0 7H35a3.5 3.5 0 0 1-3.5-3.5"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default LightbulbIcon;
/* prettier-ignore-end */
