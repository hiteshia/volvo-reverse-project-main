import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/app/components/common/header";

export default function Home() {
  return (
    <main className="grayPattern">
      <div className="container-fluid p-0">
        <div className="cstmContainerTopHeader">
          <Header />
        </div>
        <div className="cstmContainer cstmMarginTop">
          <div className="pt-3"></div>
          {/* <a className="navbar-brand" href="#">
            <img src="/images/volvo-logo.png" className="volvoLogoLanding" />
          </a> */}
          <div className="row m-0">
            <div className="col-12 text-center">
              <a href="#">
                <img
                  src="/images/reverse-project-logo.png"
                  className="theReverseProject"
                  alt="The Reverse Logo"
                />
              </a>
            </div>
            <div className="col-12 pt-4 text-center text-white text-center">
              <p>
                The Reverse Project has grown to 35,000 thriving trees that are
                slowly bringing life back to degraded land. Our next milestone
                is a combined total of 55,000 trees, expanding green cover and
                strengthening local ecosystems.
                <br></br>
                <br></br>
                As part of this effort, Volvo plants 3 trees for EV users and 2
                trees for non-users. Support tree plantation & help push this
                restoration further.
              </p>
            </div>
            {/* <div className="col-12 text-center mt-3">
              <img
                src="/images/green-patrn-car.png"
                className=""
                style={{ width: "20%", maxWidth: "100px" }}
                alt="volvo car"
              />
            </div> */}
            <div className="col-12 text-center" style={{ zIndex: "1" }}>
              {/* <video
                src="/video/volvo_reverse_latest_720p.mp4"
                style={{ width: "96%", marginTop: "-2em", backgroundColor: "#000" }}
                autoPlay={false}
                controls={true}
                poster="/images/volvo-diya-mirza.png"
                preload="false"
              /> */}
              {/* <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/gLMn0tYxvfc?si=kzdnNdL6mmgJIR_l&amp;start=11"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen={true}></iframe> */}
            </div>
            {/* <div
              className="col-12 text-center"
              style={{ marginTop: "-4em" }}>
              <img
                src="/images/green-road.png"
                className=""
                style={{ width: "20%", maxWidth: "100px" }}
                alt="volvo car"
              />
              <br />
              <img
                src="/images/green-road.png"
                className=""
                style={{ width: "20%", maxWidth: "100px" }}
                alt="volvo car"
              />
            </div> */}
          </div>
          <div
            className="w-100 position-fixed m-0 text-center"
            style={{
              bottom: 0,
              zIndex: 2,
              left: 0,
            }}
          >
            <div className="row homePageTab">
              <div
                className="col-6"
                style={{
                  backgroundColor: "#F2FFE4",
                  height: "40px",
                  fontSize: ".8em",
                  lineHeight: "40px",
                }}
              >
                <Link
                  href="/vehicle/pledge-now-non-ev"
                  style={{
                    width: "100%",
                    height: "100%",
                    textDecoration: "none",
                    color: "#000",
                    display: "block",
                  }}
                >
                  Non-EV Users
                </Link>
              </div>
              <div
                className="col-6"
                style={{
                  backgroundColor: "#9FCE69",
                  height: "40px",
                  fontSize: ".8em",
                  lineHeight: "40px",
                }}
              >
                <Link
                  href={"/vehicle/pledge-now-ev"}
                  style={{
                    width: "100%",
                    height: "100%",
                    textDecoration: "none",
                    color: "#000",
                    display: "block",
                  }}
                >
                  EV Users
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
