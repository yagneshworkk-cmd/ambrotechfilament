"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import styles from "./about.module.css";

const timeline = [
  {
    year: "2016",
    title: "The Beginning",
    desc: "Set up the first manufacturing plant at Bhavnagar, Gujarat — starting our journey as a polyester monofilament yarn manufacturer in India.",
  },
  {
    year: "2021",
    title: "Expansion & Specialisation",
    desc: "Established a second manufacturing plant at Bhavnagar, specialising in Fine Denier Polyester & Nylon Monofilament Yarns.",
  },
  {
    year: "2023",
    title: "ISO Certification",
    desc: "Achieved ISO 9001:2015 certification, maintaining international quality standards for all products and services.",
  },
  {
    year: "Today",
    title: "Leading Manufacturer",
    desc: "Recognised as one of the leading quality manufacturers in Gujarat with global exports across 10+ countries.",
  },
];

const strengths = [
  {
    icon: "🏭",
    title: "Massive Production",
    stat: "10,00,000+",
    unit: "kgs average production",
    desc: "Our state-of-the-art facilities ensure consistent, large-scale output to meet global demand.",
  },
  {
    icon: "🔄",
    title: "Re-Winding Capacity",
    stat: "8,00,000+",
    unit: "kgs re-winding",
    desc: "Industry-leading re-winding capacity for precision packaging and custom requirements.",
  },
  {
    icon: "⚡",
    title: "Modern Technology",
    stat: "2",
    unit: "manufacturing plants",
    desc: "Qualified team backed by advanced technology — our core strength in delivering quality products.",
  },
  {
    icon: "🎯",
    title: "Custom Solutions",
    stat: "100%",
    unit: "flexibility",
    desc: "We produce any monofilament yarn as per your exact requirements — denier, colour, and packaging.",
  },
];

const values = [
  {
    icon: "💎",
    title: "Excellence",
    desc: "We believe in excellence and consistent growth by investing in new technologies, directed at long-term sustainability.",
  },
  {
    icon: "🌍",
    title: "Global Vision",
    desc: "To be a one-stop solution provider in polyesters to partners across the globe.",
  },
  {
    icon: "👨‍💼",
    title: "Expert Team",
    desc: "Day-to-day affairs managed by professionals from the embroidery field with abundant experience.",
  },
  {
    icon: "🏆",
    title: "Quality First",
    desc: "ISO 9001:2015 certified — maintaining international quality standards for every product we deliver.",
  },
];

export default function AboutPage() {
  return (
    <>
      <CursorGlow />
      <Navbar />

      {/* Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.heroGradient} />
        <div className={styles.heroBg} />
        <div className={styles.heroInner}>
          <div className={styles.eyebrow}>
            <div className={styles.eyebrowDot} />
            <span>About Ambrotech Filaments</span>
          </div>
          <h1 className={styles.h1}>
            Crafting Quality
            <br />
            <span>Since 2016</span>
          </h1>
          <p className={styles.heroDesc}>
            A proud Indian manufacturer of high-performance polyester &amp; nylon
            monofilament yarns, delivering precision-crafted quality to global
            markets from Bhavnagar, Gujarat.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className={styles.storySection}>
        <div className={styles.storyInner}>
          <div className={styles.storyText}>
            <div className={styles.labelWrap}>
              <div className={styles.labelLine} />
              <span className={styles.labelTag}>Our Story</span>
            </div>
            <h2 className={styles.h2}>
              From a Single Plant to
              <br />a Manufacturing Powerhouse
            </h2>
            <p className={styles.storyPara}>
              <strong>Ambrotech Filaments</strong> started as a manufacturing
              company in India. In 2016, we set up our first manufacturing plant
              at Bhavnagar, Gujarat — driven by a vision to deliver world-class
              monofilament yarn to both domestic and international markets.
            </p>
            <p className={styles.storyPara}>
              Between 2021–2022, we expanded with a second manufacturing plant,
              specialising in <strong>Fine Denier Polyester &amp; Nylon Monofilament
              Yarns</strong> — opening new possibilities for our clients across
              the textile, fishing, agricultural, and industrial sectors.
            </p>
            <p className={styles.storyPara}>
              Today, we are recognised as one of the leading quality
              manufacturers in Gujarat, serving as a one-stop solution provider
              in polyesters to partners across the globe.
            </p>
          </div>

          {/* Timeline */}
          <div className={styles.timelineCol}>
            <div className={styles.timelineTrack}>
              {timeline.map((t, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineCard}>
                    <div className={styles.timelineYear}>{t.year}</div>
                    <div className={styles.timelineTitle}>{t.title}</div>
                    <div className={styles.timelineDesc}>{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strengths / Capacity */}
      <section className={styles.strengthsSection}>
        <div className={styles.strengthsMesh} />
        <div className={styles.strengthsInner}>
          <div className={styles.labelWrapCenter}>
            <div className={styles.labelLine} style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.5))" }} />
            <span className={styles.labelTag} style={{ color: "var(--cyan)" }}>Our Capacity</span>
            <div className={styles.labelLine} style={{ background: "linear-gradient(90deg, rgba(0,212,255,0.5), transparent)" }} />
          </div>
          <h2 className={styles.h2White}>
            Built for Scale &amp;
            <br />
            Precision
          </h2>
          <div className={styles.strengthsGrid}>
            {strengths.map((s, i) => (
              <div key={i} className={styles.strengthCard}>
                <div className={styles.strengthIcon}>{s.icon}</div>
                <div className={styles.strengthStat}>
                  {s.stat}
                </div>
                <div className={styles.strengthUnit}>{s.unit}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Vision */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesInner}>
          <div className={styles.labelWrapCenter}>
            <div className={styles.labelLine} />
            <span className={styles.labelTag}>Our Values</span>
            <div className={styles.labelLine} style={{ background: "linear-gradient(90deg, var(--blue2), transparent)" }} />
          </div>
          <h2 className={styles.h2}>
            What Drives Us
            <br />
            Every Day
          </h2>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={i} className={styles.valueCard}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className={styles.ctaStrip}>
        <div className={styles.ctaGlow} />
        <div className={styles.ctaInner}>
          <h2>Ready to Partner With Us?</h2>
          <p>
            We produce any monofilament yarn as per your requirements. Get in
            touch for a custom quote today.
          </p>
          <div className={styles.ctaBtns}>
            <a href="/#contact" className={styles.ctaBtn}>
              Send Inquiry
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/" className={styles.ctaBtnGhost}>
              Back to Home
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
