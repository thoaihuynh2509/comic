import { MenuOutlined } from "@ant-design/icons";
import { Checkbox, Col, Row, Typography } from "antd";
import React from "react";
import BoxColor from "../../../components/Box";

import styles from "../styles.module.scss";

export default function Stroke() {
  return (
    <Row className={styles.stroke} gutter={[8, 8]}>
      <Col span={24}>
        <Checkbox checked={true} disabled={false} onChange={() => {}}>
          <Typography.Text className={styles.title}>Stroke</Typography.Text>
        </Checkbox>
      </Col>
      <Col span={24}>
        <Row>
          <Col span={12}>
            <Row>
              <Col span={4} style={{ display: "flex", alignItems: "center" }}>
                <BoxColor bgColor="#000000" />
              </Col>
              <Col>
                <Typography.Text className={styles.content}>
                  000000
                </Typography.Text>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={4}>
                <MenuOutlined className={styles.symbol} />
              </Col>
              <Col>
                <Typography.Text className={styles.content}>
                  0.5
                </Typography.Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
