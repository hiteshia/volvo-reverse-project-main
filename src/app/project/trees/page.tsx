"use client";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useEffect, useRef } from "react";
import styles from "./page.module.css";
import trees from "@/data/trees.json";

export default function Tree() {
  interface Tree {
    "S. No.": number | string;
    Image: string;
    "Species Name": string;
    [key: string]: any;
  }

  interface LinkWithPrefetch extends HTMLAnchorElement {
    prefetch?: () => void;
  }

  type LinkRefs = Record<string | number, LinkWithPrefetch | null>;

  // Track when user hovers near links for smarter prefetching
  const linkRefs = useRef<LinkRefs>({} as LinkRefs);

  const handleMouseEnter = (sNo: Tree["S. No."]): void => {
    // Optional: Prefetch on hover
    const el = linkRefs.current[sNo];
    if (el && typeof el.prefetch === "function") {
      el.prefetch();
    }
  };

  return (
    <>
      <Head>
        {/* Preload first 4 images for better initial load */}
        {trees.slice(0, 4).map((tree) => {
          if (tree.Image !== "") {
            return (
              <link
                key={`preload-${tree["S. No."]}`}
                rel="preload"
                as="image"
                href={`/images/trees/${tree["Image"]}`}
              />
            );
          }
          return null;
        })}
      </Head>

      <div className="row m-0">
        <div className="col-12">
          <div className="row mb-4">
            <h3 className="text-white text-center mb-4">
              GET TO KNOW YOUR TREES
            </h3>
            {trees.map((tree, index) => (
              <div
                className="col-6 col-md-6 mb-4"
                key={tree["S. No."]}
                onMouseEnter={() => handleMouseEnter(tree["S. No."])}
              >
                <Link
                  href={`/project/trees/${tree["S. No."]}`}
                  className="instaLink"
                  prefetch={index < 8} // ✅ Only prefetch first 8 items
                  ref={(el) => {
                    linkRefs.current[tree["S. No."]] = el;
                  }}
                >
                  <div className="instaPosts">
                    <Image
                      src={
                        tree.Image !== ""
                          ? `/images/trees/${tree["Image"]}`
                          : `https://dummyimage.com/600x600/000/fff&text=Need+Image`
                      }
                      alt={tree["Species Name"]}
                      width={300}
                      height={300}
                      className="mb-3"
                      priority={index < 4}
                      loading={index < 4 ? "eager" : "lazy"}
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    <h6>{tree["Species Name"]}</h6>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
