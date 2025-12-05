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

          {/* <p>
            The world is constantly grappling with climate change and
            environmental degradation. Volvo Car India&apos;s Reverse Project
            aims to reverse the damage done to the environment, through
            definitive action.
          </p>

          <p>
            As part of Volvo Cars’ commitment to achieve net-zero greenhouse gas
            (GHG) emissions by 2040, The Reverse Project aims to convert an
            urban dump yard in Ghaziabad into a lush forest. We have already
            planted 10,000 trees, and irrespective of the car you have, with
            every kilometre you drive, we can plant more.
          </p>

          <p>
            Join us in our mission to nurture the planet and create a greener,
            healthier world for generations to come.
          </p> */}
          <p>
            The Reverse Project by Volvo Cars India turns everyday journeys into
            meaningful ecological action. Last year, it transformed a former
            dump yard in Ghaziabad into a thriving green space with 35,000
            trees. This year, the initiative expands across twenty acres of
            Aravalli terrain along the Gurugram to Faridabad highway, where over
            twenty thousand new trees are being planted to restore degraded land
            and revive its natural ecosystem. With your support, we aim to cross
            total of 55,000 trees and continue creating healthier, greener
            spaces for generations to come.
          </p>

          <img
            src="/images/about-plantation-project.png"
            className="mb-5"
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
