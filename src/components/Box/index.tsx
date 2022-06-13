import React from "react";

interface IBoxProps {
  bgColor?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
}

export default function Box({
  bgColor,
  color,
  width = 16,
  height = 16,
  ...restProps
}: IBoxProps) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color,
        width,
        height
      }}
      {...restProps}
    />
  );
}
