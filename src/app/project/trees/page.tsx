import Link from "next/link";
import styles from "./page.module.css";
import trees from "@/data/trees.json";
import TreeImage from "@/app/components/common/tree";

// Nextjs page for insta posts
export default function Tree() {
  return (
    <div className="row m-0">
      <div className="col-12 text-center mb-4">
        <div className="instaHeading">Trees planted under Reverse Project</div>
      </div>
      <div className="col-12">
        <div className="row mb-4">
          {trees.map((tree) => (
            <div className="col-6 col-md-6 mb-4" key={tree["S. No."]}>
              <Link
                href={`/project/trees/${tree["S. No."]}`}
                className="instaLink"
              >
                <div className="instaPosts">
                  <TreeImage image={`/images/trees/${tree["Images"]}`} styles={styles} />
                  {/* <img src={`/images/trees/${tree["Images"]}`} /> */}
                  <span>{tree["Vernacular Name"]}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
