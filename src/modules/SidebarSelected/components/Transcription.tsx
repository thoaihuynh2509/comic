import { Col, Row, Typography } from "antd";
import React from "react";

import styles from '../styles.module.scss'

export default function Transcription() {
  return (
    <Row className={styles.transcription} gutter={[8, 8]}>
      <Col span={24}>
        <Typography.Text className={styles.title}>
          Transcription
        </Typography.Text>
      </Col>

      <Col span={24}>
        <Typography.Text className={styles.content}>
          王子の一 スペシャルモデル なのに 。スペシャルモデル なのに 。
        </Typography.Text>
      </Col>
    </Row>
  );
}
