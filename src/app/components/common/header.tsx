"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// React component for header
export default function Header() {
  const [show, setShow] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const toggleShow = () => {
    setShow(!show);
  };

  // Detect if the screen is mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Set initial value
    setShow(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pathname = usePathname();
  return (
    <nav className="navbar navbar-expand-lg left-top">
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col-2 col-md-0">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => {
                toggleShow();
              }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="backArrow d-none"></div>
          </div>
          <div className="col-10 col-md-12">
            <Link
              href="https://www.volvocars.com/in/"
              target="_blank"
              className="navbar-brand"
            >
              <img src="/images/volvo-logo.png" className="volvoLogo" />
            </Link>
          </div>
        </div>
        <div
          className={`offcanvas-lg offcanvas-start flex-grow-1 ${
            show ? "show" : ""
          }`}
          id="navbarNavAltMarkup"
        >
          <div className="cstmHeight">
            <div className="menuText d-md-none">Menu</div>
            <div className="mt-5 pb-3 d-md-none"></div>
            <div className="cstmWhiteBorder d-md-none mt-3"></div>
            <div className="navbar-nav">
              <Link
                className={`nav-link d-md-none ${
                  pathname == "/" ? "active" : ""
                }`}
                href={"/"}
                onClick={() => {
                  toggleShow();
                }}
              >
                <div
                  className={`homeIcon d-md-none ${
                    pathname == "/" ? "active" : ""
                  }`}
                ></div>
                Home
              </Link>
              <Link
                className={`nav-link ${pathname == "/" ? "active" : ""}`}
                href={"/"}
                onClick={() => {
                  toggleShow();
                }}
              >
                <div
                  className={`dwnCertificateIcon d-md-none ${
                    pathname == "/" ? "active" : ""
                  }`}
                ></div>{" "}
                Home
              </Link>
              <Link
                className={`nav-link ${
                  pathname == "/project/about-reverse-project" ? "active" : ""
                }`}
                href={"/project/about-reverse-project"}
                onClick={() => {
                  toggleShow();
                }}
              >
                <div
                  className={`aboutReverseIcon d-md-none ${
                    pathname == "/project/about-reverse-project" ? "active" : ""
                  }`}
                ></div>
                About the project
              </Link>
              <Link
                className={`nav-link ${
                  pathname == "/project/faq" ? "active" : ""
                }`}
                href={"/project/faq"}
                onClick={() => {
                  toggleShow();
                }}
              >
                <div
                  className={`participateIcon d-md-none ${
                    pathname == "/project/faq" ? "active" : ""
                  }`}
                ></div>{" "}
                FAQs
              </Link>
              <Link
                className={`nav-link ${
                  pathname == "/project/about-plantation" ? "active" : ""
                }`}
                href={"/project/about-plantation"}
                onClick={() => {
                  toggleShow();
                }}
              >
                <div
                  className={`plantationIcon d-md-none ${
                    pathname == "/project/about-plantation" ? "active" : ""
                  }`}
                ></div>{" "}
                The Plantation Site
              </Link>
              {/* <Link
                className={`nav-link ${
                  pathname == "/project/insta-posts" ? "active" : ""
                }`}
                href={"/project/insta-posts"}
                onClick={() => {
                  toggleShow();
                }}
              >
                <div
                  className={`instaPostIcon d-md-none ${
                    pathname == "/project/insta-posts" ? "active" : ""
                  }`}
                ></div>{" "}
                Instagram
              </Link> */}
              {/* <Link
                className={`nav-link ${pathname == "/vehicle" ? "active" : ""}`}
                href={"/vehicle"}
                onClick={() => {
                  toggleShow();
                }}>
                <div className={`dwnCertificateIcon d-md-none ${pathname == "/vehicle" ? "active" : ""}`}></div> Download Certificate
              </Link> */}
              <Link
                className={`nav-link ${
                  pathname == "/project/trees" ? "active" : ""
                }`}
                href={"/project/trees"}
                onClick={() => {
                  toggleShow();
                }}
              >
                <div
                  className={`treeIcon d-md-none ${
                    pathname == "/project/trees" ? "active" : ""
                  }`}
                ></div>{" "}
                Trees planted
              </Link>
              <div className="mt-3 d-md-none"></div>
              <div className="cstmWhiteBorder d-md-none mt-5"></div>
              <div className="d-md-none mt-3" style={{ color: "#c0c5dd" }}>
                <div className="row p-3">
                  <div className="col-12 mb-3">
                    <b>Contact Us:</b>
                  </div>
                  <div className="col-12">
                    Volvo Car India, Toll Free Number:
                  </div>
                  <div className="col-12 mt-1">
                    <a
                      href="tel:1800 102 9100"
                      style={{
                        textDecoration: "underline",
                        color: "#c0c5dd",
                      }}
                    >
                      1800 102 9100
                    </a>
                  </div>
                </div>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        {show && isMobile && (
          <div
            className="offcanvas-backdrop fade show"
            onClick={() => {
              toggleShow();
            }}
          ></div>
        )}
      </div>
    </nav>
  );
}
