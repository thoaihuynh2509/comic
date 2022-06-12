import React from "react";
import { IFileObject } from "../../../../types/chapter";

interface IFileObjectProps extends IFileObject {
  ratio: number;
}

export default function FileObject(props: IFileObjectProps) {
  const width = props.transform.size.width * props.ratio
  const height = props.transform.size.height * props.ratio
  const centerX = props.transform.center.x * props.ratio
  const centerY = props.transform.center.y * props.ratio

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: "absolute",
        top: `${centerY - height / 2}px`,
        left: `${centerX - width / 2}px`,
        transform: `scale(${props.transform.scale || 1}) rotate(${props.transform.rotation})`,
        border: "1px solid #000",
      }}
    />
  );
}
