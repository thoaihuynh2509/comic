import React, { LegacyRef, useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import { IChapterFile, IFileObject } from "../../types/chapter";
import styles from "./styles.module.scss";
import ChapterObject from "../ChapterObject";
import { useSelectedObjectContext } from "../../providers/SelectedObjectProvider";
import { useChapterContext } from "../../providers/ChapterProvider";

interface IChapterFileProps extends IChapterFile {
  ratio?: number;
}

export default function ChapterFile({
  ratio = 0.5,
  ...props
}: IChapterFileProps) {
  const canvasContainer = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<any>(null);
  const fabricRef = useRef<fabric.Canvas>();
  const { uploadedImage } = useChapterContext()
  const { fabricObject, setStylingObject } = useSelectedObjectContext()

  const width = props.size.width * ratio;
  const height = props.size.height * ratio;

  // const initCanvas = ({ canvas }: { canvas: fabric.Canvas }) => {
  //   if (!canvasContainer.current || !canvasRef.current) return;

  //     // add image
  //     fabric.Image.fromURL(uploadedImage as string, function(oImg: fabric.Image) {
  //       oImg.scale(0.5);
  //       canvas.add(oImg);
  //     });

  // };

  useEffect(() => {
    if (!canvasRef.current) return;
    if (fabricRef.current) return;

    fabricRef.current = new fabric.Canvas(props.oid, {
      width: canvasContainer.current?.clientWidth || 0,
      height: canvasContainer.current?.clientHeight || 0,
    });

    fabricRef.current.on("mouse:down", () => {
      fabricObject?.discardActiveObject()
      fabricObject?.renderAll()
      setStylingObject && setStylingObject(null)
    })

    // initCanvas({ canvas: fabricRef.current })
  });

  return (
    <div
      ref={canvasContainer}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url(${props.typesetImage.url})`,
        backgroundSize: "cover",
      }}
      className={styles.container}
    >
      <canvas id={props.oid} ref={canvasRef} />

      {Object.values(props.objectsMap).map((object) => (
        <ChapterObject
          key={object.oid}
          ratio={ratio}
          {...object}
        />
      ))}
    </div>
  );
}
