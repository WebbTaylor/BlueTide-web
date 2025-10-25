import "./../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BlueTide Heating & Cooling",
  description: "Comfort you can count on — all year long",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
