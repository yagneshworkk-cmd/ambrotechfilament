import Image from "next/image";
import styles from "./About.module.css";

const pillars = [
  { icon: "⚡", title: "Advanced Technology", desc: "State-of-the-art extrusion lines for flawless consistency." },
  { icon: "✅", title: "Quality Assurance", desc: "100% tested from raw material to finished product." },
  { icon: "🚚", title: "Timely Delivery", desc: "Strong production capacity for on-time fulfillment." },
  { icon: "🌍", title: "Global Supply", desc: "Trusted partners across 10+ countries worldwide." },
];

const stats = [
  { value: "10", suffix: "+", label: "Years Active" },
  { value: "500", suffix: "+", label: "Tons/Month" },
  { value: "100", suffix: "+", label: "Clients" },
  { value: "10", suffix: "+", label: "Countries" },
];

export default function About() {
  return (
    <section id="about" className={`${styles.section} reveal`}>
      <div className={styles.inner}>
        <div className={styles.visualCol}>
          <div className={styles.mainCard} style={{ position: 'relative', overflow: 'hidden' }}>
            <Image src="/images/products/yarn-collection.jpeg" alt="Ambrotech Manufacturing Excellence" fill style={{ objectFit: 'cover' }} />
            <div className={styles.bgPattern} style={{ background: 'rgba(10, 22, 40, 0.75)' }} />
            <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
              <div className={styles.mainLogo} style={{ position: 'relative', top: 'auto', left: 'auto' }}>
                <div className={styles.alm}>AF</div>
                <span>Ambrotech Filament</span>
              </div>
              <div>
                <div className={styles.mainTitle}>
                  Manufacturing<br />Excellence
                </div>
                <div className={styles.mainSub}>Bhavnagar, Gujarat, India</div>
              </div>
            </div>
          </div>
          <div className={styles.statsGrid}>
            {stats.map((s, i) => (
              <div key={i} className={styles.statPill}>
                <div className={styles.asv}>
                  {s.value}<em>{s.suffix}</em>
                </div>
                <div className={styles.asl}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.textCol}>
          <div className="sec-label-wrap" style={{ justifyContent: "flex-start" }}>
            <div className="sec-label-line" />
            <span className="sec-label-tag">About Us</span>
          </div>
          <h2 className="sec-h2" style={{ textAlign: "left", marginBottom: 20 }}>
            Your Reliable<br />Manufacturing Partner
          </h2>
          <p className={styles.desc}>
            Ambrotech Filament is a leading manufacturer of high-performance polyester monofilament yarn.
            With advanced extrusion technology and a skilled workforce, we deliver consistent quality,
            strength, and reliability for global markets. From fisheries to textiles, our products are
            trusted across industries worldwide.
          </p>
          <div className={styles.pillarsGrid}>
            {pillars.map((p, i) => (
              <div key={i} className={styles.pillar}>
                <div className={styles.pillarIcon}>{p.icon}</div>
                <strong>{p.title}</strong>
                <span>{p.desc}</span>
              </div>
            ))}
          </div>
          <a href="/about" className={styles.readMore}>
            Read More About Us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
