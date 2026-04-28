import styles from "./WhyChoose.module.css";

const reasons = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    title: "Advanced Technology",
    desc: "State-of-the-art extrusion lines for consistent quality across every batch.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Zero Break Performance",
    desc: "Special formulation and strict process control for guaranteed zero break results.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    title: "Strict Quality Control",
    desc: "From raw material to final product — 100% quality with rigorous testing protocols.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12" />
      </svg>
    ),
    title: "Custom Solutions",
    desc: "Custom denier, strength, colours and packaging to match your exact requirements.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 6v4h-7V8zM5.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      </svg>
    ),
    title: "On Time Delivery",
    desc: "Strong production capacity ensures timely supply for every order, every time.",
  },
];

export default function WhyChoose() {
  return (
    <section className={`${styles.section} reveal`}>
      <div className={styles.inner}>
        <div className="section-header">
          <div className="sec-label-wrap">
            <div className="sec-label-line" />
            <span className="sec-label-tag">Why Choose Us</span>
            <div className="sec-label-line r" />
          </div>
          <h2 className="sec-h2">
            Five Pillars of
            <br />
            Our Excellence
          </h2>
          <p className="sec-desc">
            What makes Ambrotech Filament the preferred partner for
            manufacturers and traders worldwide.
          </p>
        </div>

        <div className={styles.grid}>
          {reasons.map((r, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.ico}>{r.icon}</div>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
