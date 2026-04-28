"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Stats.module.css";

const stats = [
  { num: 10, suffix: "+", label: "Years of Experience" },
  { num: 500, suffix: "+", label: "Tons Monthly Capacity" },
  { num: 100, suffix: "+", label: "Happy Clients" },
  { num: 10, suffix: "+", label: "Countries Export" },
];

export default function Stats() {
  const ref = useRef(null);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1800;
          const start = performance.now();
          function step(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCounts(stats.map((s) => Math.round(eased * s.num)));
            if (progress < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={styles.section} ref={ref}>
      <div className={styles.mesh} />
      <div className={styles.inner}>
        <div className={styles.grid}>
          {stats.map((s, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.num}>
                {counts[i]}
                <em>{s.suffix}</em>
              </div>
              <div className={styles.unit}>{s.label}</div>
              <div className={styles.line} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
