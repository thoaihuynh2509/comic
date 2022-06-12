import { Col, Divider, Row, Typography } from "antd";
import React from "react";
import Object from "./components/Object";
import Shadow from "./components/Shadow";
import Stroke from "./components/Stroke";
import TextStyle from "./components/TextStyle";
import Transcription from "./components/Transcription";

import styles from "./styles.module.scss";

export default function SidebarSelected() {
  return (
    <main className={styles.container}>
      <Row className={styles.header}>
        <Col span={12}>
          <Typography.Text className={styles.title}>Text 2/256</Typography.Text>
        </Col>
      </Row>
      
      <Divider className={styles.line} />

      <Transcription />
      <Divider className={styles.line} />

      <Object />
      <Divider className={styles.line} />

      <TextStyle />
      <Divider className={styles.line} />

      <Stroke />
      <Divider className={styles.line} />

      <Shadow />
      <Divider className={styles.line} />
    </main>
  );
}
