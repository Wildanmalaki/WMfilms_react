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
    <html lang="id" className="dark-theme">
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
try {
  var theme = localStorage.getItem('wmfilms-theme');
  if (!theme) {
    theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  document.documentElement.classList.toggle('light-theme', theme === 'light');
  document.documentElement.classList.toggle('dark-theme', theme !== 'light');
} catch (_) {}
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
