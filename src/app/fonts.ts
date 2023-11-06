import { Inter, Fraunces } from "next/font/google";

export const serif = Fraunces({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-serif",
});

export const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});