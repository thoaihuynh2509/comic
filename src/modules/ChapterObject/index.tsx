import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import { IFileObject } from "../../types/chapter";
import { useSelectedObjectContext } from "../../providers/SelectedObjectProvider";
import { IStylingObject } from "../../types/object";

interface IChapterObject extends IFileObject {
  ratio?: number;
}

export default function ChapterObject({
  ratio = 0.5,
  translation,
  ...props
}: IChapterObject) {
  const canvasContainer = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<any>(null);
  const fabricRef = useRef<fabric.Canvas>();
  const {
    setFabricObject,
    setStylingObject,
  } = useSelectedObjectContext();

  const width = props.transform.size.width * ratio;
  const height = props.transform.size.height * ratio;
  const centerX = props.transform.center.x * ratio;
  const centerY = props.transform.center.y * ratio;

  const initCanvas = ({ canvas }: { canvas: fabric.Canvas }) => {
    if (!canvasContainer.current || !canvasRef.current) return;

    const stylingObject = translation?.value.children[0].children[0];
    if (!stylingObject) return;

    const textBox = new fabric.Textbox(props.oid, {
      width: canvas.getWidth(),
      height: canvas.getHeight(),
      left: 0,
      top: 0,
      borderColor: "#1890FF",
      visible: props.visible,
      text: stylingObject.children || "",
      fill: stylingObject.style.color,
      fontFamily: stylingObject.style.font.family,
      fontSize: stylingObject.style.font.size * ratio,
      fontWeight: stylingObject.style.font.weight,
    });

    canvas.add(textBox);
    canvas.centerObject(textBox);
  };

  useEffect(() => {
    if (!canvasRef.current) return;
    if (fabricRef.current) return;

    fabricRef.current = new fabric.Canvas(props.oid, {
      width: canvasContainer.current?.clientWidth || 0,
      height: canvasContainer.current?.clientHeight || 0,
    });

    fabricRef.current.on("mouse:down", function (options: any) {
      if (fabricRef.current && options.target) {
        const stylingObject: IStylingObject = {
          content: options.target.text || "",
          textStyle: {
            fontFamily: options.target.fontFamily,
            fontSize: options.target.fontSize * ratio,
            fontWeight: options.target.fontWeight,
            color: options.target.color,
          },
        };

        setFabricObject && setFabricObject(fabricRef.current)
        setStylingObject && setStylingObject(stylingObject);
        fabricRef.current.renderAll();
      }
    });

    initCanvas({ canvas: fabricRef.current });
  });


  return (
    <div
      ref={canvasContainer}
      style={{
        width,
        height,
        position: "absolute",
        top: `${centerY - height / 2}px`,
        left: `${centerX - width / 2}px`,
      }}
    >
      <canvas
        id={props.oid}
        ref={canvasRef}
        style={{ border: "1px solid #1890FF" }}
      />
    </div>
  );
}
