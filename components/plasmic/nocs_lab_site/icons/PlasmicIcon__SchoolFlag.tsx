/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SchoolFlagIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SchoolFlagIcon(props: SchoolFlagIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 62 62"}
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
          "M38.75 10.333a2.583 2.583 0 0 1 2.583-2.583h10.334a2.583 2.583 0 0 1 2.583 2.583v7.75a2.583 2.583 0 0 1-2.583 2.584h-7.75v5.793l8.45 2.376a2.58 2.58 0 0 1 1.883 2.487v20.344a2.583 2.583 0 0 1-2.583 2.583H10.333a2.583 2.583 0 0 1-2.583-2.583V31.323c0-1.157.77-2.174 1.884-2.487l8.45-2.376v-4.41l-1.151.766a2.583 2.583 0 1 1-2.866-4.299l15.5-10.333a2.58 2.58 0 0 1 2.866 0l6.317 4.211zm0 8.272L31 13.438l-7.75 5.167v30.478h15.5zm5.167 30.478h5.166V33.28l-5.166-1.453zm-25.834 0V31.827l-5.166 1.453v15.803zM43.917 15.5v-2.583h5.166V15.5zm-18.084 7.75a2.583 2.583 0 0 1 2.584-2.583h5.166a2.583 2.583 0 1 1 0 5.166h-5.166a2.583 2.583 0 0 1-2.584-2.583m0 7.75a2.583 2.583 0 0 1 2.584-2.583h5.166a2.583 2.583 0 1 1 0 5.166h-5.166A2.583 2.583 0 0 1 25.833 31"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default SchoolFlagIcon;
/* prettier-ignore-end */
