import { MenuOutlined } from "@ant-design/icons";
import { Checkbox, Col, Row, Typography } from "antd";
import React from "react";
import BoxColor from "../../../components/BoxColor.tsx";

import styles from '../styles.module.scss';

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
            <Row gutter={8}>
              <Col>
                <BoxColor color="#000000" />
              </Col>
              <Col>
                <Typography.Text>000000</Typography.Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row gutter={8}>
              <Col>
                <MenuOutlined />
              </Col>
              <Col>
                <Typography.Text>0.5</Typography.Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
