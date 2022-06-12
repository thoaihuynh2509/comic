import {
  AlignCenterOutlined,
  BorderOuterOutlined,
  ColumnHeightOutlined,
  ColumnWidthOutlined,
  DownOutlined,
  FontSizeOutlined,
  LineHeightOutlined,
  VerticalAlignBottomOutlined,
  VerticalAlignMiddleOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";
import { Col, Dropdown, Menu, Row, Space, Typography } from "antd";
import React from "react";
import BoxColor from "../../../components/BoxColor.tsx";

import styles from "../styles.module.scss";

export default function TextStyle() {
  const fontFamilyMenu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              1st menu item
            </a>
          ),
        },
      ]}
    />
  );

  return (
    <Row className={styles.textStyle} gutter={[8, 8]}>
      <Col span={24}>
        <Typography.Text className={styles.title}>Text Style</Typography.Text>
      </Col>

      <Col span={24}>
        <Dropdown overlay={fontFamilyMenu}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Typography.Text className={styles.content}>
                Alex Mild World
              </Typography.Text>
              <DownOutlined className={styles.symbol} />
            </Space>
          </a>
        </Dropdown>
      </Col>

      <Col span={24}>
        <Row>
          <Col span={12}>
            <Dropdown overlay={fontFamilyMenu}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Typography.Text className={styles.content}>
                    Regular
                  </Typography.Text>
                  <DownOutlined className={styles.symbol} />
                </Space>
              </a>
            </Dropdown>
          </Col>
          <Col span={12}>
            <Row gutter={8}>
              <Col>
                <AlignCenterOutlined />
              </Col>
              <Col>
                <AlignCenterOutlined />
              </Col>
              <Col>
                <AlignCenterOutlined />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <Row>
          <Col span={12}>
            <Row>
              <Col span={4}>
                <FontSizeOutlined className={styles.symbol} />
              </Col>
              <Col>
                {" "}
                <Typography.Text className={styles.content}>24</Typography.Text>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row gutter={8}>
              <Col>
                <ColumnWidthOutlined />
              </Col>
              <Col>
                <ColumnHeightOutlined />
              </Col>
              <Col>
                <BorderOuterOutlined />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <Row>
          <Col span={12}>
            <Row>
              <Col span={4}>
                <LineHeightOutlined className={styles.symbol} />
              </Col>
              <Col>
                <Typography.Text className={styles.content}>24</Typography.Text>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row gutter={8}>
              <Col>
                <VerticalAlignBottomOutlined />
              </Col>
              <Col>
                <VerticalAlignMiddleOutlined />
              </Col>
              <Col>
                <VerticalAlignTopOutlined />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <Row>
          <Col span={2} style={{ display: "flex", alignItems: "center" }}>
            <BoxColor color="#7B61FF" />
          </Col>
          <Col>
            <Typography.Text>
              <Typography.Text className={styles.content}>
                7B61FF
              </Typography.Text>
            </Typography.Text>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
