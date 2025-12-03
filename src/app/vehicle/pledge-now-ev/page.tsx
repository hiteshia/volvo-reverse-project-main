import styles from "./page.module.css";
import PledgeNowButton from "@/app/components/register/pledge-now-button";
import TreePledgeButton from "@/app/components/register/tree-pledge-button";

export const dynamic = "force-dynamic";

// Nextjs app router page
export default function DownloadCertificate({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Get name from searchParams if available
  const name =
    typeof searchParams.name === "string" ? searchParams.name : undefined;

  return (
    <>
      <div className="row m-0">
        {/* <PledgeNowButton styles={styles} pledges={0} /> */}
        <TreePledgeButton styles={styles} name={name} />
      </div>
    </>
  );
}
