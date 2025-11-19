"use client";

import { newPledge, getPldeges } from "@/service/pledge";
import { use, useEffect, useState } from "react";
import Lottie from "lottie-react";
import owlAnimation from "@/animation/tree.json";

// NEXT JS Create a component for Pledge Now button

export default function PledgeNowButton({ styles, pledges }: any) {
  const [pledge, setPledge] = useState<number>(pledges);
  const [showDownloadButton, setShowDownloadButton] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const onPlegeButtonClick = async () => {
    setLoading(true);
    const response = await newPledge();
    if (response) {
      setPledge(response);
      setShowDownloadButton(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const onDownloadCertificate = async () => {
    window.open("/pdf/volvo-green-pledge.pdf", "_blank");
  };

  const onLoad = async () => {
    const response = await getPldeges();
    if (response) {
      setPledge(response);
      setLoading(false);
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <>
      {loading ? (
        <div className="col-12 text-center mt-4">
          <div style={{ maxWidth: "200px", margin: "auto" }}>
            <Lottie
              animationData={owlAnimation}
              loop={true}
            />
          </div>
        </div>
      ) : (
        <>
          <div className="col-12 text-center mt-5 pt-md-2 mt-md-4 text-white text-center">
            <h2 style={{ fontSize: "64px" }}>{pledge}</h2>
            <span style={{ fontSize: "14px", color: "#9FCE69" }}>Total Pledges Taken</span>
          </div>
          <div
            className="col-12 text-center mt-5 pt-md-2 mt-md-4 text-white text-center"
            style={{ zIndex: 1 }}>
            {showDownloadButton ? (
              <a
                className={`btn btn-primary ${styles.btnPledge}`}
                onClick={onDownloadCertificate}>
                Download Certificate
              </a>
            ) : (
              <button
                className={`btn btn-primary ${styles.btnPledge}`}
                onClick={onPlegeButtonClick}>
                Pledge Now
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
}
