// Nextjs app router page

export default function AboutReverseProject() {
  return (
    <>
      <div className="row m-0">
        <div className="col-12 text-center mb-4 text-white">
          <h3 className="mt-3 mb-4">About Reverse Project</h3>

          <p>The world is constantly grappling with climate change and environmental degradation. Volvo Car India&apos;s Reverse Project aims to reverse the damage done to the environment, through definitive action.</p>

          <p>
            As part of Volvo Cars’ commitment to achieve net-zero greenhouse gas (GHG) emissions by 2040, The Reverse Project aims to convert an urban dump yard in Ghaziabad into a lush forest. We have already planted 10,000 trees, and irrespective of the car you have, with every kilometre you
            drive, we can plant more.
          </p>

          <p>Join us in our mission to nurture the planet and create a greener, healthier world for generations to come.</p>

          <img
            src="/images/about-plantation-project.png"
            className="mb-5"
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
