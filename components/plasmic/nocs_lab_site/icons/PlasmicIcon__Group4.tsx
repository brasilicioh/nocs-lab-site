/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group4Icon(props: Group4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 30 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <defs>
        <path
          id={"a"}
          fill={"currentColor"}
          d={
            "M11.542 29.968c-2.07-.088-4.473-.27-5.986-.44-1.524-.176-2.58-.675-3.547-1.68-.504-.527-.727-.856-1.026-1.484-.293-.629-.434-1.245-.545-2.384a93.4 93.4 0 0 1-.24-15.087C.39 6.098.525 4.959.736 4.29c.275-.88.621-1.456 1.272-2.143C2.976 1.143 4.026.644 5.556.468c.967-.111 3.29-.3 4.872-.393 1.665-.1 7.423-.1 9.088 0 2.843.17 5.106.376 5.775.522 1.014.23 1.835.699 2.638 1.51.961.974 1.413 1.948 1.583 3.428.65 5.706.65 13.22 0 18.92-.13 1.134-.44 1.997-.997 2.783-.293.411-.99 1.098-1.395 1.374a6 6 0 0 1-1.747.763c-.71.17-2.826.364-5.71.535-1.39.082-6.673.123-8.12.058zm5.922-8.16c1.735-.082 3.394-.217 3.957-.329 1.014-.194 2.011-.874 2.369-1.632.181-.376.334-1.18.486-2.56.112-1.02.094-3.768-.029-4.83-.164-1.357-.305-2.056-.487-2.39-.24-.446-.815-.951-1.39-1.227-.703-.34-1.09-.405-3.792-.605-1.302-.094-5.77-.094-7.153 0-1.495.106-2.691.229-3.025.311-.845.2-1.812.88-2.158 1.52-.182.335-.317.993-.48 2.378-.153 1.233-.153 3.875 0 5.108.24 1.996.363 2.395.931 2.953.686.669 1.437.963 2.815 1.092 2.574.246 5.54.323 7.956.211"
          }
        ></path>
      </defs>

      <use xlinkHref={"#a"}></use>

      <use xlinkHref={"#a"}></use>

      <path
        fill={"currentColor"}
        d={
          "M12.773 14.998v-3.587l.223.135c1.313.787 5.582 3.429 5.582 3.452s-4.38 2.73-5.582 3.452l-.223.135z"
        }
      ></path>
    </svg>
  );
}

export default Group4Icon;
/* prettier-ignore-end */
