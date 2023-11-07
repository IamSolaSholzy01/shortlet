"use client";
import Button from "@/components/button/button";
import Guy from "@/components/guy/guy.component";
import theme from "@/theme/themeConfig";
import { ConfigProvider, Flex, Typography } from "antd";
import clsx from "clsx";
import React from "react";
import { LiaSnowflake, LiaCarSolid } from "react-icons/lia";
import { BsSafe2, BsUmbrella } from "react-icons/bs";

const { Title, Paragraph } = Typography;

const utilities = [
  { text: "Air Conditioning", icon: <LiaSnowflake />, bg: "bg-[#EEEAF9]" },
  { text: "Safe & Secure", icon: <BsSafe2 />, bg: "bg-[#FFDEE1]" },
  { text: "Ocean Front", icon: <BsUmbrella />, bg: "bg-[#EEEED8]" },
  { text: "Free Parking", icon: <LiaCarSolid />, bg: "bg-[#D2FDFF]" },
];
const Util = ({
  icon,
  bg,
  text,
}: {
  icon: JSX.Element;
  bg: string;
  text: string;
}) => (
  <Flex gap={16} className="mt-6" align="center">
    <div className={clsx(bg, "rounded", "flex items-center p-2 text-xl")}>
      {icon}
    </div>
    <div>{text}</div>
  </Flex>
);

export default function BestHomesSection() {
  return (
    <ConfigProvider theme={theme}>
      <div className="relative h-max w-full">
        <div className="absolute bg-black/40 z-10 h-full w-full"></div>
        <section className="bg-home-hero py-[10rem] px-[16rem] bg-scroll bg-cover text-[#EEEED8]">
          <div className="bg-white z-30 relative p-14 rounded-lg">
            <Flex align={"center"} justify="center">
              <Flex gap={43} justify="space-between" className="h-max w-full">
                <div className="text-black shrink-0">
                  <h4 className="font-serif text-xl">The best homes.</h4>
                  {utilities.map((util) => (
                    <Util {...util} />
                  ))}
                </div>
                <div className="h-[initial] w-full relative shrink grow flex justify-end">
                  <div className="bg-[#EEEED8] max-w-[17.5rem] w-full h-full justify-end">
                    &nbsp;
                    <div className="absolute -bottom-6 left-10 xl:left-24">
                      <Guy />
                    </div>
                  </div>
                </div>
              </Flex>
            </Flex>
          </div>
        </section>
      </div>
    </ConfigProvider>
  );
}
