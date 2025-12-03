"use client";

import { useState, useRef } from "react";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import BarcodeComponent from "../common/barcode";
import html2canvas from "html2canvas";

interface TreePledgeButtonProps {
  styles: any;
  name?: string;
}

export default function TreePledgeButton({
  styles,
  name,
}: TreePledgeButtonProps) {
  const router = useRouter();
  const [userName, setUserName] = useState<string>(name || "");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [vforestUrl, setVforestUrl] = useState<string | null>(null);
  const pathname = usePathname();

  const [vehicleNo, setVehicleNo] = useState("");
  const [errorInput, setErrorInput] = useState("");
  const [downloading, setDownloading] = useState(false);

  // Indian vehicle number REGEX
  const vehicleRegex = /^[A-Z]{2}[0-9]{1,2}[A-Z]{1,2}[0-9]{1,4}$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setVehicleNo(value);

    if (value && !vehicleRegex.test(value)) {
      setErrorInput("Invalid vehicle number (Example: MH12AB1234)");
    } else {
      setErrorInput("");
    }
  };

  const handlePledgeClick = async () => {
    // Validate name input
    if (!vehicleNo || vehicleNo.trim() === "") {
      setError("Please enter your name to plant trees.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      // Call our Next.js API route which handles the server-side API calls
      const response = await axios.post("/api/tree-assign", {
        name: vehicleNo.trim(),
        count: pathname.includes("non") ? 2 : 3,
      });

      if (response.data && response.data.success && response.data.vforestUrl) {
        setVforestUrl(response.data.vforestUrl);
        setSuccess(true);
      } else {
        setError(
          response.data?.error || "Failed to assign trees. Please try again."
        );
      }
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.error ||
        "An error occurred while planting trees. Please try again.";
      setError(errorMessage);
      console.error("Error in handlePledgeClick:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadCertificate = async () => {
    if (!vforestUrl || !vehicleNo) return;

    setDownloading(true);

    try {
      const certificateElement = document.getElementById("certificate");

      if (!certificateElement) {
        throw new Error("Certificate element not found");
      }

      // Use html2canvas to capture the certificate
      const canvas = await html2canvas(certificateElement, {
        scale: 2, // Higher scale for better quality
        useCORS: true, // Allow cross-origin images
        allowTaint: true,
        backgroundColor: null, // Transparent background
        logging: false, // Disable logging for better performance
        onclone: (clonedDoc) => {
          // Ensure all images are loaded in the cloned document
          const clonedElement = clonedDoc.getElementById("certificate");
          if (clonedElement) {
            // Force image reloading if needed
            const images = clonedElement.getElementsByTagName("img");
            for (let i = 0; i < images.length; i++) {
              if (images[i].complete) {
                // If image is already loaded, ensure it's displayed
                images[i].style.display = "block";
              }
            }
          }
        },
      });

      // Convert canvas to image
      const imageData = canvas.toDataURL("image/png", 1.0);

      // Create download link
      const link = document.createElement("a");
      const fileName = `Sankalptaru_Certificate_${vehicleNo.replace(
        /\s+/g,
        "_"
      )}_${new Date().toISOString().split("T")[0]}.png`;

      link.href = imageData;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error capturing certificate:", error);
      alert("Failed to download certificate. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  if (success && vforestUrl) {
    return (
      <div
        className="col-12 text-center text-white text-center certificate-container"
        style={{
          backgroundColor: "transparent",
          padding: "20px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "10px", color: "#9FCE69" }}>
          ✓ Thank you for your commitment!
        </div>
        <div
          id="certificate"
          style={{
            height: "462px",
            marginBottom: "10px",
            position: "relative",
            width: "min-content",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              position: "absolute",
              top: "110px",
              textAlign: "center",
              width: "100%",
              color: "rgba(123, 181, 57, 1)",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "'Volvo Novum-Bold', sans-serif",
            }}
          >
            {vehicleNo}
          </h3>
          <img
            src={`${
              pathname.includes("non")
                ? "/images/certificates/non-ev.png"
                : "/images/certificates/ev.png"
            }`}
            alt="Trees Planted Successfully"
            style={{
              height: "100%",
              marginBottom: "10px",
              border: "1px solid white",
            }}
            crossOrigin="anonymous"
          />
          <div style={{ position: "absolute", bottom: "20px", right: "40px" }}>
            <BarcodeComponent url={vforestUrl} />
          </div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <button
            onClick={handleDownloadCertificate}
            className={`btn btn-primary ${styles.btnPledge}`}
            style={{
              marginTop: "10px",
              marginRight: "10px",
              fontWeight: "bold",
            }}
            disabled={downloading}
          >
            {downloading ? "Downloading..." : "Download Certificate"}
          </button>
          <a
            href={vforestUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary ${styles.btnPledge}`}
            style={{ marginTop: "10px", fontWeight: "bold" }}
          >
            View Your Forest
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="col-12 text-center text-white text-center flex flex-col items-center justify-center">
      {!success && !vforestUrl && (
        <div
          className="col-12 text-center mt-5 pt-md-1 mt-md-1 text-white text-center"
          style={{ fontSize: "14px", marginBottom: "30px" }}
        >
          <h1 style={{ fontSize: "21px" }}>
            I&apos;m Joining the Green Pledge
          </h1>
          Committing to a Sustainable Tomorrow, Today!
        </div>
      )}
      {error && (
        <div
          style={{ marginBottom: "10px", color: "#ff6b6b", fontSize: "14px" }}
        >
          {error}
        </div>
      )}
      <form
        className="col-12 col-md-6 text-center"
        style={{ margin: "0 auto", maxWidth: "400px", marginBottom: "20px" }}
      >
        <input
          type="text"
          value={vehicleNo}
          onChange={handleChange}
          placeholder="Enter Your Vehicle Number"
          disabled={loading || success}
          style={{ marginBottom: "0" }}
        />
        {errorInput && (
          <p style={{ color: "#ff6b6b", fontSize: "14px", marginTop: "5px" }}>
            {errorInput}
          </p>
        )}
      </form>
      <button
        className={`btn btn-primary ${styles.btnPledge}`}
        onClick={handlePledgeClick}
        disabled={loading || success || !vehicleNo.trim()}
      >
        {loading ? "Planting Trees..." : "Green Pledge"}
      </button>
    </div>
  );
}
