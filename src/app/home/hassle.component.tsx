"use client";
import Button from "@/components/button/button";
import { ConfigProvider, Flex, Typography } from "antd";
import theme from "@/theme/themeConfig";
import React from "react";

const { Title } = Typography;

export default function HassleHomeComponent() {
  return (
    <ConfigProvider theme={theme}>
      <section className="bg-white py-32 px-32">
        <Title style={{ fontSize: "4rem", zIndex: 30 }}>
          Hassle-free holiday & short stay homes for Everyone.
        </Title>
        <Flex gap={24}>
          <Button
            type="primary"
            text="Get Started"
            width="large"
            className={["z-30"]}
          />
          <Button
            type="secondary"
            className={["flex items-center z-30"]}
            text="Secondary"
            width="large"
          />
        </Flex>
      </section>
    </ConfigProvider>
  );
}
