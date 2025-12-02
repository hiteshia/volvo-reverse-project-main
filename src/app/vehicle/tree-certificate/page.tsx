"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

export const dynamic = "force-dynamic";

function TreeCertificateContent() {
  const searchParams = useSearchParams();
  const [name, setName] = useState<string>("");
  const [vforestUrl, setVforestUrl] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const nameParam = searchParams.get("name");
    const urlParam = searchParams.get("url");
    if (nameParam) setName(nameParam);
    if (urlParam) setVforestUrl(urlParam);
  }, [searchParams]);

  const downloadPDF = async () => {
    if (!name || !vforestUrl) {
      alert("Certificate data is missing. Please try again.");
      return;
    }

    try {
      const { default: jsPDF } = await import("jspdf");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      // Set background color (light green)
      pdf.setFillColor(242, 255, 228);
      pdf.rect(0, 0, 297, 210, "F");

      // Add title
      pdf.setFontSize(24);
      pdf.setTextColor(0, 0, 0);
      pdf.setFont("helvetica", "bold");
      pdf.text("Green Pledge Certificate", 148.5, 40, { align: "center" });

      // Add decorative line
      pdf.setDrawColor(159, 206, 105);
      pdf.setLineWidth(2);
      pdf.line(50, 50, 247, 50);

      // Add name
      pdf.setFontSize(18);
      pdf.setTextColor(0, 0, 0);
      pdf.setFont("helvetica", "normal");
      pdf.text(`This certificate is awarded to`, 148.5, 70, { align: "center" });

      pdf.setFontSize(22);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(0, 100, 0);
      pdf.text(name, 148.5, 85, { align: "center" });

      // Add tree planting info
      pdf.setFontSize(14);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(0, 0, 0);
      pdf.text("for planting 2 trees and contributing to a sustainable future.", 148.5, 100, { align: "center" });

      // Add forest URL
      pdf.setFontSize(12);
      pdf.setTextColor(0, 100, 200);
      pdf.text("View your forest:", 148.5, 120, { align: "center" });
      pdf.setFontSize(10);
      pdf.text(vforestUrl, 148.5, 130, { align: "center" });

      // Add footer
      pdf.setFontSize(10);
      pdf.setTextColor(100, 100, 100);
      pdf.text("Volvo Reverse Project - Committing to a Sustainable Tomorrow, Today!", 148.5, 190, { align: "center" });

      // Save the PDF
      pdf.save(`Green-Pledge-Certificate-${name.replace(/\s+/g, "-")}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    }
  };

  if (!mounted) {
    return (
      <div className="row m-0">
        <div className="col-12 text-center mt-5 text-white">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <div className="row m-0">
        <div className="col-12 text-center mt-5 pt-md-1 mt-md-1 text-white text-center">
          <h1 style={{ fontSize: "21px" }}>Your Green Pledge Certificate</h1>
        </div>

        {/* Certificate Preview */}
        <div
          className="col-12 col-md-8 mx-auto mt-4 mb-4"
          style={{
            backgroundColor: "#F2FFE4",
            border: "3px solid #9FCE69",
            borderRadius: "10px",
            padding: "40px",
            minHeight: "400px",
            position: "relative",
          }}>
          <div style={{ textAlign: "center" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#000",
                marginBottom: "20px",
              }}>
              Green Pledge Certificate
            </h2>

            <div
              style={{
                width: "80%",
                height: "2px",
                backgroundColor: "#9FCE69",
                margin: "20px auto",
              }}></div>

            <p style={{ fontSize: "16px", color: "#000", marginTop: "30px" }}>This certificate is awarded to</p>

            <h3
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#006400",
                marginTop: "15px",
                marginBottom: "20px",
              }}>
              {name}
            </h3>

            <p style={{ fontSize: "14px", color: "#000", marginTop: "20px" }}>
              for planting <strong>2 trees</strong> and contributing to a sustainable future.
            </p>

            <div style={{ marginTop: "40px", padding: "20px", backgroundColor: "#fff", borderRadius: "8px" }}>
              <p style={{ fontSize: "12px", color: "#666", marginBottom: "10px" }}>View your forest:</p>
              <a
                href={vforestUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "14px",
                  color: "#0066cc",
                  wordBreak: "break-all",
                  textDecoration: "underline",
                }}>
                {vforestUrl}
              </a>
            </div>

            <p
              style={{
                fontSize: "10px",
                color: "#666",
                marginTop: "30px",
                fontStyle: "italic",
              }}>
              Volvo Reverse Project - Committing to a Sustainable Tomorrow, Today!
            </p>
          </div>
        </div>

        {/* Download Button */}
        <div className="col-12 text-center mt-4 mb-5">
          <button
            onClick={downloadPDF}
            className="btn btn-primary"
            style={{
              width: "250px",
              backgroundColor: "#fff",
              color: "#000",
              fontSize: "14px",
              height: "40px",
              textTransform: "uppercase",
              lineHeight: "26px",
            }}>
            Download Certificate (PDF)
          </button>
        </div>
      </div>
    </>
  );
}

export default function TreeCertificatePage() {
  return (
    <Suspense
      fallback={
        <div className="row m-0">
          <div className="col-12 text-center mt-5 text-white">Loading...</div>
        </div>
      }>
      <TreeCertificateContent />
    </Suspense>
  );
}
