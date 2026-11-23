/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group6Icon(props: Group6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 28"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M8.977 27.6c-2.022-.298-3.621-1.083-5.016-2.478q-2.364-2.364-2.496-5.66c-.047-1.195.188-2.244.873-3.838 1.084-2.537 3.54-6.37 6.358-9.914.609-.773.826-.926 1.306-.926s.697.153 1.307.926c2.824 3.55 5.273 7.377 6.363 9.92.68 1.605.914 2.637.867 3.832q-.132 3.296-2.496 5.66c-1.236 1.23-2.63 1.992-4.341 2.367-.428.094-2.32.17-2.725.112zm1.84-5.267c.644-.152 1.101-.416 1.623-.938.72-.714 1.037-1.464 1.037-2.46-.012-2.075-1.916-3.745-3.914-3.428-1.787.287-3.024 1.682-3.035 3.428-.006.984.316 1.752 1.037 2.46.72.71 1.43 1.014 2.408 1.02.258 0 .639-.035.844-.082"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M2.854 8.546C2.057 8.142 1.6 7.819 1.067 7.28-.082 6.12-.316 4.72.428 3.448c.229-.386.961-1.13 1.447-1.465C3.182 1.087 5.14.425 7.425.114c1.13-.152 4.03-.152 5.155 0 2.385.328 4.196.938 5.55 1.87.491.34 1.206 1.072 1.44 1.47.92 1.57.329 3.34-1.535 4.582-.539.358-1.365.791-1.505.791-.036 0-.194-.193-.346-.422-.697-1.049-2.438-3.375-3.381-4.523-.78-.955-1.664-1.4-2.771-1.406-.85 0-1.5.216-2.186.744-.48.363-2.25 2.613-3.668 4.67-.346.498-.662.914-.703.925-.035.006-.316-.11-.621-.27z"
        }
      ></path>
    </svg>
  );
}

export default Group6Icon;
/* prettier-ignore-end */
