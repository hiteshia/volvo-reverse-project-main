import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import ToastProvider from "@/app/components/common/toast";
import PasswordProtection from "@/app/components/common/PasswordProtection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Reverse Project",
  description: "Volvo the reverse project - turning kilometers into trees",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-N668R594" />
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <PasswordProtection>
          <ToastProvider>{children}</ToastProvider>
        </PasswordProtection>
      </body>
    </html>
  );
}
