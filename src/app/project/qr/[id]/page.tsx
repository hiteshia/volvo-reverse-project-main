import TreeImage from "@/app/components/common/tree";
import styles from "./page.module.css";
import { getCertificateData } from "@/service/user";

export default async function CertificateDetails({ params }: { params: { id: string } }) {
  const data = await getCertificateData(params.id);

  return (
    <div className="row m-0">
      <div className="col-12 text-center mb-4">
        <div className="instaHeading">Trees planted</div>
      </div>
      <div className="col-12">
        <div className="row">
          {data.map((tree) => (
            <div
              className="col-6 col-md-6 mb-4"
              key={tree["tree-id"]}>
              <div
                className="instaPosts"
                style={{ height: "300px" }}>
                {/* <img src={tree['image-url']} /> */}
                <TreeImage
                  image={tree["image-url"]}
                  styles={styles}
                />
                {/* <img src={`/images/trees/${tree["Images"]}`} /> */}
                <p style={{ textAlign: "center" }}>
                  <b>Species: </b>
                  <span>{tree["species"]}</span>
                  <br />
                  <b>Lat: </b>
                  <span>{tree["geo-location"]["latitude"]}</span>
                  <br />
                  <b>Lon: </b>
                  <span>{tree["geo-location"]["longitude"]}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="col-12"
        style={{ height: "100px" }}>
        &nbsp;
      </div>
    </div>
  );
}
