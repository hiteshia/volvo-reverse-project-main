import trees from "@/data/trees.json";
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
        <div className="col-12 text-center mb-4">
          <h1 className="instaHeading">About {tree["Vernacular Name"]}</h1>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 text-center position-relative">
              <img
                src={`/images/trees/${tree["Images"]}`}
                className="abtPlantationImg"
              />
              <div className="abtPltnWhiteBg"></div>
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
              <b>Other Names: </b>
              {tree["Other Names"]}
            </h2>{" "}
            <h3 className={styles.subHeading}>
              Ecological & Commercial Importance
            </h3>
            <ul style={{ listStyle: "none" }}>
              {tree["Ecological & Commercial Importance"]
                .split("\r\n")
                .map((item, index) => (
                  <li style={{marginBottom: "5px"}} key={index}>{item}</li>
                ))}
            </ul>
            <h3 className={styles.subHeading}>Medicinal Properties</h3>
            <ul style={{ listStyle: "none" }}>
              {tree["Medicinal Properties"].split("\r\n").map((item, index) => (
                <li style={{marginBottom: "5px"}} key={index}>{item}</li>
              ))}
            </ul>
            {/* <h3 className={styles.subHeading}>Cultural/Historicl/Mythological Importance</h3>
            <p>{tree["Cultural/Historicl/Mythological Importance"]}</p>             */}
          </div>
        </div>
      </div>
    </>
  );
}
