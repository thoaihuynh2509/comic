import { AppstoreOutlined, RedoOutlined } from "@ant-design/icons";
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
              <Col span={4} className={styles.symbol}>
                X
              </Col>
              <Col>
                <Typography.Text className={styles.content}>
                  780
                </Typography.Text>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={4} className={styles.symbol}>
                Y
              </Col>
              <Col>
                <Typography.Text className={styles.content}>
                  780
                </Typography.Text>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Row>
              <Col span={4} className={styles.symbol}>
                W
              </Col>
              <Col>
                <Typography.Text className={styles.content}>
                  780
                </Typography.Text>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={4} className={styles.symbol}>
                H
              </Col>
              <Col>
                <Typography.Text className={styles.content}>
                  780
                </Typography.Text>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Row>
              <Col className={styles.symbol} span={4}>
                <RedoOutlined />
              </Col>
              <Col>
                <Typography.Text className={styles.content}>
                  220
                </Typography.Text>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row>
              <Col className={styles.symbol} span={4}>
                <AppstoreOutlined />
              </Col>
              <Col>
                <Typography.Text className={styles.content}>
                  780
                </Typography.Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
