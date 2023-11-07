import clsx from "clsx";
import React from "react";

export default function Button({
  text,
  type,
  className,
  width = "small",
}: {
  text: string;
  type: "primary" | "secondary";
  width?: "small" | "medium" | "large";
  className?: string[];
}) {
  return (
    <button
      className={clsx(
        "rounded-lg",
        { "bg-primary": type === "primary" },
        { "bg-transparent border border-white": type === "secondary" },
        { "px-5": width === "small" },
        { "px-16": width === "large" },
        "py-3",
        className
      )}
    >
      {text}
    </button>
  );
}
