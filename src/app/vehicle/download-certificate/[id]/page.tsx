import { getCertificate } from "@/service/user";

// Nextjs app router page
export default async function DownloadCertificate({
  params,
}: {
  params: { id: string };
}) {
  const certificate = await getCertificate(params.id);
  return (
    <>
      <div className="row m-0">
        <div className="col-12 text-center">
          {certificate && (
            <img src={certificate} className="downloadCrtficate" />
          )}
        </div>

        <div className="col-12 text-center pt-5 mt-2 mt-md-4 pt-md-0">
          {certificate && (
            <a
              href={certificate}
              download={`${params.id}.jpg`}
              className="submitCTA"
            >
              Download Certificate
            </a>
          )}
        </div>
      </div>
    </>
  );
}
