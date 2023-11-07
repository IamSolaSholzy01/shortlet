"use client";
import Button from "@/components/button/button";
import theme from "@/theme/themeConfig";
import { ConfigProvider, Flex, Typography } from "antd";
import React from "react";

const { Title, Paragraph } = Typography;

export default function HomeHeroSection() {
  return (
    <ConfigProvider theme={theme}>
      <div className="relative h-max w-full">
        <div className="absolute bg-black/40 z-10 h-full w-full"></div>
        <section className="bg-home-hero py-32 px-32 pr-[32rem] bg-scroll bg-cover text-[#EEEED8]">
          <Title style={{ fontSize: "4rem", zIndex: 30 }}>
            Hassle-free holiday homes &amp; shortstays for{" "}
            <span className="text-[#E0FFA9] font-serif">Everyone.</span>
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
      </div>
    </ConfigProvider>
  );
}
