/* eslint-disable @next/next/no-img-element */
// Nextjs app router page
import styles from "./page.module.css";

import RegisterForm from "@/app/components/register/form";

export default function App() {
  return (
    <>
      <div className="row m-0">
        <div className="col-12">
          <RegisterForm styles={styles} />
        </div>
        <div className="col-12">
          <img
            src="/images/green-patrn-car.png"
            className="volvoCar"
            alt="volvo car"
          />
        </div>
      </div>
    </>
  );
}
