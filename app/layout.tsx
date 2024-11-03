import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Telefonchi.uz - Smartfonlar sotuvi tarmog'i",
  description: "Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
