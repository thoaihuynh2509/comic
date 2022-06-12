import { GlobalOutlined, MenuOutlined } from "@ant-design/icons";
import { Checkbox, Col, Row, Typography } from "antd";
import React from "react";
import BoxColor from "../../../components/BoxColor.tsx";

import styles from "../styles.module.scss";

export default function Shadow() {
  return (
    <Row className={styles.shadow} gutter={[8, 8]}>
      <Col span={24}>
        <Checkbox checked={true} disabled={false} onChange={() => {}}>
          <Typography.Text className={styles.title}>Shadow</Typography.Text>
        </Checkbox>
      </Col>
      <Col span={24}>
        <Row>
          <Col span={12}>
            <Row>
              <Col span={4}>
                <Typography.Text className={styles.symbol}>X</Typography.Text>
              </Col>
              <Col><Typography.Text className={styles.content}>10</Typography.Text></Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={4}>
                <Typography.Text className={styles.symbol}>Y</Typography.Text>
              </Col>
              <Col><Typography.Text className={styles.content}>10</Typography.Text></Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row>
          <Col span={12}>
            <Row>
              <Col span={4} style={{ display: "flex", alignItems: "center" }}>
                <BoxColor color="#544E74" />
              </Col>
              <Col>
                <Typography.Text className={styles.content}>544E74</Typography.Text>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={4}>
                <GlobalOutlined className={styles.symbol} />
              </Col>
              <Col>
                <Typography.Text className={styles.content}>0.5</Typography.Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
