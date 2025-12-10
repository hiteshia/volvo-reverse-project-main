// Nextjs app router page

export default function AboutReverseProject() {
  return (
    <>
      <div className="row m-0">
        <div className="col-12 text-center mb-4 text-white">
          <h3
            className="mt-3 mb-4"
            style={{ fontFamily: "VolvoBroadPro", fontSize: "32px" }}
          >
            About Reverse Project
          </h3>
          <p>
            The <strong>Reverse Project</strong> by{" "}
            <strong>Volvo Car India</strong> turns everyday journeys into
            meaningful ecological action. We transformed a former dump yard in
            Ghaziabad into a thriving green space with{" "}
            <strong>35,000 trees</strong>. Now, the initiative expands across
            twenty acres of Aravalli terrain along the Gurugram to Faridabad
            highway, where over twenty thousand new trees are being planted to
            restore degraded land and revive its natural ecosystem. With your
            support, we aim to cross total of <strong>55,000 trees</strong> and
            continue creating healthier, greener spaces for generations to come.
          </p>

          <img
            src="/images/plantation/gaziabad.jpeg"
            className="mb-3"
            style={{ maxWidth: "100%", borderRadius: "10px" }}
          />
          <img
            src="/images/plantation/gurgaon.jpg"
            className="mb-3"
            style={{ maxWidth: "100%", borderRadius: "10px" }}
          />
        </div>
      </div>

      {/* <div className="col-12 mb-5">
        <div className="row">
          <div className="col-12 text-center">
            
          </div>
        </div>
      </div> */}
    </>
  );
}
