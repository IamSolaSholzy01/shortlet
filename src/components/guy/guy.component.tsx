import Image from "next/image";
import GuyPic from "@/assets/home/guy.svg";
import React from "react";

export default function Guy() {
  return (
    <Image
      src={GuyPic}
      alt="Guy"
      width={500}
      height={500}
      layout="responsive"
    />
  );
}
