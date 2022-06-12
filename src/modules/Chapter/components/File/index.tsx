import { Image } from "antd";
import React from "react";
import { IChapterFile } from "../../../../types/chapter";
import FileObject from "../FileObject";
import styles from "./styles.module.scss";

export interface IChapterFileProps extends IChapterFile {
  ratio: number
}

const ChapterFile = (props: IChapterFileProps) => {
  const width = props.size.width * props.ratio;
  const height = props.size.height * props.ratio;

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      className={styles.container}
    >
      <Image src={props.typesetImage.url} preview={false} />
       {Object.values(props.objectsMap).map((object) => (
            <FileObject key={object.oid} ratio={props.ratio} {...object} />
          ))}
    </div>
  );
};

export default ChapterFile;
