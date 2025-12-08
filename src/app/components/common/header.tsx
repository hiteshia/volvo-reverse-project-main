"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// React component for header
export default function Header() {
  const [show, setShow] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);

  const toggleShow = () => {
    setShow(!show);
  };

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 992);
      // Close offcanvas when resizing to desktop
      if (width >= 992) {
        setShow(false);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pathname = usePathname();
  return (
    <nav className="navbar navbar-expand-lg left-top">
      <div className="container-fluid">
        <div className="row w-100 align-items-center">
          <div className="col-2 col-md-1 col-lg-0">
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleShow}
              aria-expanded={show}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="backArrow d-none"></div>
          </div>
          <div className="col-10 col-md-11 col-lg-12">
            <Link
              href="https://www.volvocars.com/in/"
              target="_blank"
              className="navbar-brand"
            >
              <img
                src="/images/volvo-logo.png"
                className="volvoLogo"
                alt="Volvo Logo"
              />
            </Link>
          </div>
        </div>

        {/* Offcanvas for mobile/tablet */}
        <div
          className={`offcanvas-lg offcanvas-start ${
            show ? "show" : ""
          } d-lg-none`}
          style={show ? { visibility: "visible" } : {}}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Menu</h5>
            <button
              type="button"
              className="btn-close"
              onClick={toggleShow}
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body cstmHeight">
            <div className="navbar-nav">
              <Link
                className={`nav-link  ${pathname === "/" ? "active" : ""}`}
                href="/"
                onClick={toggleShow}
              >
                <div
                  className={`homeIcon d-md-none ${
                    pathname == "/" ? "active" : ""
                  }`}
                ></div>{" "}
                Home
              </Link>
              <Link
                className={`nav-link ${
                  pathname === "/project/about-reverse-project" ? "active" : ""
                }`}
                href="/project/about-reverse-project"
                onClick={toggleShow}
              >
                <div
                  className={`aboutReverseIcon d-md-none ${
                    pathname == "/project/about-reverse-project" ? "active" : ""
                  }`}
                ></div>
                About Reverse Project
              </Link>
              <Link
                className={`nav-link ${
                  pathname === "/project/trees" ? "active" : ""
                }`}
                href="/project/trees"
                onClick={toggleShow}
              >
                <div
                  className={`treeIcon d-md-none ${
                    pathname == "/project/trees" ? "active" : ""
                  }`}
                ></div>{" "}
                Know more about the trees
              </Link>
              <Link
                className={`nav-link ${
                  pathname === "/project/faq" ? "active" : ""
                }`}
                href="/project/faq"
                onClick={toggleShow}
              >
                <div
                  className={`participateIcon d-md-none ${
                    pathname == "/project/faq" ? "active" : ""
                  }`}
                ></div>{" "}
                FAQs
              </Link>

              {/* Contact section for mobile only */}
              <div className="d-lg-none mt-4 pt-3 border-top border-secondary">
                <div className="text-white-50 p-3">
                  <div className="mb-2">
                    <b>Contact Us:</b>
                  </div>
                  <div>Volvo Car India, Toll Free Number:</div>
                  <div className="mt-1">
                    <a
                      href="tel:1800 102 9100"
                      className="text-decoration-underline text-white-50"
                    >
                      1800 102 9100
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regular navbar for desktop (≥992px) */}
        <div
          className="collapse navbar-collapse d-none d-lg-flex"
          id="navbarNav"
        >
          <div className="navbar-nav ms-auto">
            <Link
              className={`nav-link ${pathname === "/" ? "active" : ""}`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`nav-link ${
                pathname === "/project/about-reverse-project" ? "active" : ""
              }`}
              href="/project/about-reverse-project"
            >
              About Reverse Project
            </Link>
            <Link
              className={`nav-link ${
                pathname === "/project/trees" ? "active" : ""
              }`}
              href="/project/trees"
            >
              Know more about the trees
            </Link>
            <Link
              className={`nav-link ${
                pathname === "/project/faq" ? "active" : ""
              }`}
              href="/project/faq"
            >
              FAQs
            </Link>
          </div>
        </div>

        {/* Backdrop for mobile/tablet */}
        {show && (isMobile || isTablet) && (
          <div
            className="offcanvas-backdrop fade show"
            onClick={toggleShow}
            style={{ zIndex: 1040 }}
          ></div>
        )}
      </div>
    </nav>
  );
}
