import {
  AlignCenterOutlined,
  BorderOuterOutlined,
  ColumnHeightOutlined,
  ColumnWidthOutlined,
  DownOutlined,
  FontSizeOutlined,
  LineHeightOutlined,
  ToTopOutlined,
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
              Alex Mild World
              <DownOutlined />
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
                  Regular
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </Col>
          <Col span={12}>
            <Space className={styles.iconGroup}>
              <AlignCenterOutlined />
              <AlignCenterOutlined />
              <AlignCenterOutlined />
            </Space>
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <Row>
          <Col span={12}>
            <Row gutter={8}>
              <Col>
                <FontSizeOutlined />
              </Col>
              <Col>24</Col>
            </Row>
          </Col>
          <Col span={12}>
            <Space className={styles.iconGroup}>
              <ColumnWidthOutlined />
              <ColumnHeightOutlined />
              <BorderOuterOutlined />
            </Space>
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <Row>
          <Col span={12}>
            <Row gutter={8}>
              <Col>
                <LineHeightOutlined />
              </Col>
              <Col>24</Col>
            </Row>
          </Col>
          <Col span={12}>
            <Space className={styles.iconGroup}>
              <VerticalAlignBottomOutlined />
              <VerticalAlignMiddleOutlined />
              <VerticalAlignTopOutlined />
            </Space>
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <Row gutter={8}>
          <Col style={{ display: 'flex', alignItems: 'center' }}>
            <BoxColor color="#7B61FF" />
          </Col>
          <Col>
            <Typography.Text>7B61FF</Typography.Text>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
