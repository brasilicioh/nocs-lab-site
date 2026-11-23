/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UsersGroup2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UsersGroup2Icon(props: UsersGroup2IconProps) {
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
          "M19.375 15.5a3.875 3.875 0 0 0-.778 7.672 2.583 2.583 0 1 1-1.028 5.064c-4.128-.838-7.236-4.484-7.236-8.861a9.042 9.042 0 0 1 14.47-7.232 2.583 2.583 0 0 1-3.104 4.13 3.85 3.85 0 0 0-2.324-.773m17.823-3.357a9.042 9.042 0 0 1 14.469 7.232c0 4.377-3.108 8.023-7.236 8.86a2.583 2.583 0 1 1-1.028-5.063 3.875 3.875 0 1 0-3.102-6.899 2.583 2.583 0 0 1-3.103-4.13M31 20.667a3.875 3.875 0 1 0 0 7.75 3.875 3.875 0 0 0 0-7.75m-9.042 3.875a9.042 9.042 0 1 1 18.084 0 9.042 9.042 0 0 1-18.084 0M15.5 36.167a5.167 5.167 0 0 0-5.167 5.166h1.292a2.583 2.583 0 0 1 0 5.167h-1.292a5.167 5.167 0 0 1-5.166-5.167C5.167 35.626 9.793 31 15.5 31h2.583a2.583 2.583 0 1 1 0 5.167zm25.834-2.584A2.583 2.583 0 0 1 43.917 31h2.584c5.707 0 10.333 4.626 10.333 10.333a5.167 5.167 0 0 1-5.167 5.167h-1.291a2.583 2.583 0 0 1 0-5.167h1.291a5.167 5.167 0 0 0-5.166-5.166h-2.584a2.583 2.583 0 0 1-2.583-2.584m-14.209 7.75a5.167 5.167 0 0 0-5.167 5.167h18.084a5.167 5.167 0 0 0-5.167-5.167zM16.792 46.5c0-5.707 4.626-10.333 10.333-10.333h7.75c5.707 0 10.333 4.626 10.333 10.333a5.167 5.167 0 0 1-5.166 5.167H21.958a5.167 5.167 0 0 1-5.166-5.167"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default UsersGroup2Icon;
/* prettier-ignore-end */
