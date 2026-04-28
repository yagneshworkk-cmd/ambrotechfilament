"use client";
import Image from "next/image";
import styles from "./Products.module.css";

const products = [
  {
    image: "/images/products/polyester-white-trio.jpeg",
    tag: "Core Product",
    title: "Polyester Monofilament",
    desc: "High quality polyester monofilament yarn with consistent diameter control, suitable for multiple industrial applications.",
    color: "pc1",
  },
  {
    image: "/images/products/zero-break-clean.jpeg",
    tag: "Fisheries",
    title: "Fishing Net Yarn",
    desc: "Specially designed for fishing nets with excellent knot strength, UV resistance, and long-term marine durability.",
    color: "pc2",
  },
  {
    image: "/images/products/yarn-rainbow.jpeg",
    tag: "Agriculture",
    title: "Agricultural Net Yarn",
    desc: "UV stabilized yarns for agricultural nets, fencing, and crop protection applications across all weather conditions.",
    color: "pc3",
  },
  {
    image: "/images/products/monofilament-spools.jpeg",
    tag: "Industrial",
    title: "Industrial Filament",
    desc: "Engineered filament yarns for industrial, technical textile and special applications requiring maximum performance.",
    color: "pc4",
  },
];

export default function Products() {
  return (
    <section id="products" className={`${styles.section} reveal`}>
      <div className={styles.inner}>
        <div className="section-header">
          <div className="sec-label-wrap">
            <div className="sec-label-line" />
            <span className="sec-label-tag">Our Products</span>
            <div className="sec-label-line r" />
          </div>
          <h2 className="sec-h2">
            Premium Filament
            <br />
            Yarn Range
          </h2>
          <p className="sec-desc">
            Engineered for diverse industrial applications with consistent
            quality from raw material to finished product.
          </p>
        </div>

        <div className={styles.grid}>
          {products.map((p, i) => (
            <div key={i} className={`${styles.card} ${styles[p.color]}`}>
              <div className={styles.img}>
                <div className={styles.imgInner}>
                  <Image src={p.image} alt={p.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.imgOverlay} />
              </div>
              <div className={styles.body}>
                <div className={styles.tag}>{p.tag}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href="#" className={styles.cta}>
                  View Details
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
