"use client";

import { getCertificate, getCertificateData } from "@/service/user";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation'

// Nextjs app router page
export default function VehiclePage() {
  const [vehicle, setVehicle] = useState<string>("");
  const router = useRouter();

  const submit = async () => {
    const vehicle_id = vehicle.replaceAll(" ", "").toLowerCase();
    try {
      const certificate = await getCertificate(vehicle_id);
      if (certificate) {
        router.push(`/vehicle/download-certificate/${vehicle_id}`)
      } else {
        toast.error(
          "Your certificate is not generated. Please check back later."
        );
      }
    } catch (error) {
      console.log(error, "asdfasdfasdf");
      toast.error(
        "No record found. Please enter the correct vehicle number."
      );
    }
  };
  return (
    <>
      <div className="row m-0">
        <div className="col-12">
          <form method="" name="">
            <div className="row">
              <div className="col-12 text-center">
                <input
                  type="text"
                  name="text"
                  className="vehicleInput"
                  placeholder="Enter your electric vehicle no."
                  onChange={(e) => setVehicle(e.target.value)}
                />
              </div>
              <div className="col-12 text-center pt-5 mt-2 mt-md-4 pt-md-0">
                <a href="#" className="submitCTA" onClick={submit}>
                  Submit
                </a>
              </div>
            </div>
          </form>
        </div>
        <div className="col-12">
          <img
            src="/images/green-patrn-car.png"
            style={{ zIndex: "1" }}
            className="volvoCar"
            alt="volvo car"
          />
        </div>
      </div>
    </>
  );
}
