"use client";

import Logo from "@/assets/logo.component";
import theme from "@/theme/themeConfig";
import { Button, ConfigProvider, Divider, Flex } from "antd";
import { Typography } from "antd";
import clsx from "clsx";
import Link from "next/link";

const { Title, Paragraph } = Typography;
export default function Footer() {
  return (
    <ConfigProvider theme={theme}>
      <footer className="py-20 px-36 bg-[#110E2F] text-[#E1E0F6]">
        <div className="pb-32 text-center">
          <Title className="text-center">Reserve a home now</Title>
          <Paragraph className="text-center">
            Contrast offers an intuitive and user-friendly interface. The
            webinar room is highly customizable.
          </Paragraph>
          <button
            className={clsx(
              "bg-primary",
              "px-16",
              "py-4",
              "rounded-lg",
              "font-bold",
              "mt-10"
            )}
          >
            Get Started
          </button>
        </div>
        <Divider className="bg-[#322B8C]" />
        <div>
          <Flex justify="space-between">
            <div>
              <Logo color={"currentColor"} />
              &copy;SHORTLET2023
            </div>
            <Flex gap={24}>
              <Link href="/about">About</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact</Link>
            </Flex>
          </Flex>
        </div>
      </footer>
    </ConfigProvider>
  );
}
