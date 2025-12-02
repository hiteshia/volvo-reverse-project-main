"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface TreePledgeButtonProps {
  styles: any;
  name?: string;
}

export default function TreePledgeButton({ styles, name }: TreePledgeButtonProps) {
  const router = useRouter();
  const [userName, setUserName] = useState<string>(name || "");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [vforestUrl, setVforestUrl] = useState<string | null>(null);

  const handlePledgeClick = async () => {
    // Validate name input
    if (!userName || userName.trim() === "") {
      setError("Please enter your name to plant trees.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      // Call our Next.js API route which handles the server-side API calls
      const response = await axios.post("/api/tree-assign", {
        name: userName.trim(),
        count: 2,
      });

      if (response.data && response.data.success && response.data.vforestUrl) {
        setVforestUrl(response.data.vforestUrl);
        setSuccess(true);
      } else {
        setError(response.data?.error || "Failed to assign trees. Please try again.");
      }
    } catch (err: any) {
      const errorMessage = err.response?.data?.error || "An error occurred while planting trees. Please try again.";
      setError(errorMessage);
      console.error("Error in handlePledgeClick:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadCertificate = () => {
    if (vforestUrl && userName) {
      const params = new URLSearchParams({
        name: userName,
        url: vforestUrl,
      });
      router.push(`/vehicle/tree-certificate?${params.toString()}`);
    }
  };

  if (success && vforestUrl) {
    return (
      <div className="col-12 text-center mt-5 pt-md-5 mt-md-4 text-white text-center">
        <div style={{ marginBottom: "10px", color: "#9FCE69" }}>✓ Trees planted successfully!</div>
        <button
          onClick={handleDownloadCertificate}
          className={`btn btn-primary ${styles.btnPledge}`}
          style={{ marginTop: "10px", marginRight: "10px" }}>
          Download Certificate
        </button>
        <a
          href={vforestUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-primary ${styles.btnPledge}`}
          style={{ marginTop: "10px" }}>
          View Your Forest
        </a>
      </div>
    );
  }

  return (
    <div className="col-12 text-center text-white text-center flex flex-col items-center justify-center">
      {error && <div style={{ marginBottom: "10px", color: "#ff6b6b", fontSize: "14px" }}>{error}</div>}
      <div
        className="col-12 col-md-6 text-center mb-3"
        style={{ margin: "0 auto", maxWidth: "400px" }}>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter Your Name"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "14px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            color: "#000",
          }}
          disabled={loading || success}
        />
      </div>
      <button
        className={`btn btn-primary ${styles.btnPledge}`}
        onClick={handlePledgeClick}
        disabled={loading || success || !userName.trim()}>
        {loading ? "Planting Trees..." : "Pledge Now"}
      </button>
    </div>
  );
}
