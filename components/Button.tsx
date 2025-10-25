import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({ variant = "primary", className = "", ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition shadow";
  const styles =
    variant === "primary"
      ? "bg-sky-600 hover:bg-sky-700 text-white"
      : "bg-white hover:bg-gray-100 text-sky-700 border border-sky-200";
  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
