import styles from "./FeatureBar.module.css";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "High Tensile Strength",
    desc: "Superior load-bearing capacity",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Zero Break Technology",
    desc: "Proprietary extrusion process",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: "Export Quality Standards",
    desc: "ISO certified, globally trusted",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93l-1.41 1.41M6.34 17.66l-1.41 1.41M14 12h7M3 12h4M19.07 19.07l-1.41-1.41M6.34 6.34L4.93 4.93" />
      </svg>
    ),
    title: "Custom Manufacturing",
    desc: "Denier, colour & pack options",
  },
];

export default function FeatureBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        {features.map((f, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.iconWrap}>{f.icon}</div>
            <div className={styles.text}>
              <strong>{f.title}</strong>
              <span>{f.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
