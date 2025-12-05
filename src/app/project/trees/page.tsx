import Link from "next/link";
import styles from "./page.module.css";
import trees from "@/data/trees.json";
import TreeImage from "@/app/components/common/tree";

// Nextjs page for insta posts
export default function Tree() {
  return (
    <div className="row m-0">
      <div className="col-12">
        <div className="row mb-4">
          {/* <h3 className="text-white text-center mb-4">
            Join the Reverse Project
          </h3> */}
          <h3 className="text-white text-center mb-4">
            Join the Reverse Project
            <br />
            Trees planted under Reverse Project
          </h3>
          {trees.map((tree) => (
            <div className="col-6 col-md-6 mb-4" key={tree["S. No."]}>
              <Link
                href={`/project/trees/${tree["S. No."]}`}
                className="instaLink"
              >
                <div className="instaPosts">
                  <img
                    src={
                      tree.Image !== ""
                        ? `/images/trees/${tree["Image"]}`
                        : `https://dummyimage.com/600x600/000/fff&text=Need+Image`
                    }
                    className="mb-3"
                  />
                  <h6>{tree["Species Name"]}</h6>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
