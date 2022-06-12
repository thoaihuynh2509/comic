import { Col, Row, Typography } from "antd";
import React from "react";

import styles from "../styles.module.scss";

export default function Object() {
  return (
    <Row className={styles.object} gutter={[8, 8]}>
      <Col span={24}>
        <Typography.Text className={styles.title}>Object</Typography.Text>
      </Col>

      <Col span={24}>
        <Row>
          <Col span={12}>
            <Row>
              <Col span={6}>X</Col>
              <Col span={12}>780</Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={6}>X</Col>
              <Col span={12}>780</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Row>
              <Col span={6}>X</Col>
              <Col span={12}>780</Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={6}>X</Col>
              <Col span={12}>780</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Row>
              <Col span={6}>X</Col>
              <Col span={12}>780</Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={6}>X</Col>
              <Col span={12}>780</Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
