import React from "react";

import ChapterFile from "../ChapterFile";
import { useChapter } from "./hooks/useChapter";

const RATIO = 0.5;

export default function Chapter() {
  const { files } = useChapter();

  if (!files) {
    return <p>Loading</p>;
  }
  return (
    <main>
      {files.map((file, index) => (
        <ChapterFile key={index} ratio={RATIO} {...file} />
      ))}
    </main>
  );
}
