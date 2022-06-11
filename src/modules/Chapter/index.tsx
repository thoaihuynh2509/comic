import React from "react";
import ChapterPage from "./components/ChapterPage";
import { useChapter } from "./hooks/useChapter";

import styles from './styles.module.scss';

export default function Chapter() {
  const { pages } = useChapter();
  return (
    <main className={styles.container}>
      {pages.map((page, index) => (
        <ChapterPage key={index} {...page} />
      ))}
    </main>
  );
}
