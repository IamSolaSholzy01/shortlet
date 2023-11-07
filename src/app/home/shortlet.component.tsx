"use client";
import Button from "@/components/button/button";
import { Col, ConfigProvider, Flex, Row, Typography } from "antd";
import theme from "@/theme/themeConfig";
import React from "react";
import Guy from "@/components/guy/guy.component";

const { Title } = Typography;
export default function ShortletHomeComponent() {
  return (
    <ConfigProvider theme={theme}>
      <section className="bg-white py-32 px-32">
        <Title style={{ fontSize: "4rem", zIndex: 30 }}>
          Just Shortlet it!
        </Title>
        <Row gutter={16}>
          <Col span={12} className="bg-[#FEFAEC] gutter-row">
            <Guy />
          </Col>
          <Col span={12} className="bg-[#EEEAF9] gutter-row"></Col>
        </Row>
      </section>
    </ConfigProvider>
  );
}
