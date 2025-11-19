"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import owlAnimation from "@/animation/tree.json";

import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
type Inputs = {
  name: string;
  vehicle_no: string;
  kilometers: number;
};

const toBase64 = (file: any): Promise<string | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader?.result?.toString() || null);
    reader.onerror = reject;
  });

// React component for header
export default function RegisterForm({ styles }: any) {
  const [photo, setPhoto] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const toggleInfoAction = () => setShowInfo(!showInfo);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (photo && data.kilometers && data.name && data.vehicle_no) {
      const formData = {
        ...data,
        photo_path: photo,
      };
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "localhost:7050/volvo/capture",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(formData),
      };
      try {
        setLoading(true);
        const response = await axios.post("https://leads.pravis.co/volvo/capture/", formData);
        if (response.status === 200) {
          toast.success("You have successfully registerd for The Reverse Project. Thank you.");
          setTimeout(() => {
            setLoading(false);
            router.push("/project/thank-you");
          }, 2000);
        } else {
          toast.info("Your request is already with us! We will notify you when your certificate is ready. ");
          setTimeout(() => {
            setLoading(false);
            router.push("/project/thank-you");
          }, 2000);
        }
      } catch (error) {
        toast.info("Your request is already with us! We will notify you when your certificate is ready. ");
        setTimeout(() => {
          setLoading(false);
          router.push("/project/thank-you");
        }, 2000);
      }
    } else {
      setError(true);
      setTimeout(() => {
        console.log("asdf");
        setError(false);
      }, 1000);
    }
  };

  const onChangeFile = async (event: any) => {
    if (event.target.files.length > 0) {
      const base64File = await toBase64(event.target.files[0]);
      if (base64File) {
        setPhoto(base64File);
      }
    }
  };

  return (
    <>
      {loading ? (
        <div className="col-12 text-center mt-4">
          <div style={{ maxWidth: "200px", margin: "auto" }}>
            <Lottie
              animationData={owlAnimation}
              loop={true}
            />
            <p style={{ fontSize: "14px", color: "white" }}>Loading a greener future</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            {(error || errors.name || errors.vehicle_no || errors.kilometers) && (
              <div
                className="col-12 col-md-6 text-center pb-2"
                style={{ color: "red", fontSize: "14px" }}>
                <>{console.log(errors)}* Please fill the form with valid details!</>
              </div>
            )}

            <div className="col-12 col-md-6 text-center">
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Full  Name"
              />
            </div>
            <div
              className="col-12 col-md-6 text-center"
              style={{ position: "relative" }}>
              <input
                type="text"
                {...register("vehicle_no", { required: true })}
                placeholder="Electric Vehicle No."
              />
              {/* circle i button as popover */}
              <i
                className={styles.infoIcon}
                onClick={toggleInfoAction}></i>
              {showInfo && <div className={styles.infoContent}>Kindly ensure that you type in your valid EV number.</div>}
            </div>
            <div className="col-12 col-md-6 text-center">
              <input
                type="number"
                {...register("kilometers", { required: true })}
                placeholder="Kilometers Driven"
              />
            </div>
            <div className="col-12 col-md-6 text-center">
              <div className="fileInput">
                <label htmlFor="file">
                  {photo && (
                    <img
                      src={photo}
                      alt="profile"
                      style={{ width: "18px", marginRight: "10px" }}
                    />
                  )}
                  Upload Photo of Odometer
                </label>
                <input
                  type="file"
                  id="file"
                  name="photo"
                  onChange={onChangeFile}
                  accept="image/*"
                />
              </div>
              <div className="uploadFileError">Upload .jpeg and .png format only</div>
            </div>
            <div className="col-12 text-center cstmMrgn">
              <button
                type="submit"
                className="submitCTA">
                Submit
              </button>
              <p
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "10px",
                  marginTop: "10px",
                }}>
                By clicking on submit you agree to our{" "}
                <Link
                  href={"/project/terms"}
                  style={{ textDecoration: "none", color: "white" }}
                  target={"_blank"}>
                  terms and conditions
                </Link>
              </p>
              <div className="alreadyRegister mt-4">
                <Link
                  href="/vehicle"
                  style={{ textDecoration: "none", color: "white" }}>
                  Already Registered?
                </Link>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
}
