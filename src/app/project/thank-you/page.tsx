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
          <div
            className="text-white text-center mt-5"
            style={{ fontSize: "18px" }}>
            <p>Your request has been submitted.</p>
            <p>
              Check back in 48 hours
              <br />
              and your certificate will be ready.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
