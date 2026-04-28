import styles from "./Ticker.module.css";

const items = [
  "Polyester Monofilament Yarn",
  "Fishing Net Yarn",
  "Agricultural Net Yarn",
  "Industrial Filament",
  "Zero Break Technology",
  "Export Quality Standards",
  "Custom Manufacturing",
  "ISO Certified Products",
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        {doubled.map((item, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.dot} />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
