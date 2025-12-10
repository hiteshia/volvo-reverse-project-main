// components/QRCodeComponent.tsx
import { QRCodeSVG } from "qrcode.react";

type QRCodeProps = {
  url: string;
};

export default function QRCodeComponent({ url }: QRCodeProps) {
  return (
    <div>
      {/* <h2>QR Code for URL</h2> */}
      <QRCodeSVG
        value={url}
        size={40}
        bgColor="#ffffff"
        fgColor="#000000"
        level="Q" // Error correction level
        includeMargin={true}
      />
      {/* <p style={{ fontSize: "12px", marginTop: "10px" }}>
        Scan this QR code to visit: {url}
      </p> */}
    </div>
  );
}
