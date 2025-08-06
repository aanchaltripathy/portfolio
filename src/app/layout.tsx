import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aanchal's Portfolio",
  description: "React Native Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}