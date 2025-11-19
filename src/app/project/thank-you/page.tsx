// Nextjs page for insta posts
export default function ThankYou() {
  return (
    <>
      <div className="row m-0">
        <div className="col-12">
          <img
            src="/images/thankyou.png"
            className="thankYouImg"
            alt="Thank You"
          />
        </div>
        <div className="col-12">
          <div className="submittedMsg">
            {/* Your request has been submitted. */}
            <strong>
              Check back in 48 hours and your certificate will be ready.
            </strong>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <div className="row m-0 grayPattern">
          <div className="col-12">
            <img
              src="/images/green-patrn-car.png"
              className="volvoCar"
              style={{ zIndex: "1" }}
              alt="volvo car"
            />
          </div>
        </div>
      </div>
    </>
  );
}
