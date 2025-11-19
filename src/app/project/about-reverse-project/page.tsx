// Nextjs app router page

export default function AboutReverseProject() {
  return (
    <>
      <div className="row m-0">
        <div className="col-12 text-center mb-4">
          <div className="instaHeading">About Reverse Project <br/> <span style={{fontSize:"14px"}}>Turning kilometres into trees</span></div>
        </div>

        <div className="col-12 mb-3">
          <div className="abtPlntBodyText pt-0">
            {" "}
            The world is constantly grappling with climate change and environmental degradation.
            Volvo Car India&apos;s Reverse Project aims to reverse the damage done to the environment, through definitive action.

          </div>
          <div className="abtPlntBodyText pt-1">

          </div>
          <div className="abtPlntBodyText pt-1">
            {" "}

          </div>
        </div>

        <div className="col-12">
          <div className="row">
            <div className="col-12 text-center">
              <img
                src="/images/about-plantation-project.png"
                className="abtPlantationImg"
              />
            </div>
            <div className="col-12 position-relative">
              <div className="abtPltnProjectWhiteBg">
                <p>
                  As part of Volvo Cars’ commitment to achieve net-zero greenhouse gas (GHG) emissions by 2040, The Reverse Project aims to convert an urban dump yard in Ghaziabad into a lush forest. We have already planted 10,000 trees, and irrespective of the car you have, with every kilometre you drive, we can plant more.
                  <br />
                  Join us in our mission to nurture the planet and create a greener, healthier world for generations to come.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
