import type { Metadata } from "next";
import { sans, serif } from "./fonts";
import { clsx } from "clsx";
import "@/app/globals.css";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import { Button, ConfigProvider, Divider, Flex } from "antd";
import Logo from "@/assets/logo.component";
import Link from "next/link";
import theme from "@/theme/themeConfig";
import { Typography } from "antd";
import Footer from "@/components/footer/footer";

const { Title } = Typography;

export const metadata: Metadata = {
  title: "Shortlet",
  description: "Shortlet App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(serif.variable, sans.variable)}>
      <body className={"relative"}>
        <StyledComponentsRegistry>
          <header
            className={clsx(
              "w-full",
              "px-2",
              "sm:px-12",
              "lg:px-36",
              "py-10",
              "text-lime",
              "absolute",
              "top-0",
              "bg-transparent"
            )}
          >
            <Flex justify="space-between" align="center">
              <div>
                <Flex gap={24} align={"center"}>
                  <Link href="/about">About</Link>
                  <Link href="/faq">FAQ</Link>
                  <Link href="/contact">Contact</Link>
                </Flex>
              </div>
              <div className="text-white">
                <Logo color={"currentColor"} />
              </div>
              <div>
                <Flex gap={16} align={"center"}>
                  <Link href="/faq">Sign in</Link>
                  <Link href="/contact">
                    <button
                      className={clsx(
                        "bg-primary",
                        "px-5",
                        "py-3",
                        "rounded",
                        "text-sm"
                      )}
                    >
                      Get Started
                    </button>
                  </Link>
                </Flex>
              </div>
            </Flex>
          </header>
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
