import { Col, Row, Typography } from "antd";
import React from "react";

import styles from "../styles.module.scss";

interface ITranscriptionProps {
  content: string;
}

export default function Transcription({ content }: ITranscriptionProps) {
  return (
    <Row className={styles.transcription} gutter={[8, 8]}>
      <Col span={24}>
        <Typography.Text className={styles.title}>
          Transcription
        </Typography.Text>
      </Col>

      {content && (
        <Col span={24}>
          <Typography.Text className={styles.content}>
            {content}
          </Typography.Text>
        </Col>
      )}
    </Row>
  );
}
