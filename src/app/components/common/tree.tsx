"use client";

export default function TreeImage({ image, styles }: any) {
  return (
    <div
      className={styles.centerCropped}
      style={{
        backgroundImage: `url('${image}')`,
      }}
    ></div>
  );
}
