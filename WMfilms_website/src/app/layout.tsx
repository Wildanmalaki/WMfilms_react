import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WMfilms - Sport, Wedding, Event Photographer",
  description:
    "Landing page WMfilms untuk booking dokumentasi sport, wedding, dan event sejak 2019.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
