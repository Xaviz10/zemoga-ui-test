import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Where in the world?",
  description: "Find all the information of any country.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
