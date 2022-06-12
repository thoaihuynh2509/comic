import { MenuOutlined } from "@ant-design/icons";
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
            <Row gutter={8}>
              <Col>
                <Typography.Text>X</Typography.Text>
              </Col>
              <Col>10</Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row gutter={8}>
              <Col>
                <Typography.Text>Y</Typography.Text>
              </Col>
              <Col>10</Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row>
          <Col span={12}>
            <Row gutter={8}>
              <Col>
                <BoxColor color="#544E74" />
              </Col>
              <Col>
                <Typography.Text>544E74</Typography.Text>
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
