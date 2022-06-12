import React from "react";
import ChapterFile from "./components/File";
import { useChapter } from "./hooks/useChapter";

import styles from './styles.module.scss';

const RATIO = 0.5

export default function Chapter() {
  const { files } = useChapter();
  return (
    <main className={styles.container}>
      {files.map((file, index) => (
        <ChapterFile key={index} ratio={RATIO} {...file} />
      ))}
    </main>
  );
}
