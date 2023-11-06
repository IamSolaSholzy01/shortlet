import type { Metadata } from "next";
import { sans, serif } from "./fonts";
import "./globals.css";

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
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className={""}>{children}</body>
    </html>
  );
}
