import { Button, Space, Typography, Upload, UploadProps } from "antd";
import React, { FocusEvent, useState } from "react";
import { useChapterContext } from "../../providers/ChapterProvider";

import styles from "./styles.module.scss";

export default function SidebarNothing() {
  const { chapter, setChapter, setUploadedImage } = useChapterContext();

  const uploadProps: UploadProps = {
    action: '',
    beforeUpload(file:File) {
      return new Promise<any>(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setUploadedImage && setUploadedImage(reader.result);
        };
      });
    },
  };

  return (
    <Space direction="vertical" className={styles.container}>
      <Typography.Title level={5} className={styles.title}>
        Chapter Name
      </Typography.Title>
      <Typography.Paragraph
        className={styles.content}
        editable={{ onChange: setChapter }}
      >
        {chapter}
      </Typography.Paragraph>

      <Upload  {...uploadProps}>
        <Button>Upload</Button>
      </Upload>
    </Space>
  );
}
