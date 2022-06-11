import React from "react";
import { IChapterPage } from "../../../../types/chapter";

import styles from "./styles.module.scss";

export interface IChapterPageProps extends IChapterPage {}

const ChapterPage = (props: IChapterPageProps) => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${props.translateImage?.url})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* {props.translateImage?.url} */}
    </div>
  );
};

export default ChapterPage;
