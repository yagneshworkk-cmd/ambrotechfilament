import styles from "./Industries.module.css";

const industries = [
  {
    icon: "🐟",
    title: "Fisheries",
    desc: "Durable yarns for fishing nets, ropes and twines with superior knot strength and UV protection.",
    color: "i1",
  },
  {
    icon: "🌿",
    title: "Agriculture",
    desc: "Reliable solutions for agricultural nets, shade nets, and crop protection throughout all seasons.",
    color: "i2",
  },
  {
    icon: "🧶",
    title: "Textile",
    desc: "High quality filament for weaving, knitting and technical textiles with precise denier specifications.",
    color: "i3",
  },
  {
    icon: "⚙️",
    title: "Industrial",
    desc: "Engineered yarns for technical, industrial and special applications requiring maximum performance.",
    color: "i4",
  },
];

export default function Industries() {
  return (
    <section id="industries" className={`${styles.section} reveal`}>
      <div className={styles.inner}>
        <div className="section-header">
          <div className="sec-label-wrap">
            <div className="sec-label-line" />
            <span className="sec-label-tag">Industries We Serve</span>
            <div className="sec-label-line r" />
          </div>
          <h2 className="sec-h2">
            Applications Across
            <br />
            Every Sector
          </h2>
          <p className="sec-desc">
            Our premium filament yarns are engineered with specialized
            formulations for each industry&apos;s unique demands.
          </p>
        </div>

        <div className={styles.grid}>
          {industries.map((ind, i) => (
            <div key={i} className={`${styles.card} ${styles[ind.color]}`}>
              <div className={styles.cardBg} />
              <div className={styles.overlayBase} />
              <div className={styles.content}>
                <div className={styles.iconCircle}>{ind.icon}</div>
                <div className={styles.title}>{ind.title}</div>
                <div className={styles.reveal}>{ind.desc}</div>
                <div className={styles.linkText}>
                  Explore{" "}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
