import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jan Schupke - Software Engineer",
  description: "Software Engineer portfolio",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

