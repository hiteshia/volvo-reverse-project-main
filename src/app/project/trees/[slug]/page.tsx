import trees from "@/data/newTrees.json";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

//NEXTJS app router page
export default function TreeDetail({ params }: { params: { slug: number } }) {
  const tree = trees.find((tree) => tree["S. No."] == params.slug) || null;
  if (!tree) {
    return notFound();
  }
  return (
    <>
      <div className="row m-0">
        <div className="col-12">
          <div className="row">
            <div className="col-12">
              <h2 className="instaHeading text-center mb-4">
                GET TO KNOW YOUR TREES
              </h2>
            </div>
            <div className="col-12 text-center">
              <div className="abtPlantationImg">
                <img
                  src={
                    tree.Image !== ""
                      ? `/images/trees/${tree["Image"]}`
                      : `https://dummyimage.com/600x600/000/fff&text=Need+Image`
                  }
                />
                <h1 className="instaHeading text-center mt-3">
                  About {tree["Species Name"]}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mb-5">
          <div className="abtPlntBodyText mb-3">
            <h2 className={styles.subHeading}>
              <b>Scientific Name: </b>
              {tree["Scientific Name"]}
            </h2>
            <h2 className={styles.subHeading}>
              <b>Common Name: </b>
              {tree["Common Name"]}
            </h2>{" "}
            <h4 className={styles.subHeading}>Ecological Benefits</h4>
            <ul style={{ listStyle: "none" }}>
              {tree["Ecological Benefits"].split("\r\n").map((item, index) => (
                <li style={{ marginBottom: "5px" }} key={index}>
                  {item}
                </li>
              ))}
            </ul>
            {/* <h4 className={styles.subHeading}>
              Suitability in Degraded Aravalli
            </h4> */}
            {/* <ul style={{ listStyle: "none" }}>
              {tree["Suitability in Degraded Aravalli"]
                .split("\r\n")
                .map((item, index) => (
                  <li style={{ marginBottom: "5px" }} key={index}>
                    {item}
                  </li>
                ))}
            </ul> */}
            {/* <h3 className={styles.subHeading}>Cultural/Historicl/Mythological Importance</h3>
            <p>{tree["Cultural/Historicl/Mythological Importance"]}</p>             */}
          </div>
        </div>
      </div>
    </>
  );
}
