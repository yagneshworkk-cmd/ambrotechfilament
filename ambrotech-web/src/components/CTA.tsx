import Link from "next/link";
import styles from "./CTA.module.css";

const trustItems = [
  "No minimum order",
  "Custom denier available",
  "Fast turnaround",
  "Global shipping",
];

export default function CTA() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.bgGlow} />
      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <div className={styles.dot} />
          <span>Ready to Partner With Us?</span>
        </div>

        <h2 className={styles.h2}>
          Looking for a Reliable
          <br />
          <em>Filament Supplier?</em>
        </h2>

        <p className={styles.sub}>
          We are ready to support your business with premium quality filament
          products. Get a custom quote tailored to your specifications today.
        </p>

        <div className={styles.btns}>
          <Link href="/contact" className={styles.btnPrimary}>
            Send Inquiry Now
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <a href="https://wa.me/919099788563" className={styles.waBtn} target="_blank" rel="noopener noreferrer">
            <div className={styles.waCircle}>W</div>
            Chat on WhatsApp
          </a>
        </div>

        <div className={styles.trustRow}>
          {trustItems.map((item, i) => (
            <div key={i} className={styles.trustItem}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
