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
        {/* Meta Pixel Code */}
        <script>
          {`
  !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '26114217091514269');
fbq('track', 'PageView');
  `}
        </script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=26114217091514269&ev=PageView&noscript=1"
            alt="meta pixel"
          />
        </noscript>
      </head>
      <body className={inter.className}>
        {/* <PasswordProtection> */}
        <ToastProvider>{children}</ToastProvider>
        {/* </PasswordProtection> */}
      </body>
    </html>
  );
}
