import styles from "./Process.module.css";

const steps = [
  { num: "01", title: "Raw Material", desc: "Premium grade polyester chips sourced from certified global suppliers." },
  { num: "02", title: "Extrusion", desc: "Advanced extrusion lines with precise temperature and pressure control." },
  { num: "03", title: "Drawing", desc: "Multi-stage drawing for achieving target tenacity and elongation." },
  { num: "04", title: "Quality Testing", desc: "Rigorous in-process and final testing to zero-break standards." },
  { num: "05", title: "Packaging & Dispatch", desc: "Custom wound packages ready for global export with timely delivery." },
];

export default function Process() {
  return (
    <section className={`${styles.section} reveal`}>
      <div className={styles.bg} />
      <div className={styles.inner}>
        <div className="section-header">
          <div className="sec-label-wrap">
            <div className="sec-label-line" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.5))" }} />
            <span className="sec-label-tag" style={{ color: "var(--cyan)" }}>Our Process</span>
            <div className="sec-label-line r" style={{ background: "linear-gradient(90deg, rgba(0,212,255,0.5), transparent)" }} />
          </div>
          <h2 className="sec-h2" style={{ color: "#fff" }}>
            From Raw Material
            <br />
            to Final Product
          </h2>
          <p className="sec-desc" style={{ color: "rgba(255,255,255,0.45)" }}>
            A meticulous 5-step manufacturing process that guarantees superior
            quality at every stage.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((s, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.num}>
                <span>{s.num}</span>
              </div>
              <div className={styles.stepTitle}>{s.title}</div>
              <div className={styles.stepDesc}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
