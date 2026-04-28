import styles from "./QualityStrip.module.css";

const certs = [
  { code: "ISO", label: "ISO 9001:2015 Certified" },
  { code: "CE", label: "CE Mark Compliant" },
  { code: "EQ", label: "Export Quality Standard" },
  { code: "ZB", label: "Zero Break Certified" },
];

export default function QualityStrip() {
  return (
    <div id="quality" className={styles.strip}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h3>Certified for Global Excellence</h3>
          <p>Our products meet the highest international quality benchmarks.</p>
        </div>
        <div className={styles.right}>
          {certs.map((c, i) => (
            <div key={i} className={styles.badge}>
              <div className={styles.badgeIcon}>{c.code}</div>
              {c.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
