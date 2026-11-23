/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GraduationCapIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GraduationCapIcon(props: GraduationCapIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 63 63"}
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
          "M30.326 10.777a2.63 2.63 0 0 1 2.348 0L56.299 22.59a2.625 2.625 0 0 1 0 4.695l-6.424 3.212v14.711c0 1.08-.584 1.856-.841 2.17a6.8 6.8 0 0 1-1.204 1.114c-.884.657-2.084 1.31-3.555 1.89-2.962 1.166-7.23 2.118-12.775 2.118-5.56 0-9.832-.993-12.79-2.179-1.47-.59-2.656-1.243-3.526-1.88a7 7 0 0 1-1.175-1.055 4 4 0 0 1-.519-.75 3.06 3.06 0 0 1-.365-1.428v-14.71L10.5 29.184v15.44a2.625 2.625 0 0 1-5.25 0V24.937c0-.994.562-1.903 1.451-2.347zm-16.581 14.16L31.5 33.816l17.755-8.877L31.5 16.06zm4.63 8.185v11.146c.455.318 1.209.747 2.29 1.18 2.292.919 5.895 1.802 10.835 1.802 4.955 0 8.562-.852 10.85-1.753 1.089-.429 1.835-.851 2.275-1.165v-11.21l-11.951 5.976c-.74.37-1.609.37-2.348 0z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default GraduationCapIcon;
/* prettier-ignore-end */
