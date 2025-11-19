import { getPldeges } from "@/service/pledge";
import styles from "./page.module.css";
import PledgeNowButton from "@/app/components/register/pledge-now-button";

export const dynamic = "force-dynamic";

const pledges = getPldeges();

// Nextjs app router page
export default function DownloadCertificate({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  console.log(searchParams, pledges);
  return (
    <>
      <div className="row m-0">
        <div
          className="col-12 text-center mt-5 pt-md-1 mt-md-1 text-white text-center"
          style={{ fontSize: "14px" }}>
          <h1 style={{ fontSize: "21px" }}>I&apos;m Joining the Green Pledge</h1>
          Committing to a Sustainable Tomorrow, Today!
        </div>
        <PledgeNowButton
          styles={styles}
          pledges={pledges}
        />
        <div className="col-12 text-center mt-5 pt-md-5 mt-md-4 text-white text-center">
          <button className={`btn btn-primary ${styles.btnPledge}`}>Pledge Now</button>
        </div>
        <div className="col-12 text-center mt-5">
          <img
            src="/images/green-patrn-car.png"
            className=""
            style={{
              width: "30%",
              maxWidth: "100px",
              position: "fixed",
              bottom: "0",
              margin: "0 auto",
              left: "0",
              right: "0",
            }}
            alt="volvo car"
          />
        </div>
        {/* <div
          className="col-12 text-center"
          style={{ height: "100vh", marginTop: "-4em" }}
        >
          <img
            src="/images/green-road.png"
            className=""
            style={{ width: "30%", maxWidth: "100px" }}
            alt="volvo car"
          />
        </div> */}
      </div>
    </>
  );
}
