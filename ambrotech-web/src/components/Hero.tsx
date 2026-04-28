"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W, H;
    const particles = [];

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * 2000,
        y: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        a: Math.random() * 0.4 + 0.1,
      });
    }

    let animId;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${p.a})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,212,255,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.canvas}>
        <canvas ref={canvasRef} className={styles.canvasEl} />
      </div>
      <div className={styles.gradient} />

      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.eyebrow}>
            <div className={styles.eyebrowDot} />
            <span>India&apos;s Premier Filament Manufacturer</span>
          </div>

          <h1 className={styles.h1}>
            Premium Polyester
            <br />
            Monofilament
            <span className={styles.line2}>Yarn</span>
          </h1>

          <div className={styles.rule} />

          <p className={styles.desc}>
            Engineered for Strength. Designed for{" "}
            <strong>Zero Break Performance.</strong> Powering industries across
            10+ countries with precision-crafted filament solutions.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={styles.btnPrimary}>
              Request a Quote
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
            </a>
            <a href="#products" className={styles.btnSecondary}>
              View Products
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
            </a>
          </div>

          <div className={styles.trust}>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>💎</div>
              <div className={styles.trustText}>
                <b>ISO Certified</b>Export Quality
              </div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>🌍</div>
              <div className={styles.trustText}>
                <b>10+ Countries</b>Global Reach
              </div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>⚡</div>
              <div className={styles.trustText}>
                <b>Zero Break</b>Technology
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.spoolScene}>
            <div className={styles.orbitRing} />
            <div className={`${styles.orbitRing} ${styles.ring2}`} />
            <div className={`${styles.orbitRing} ${styles.ring3}`} />
            <div className={styles.orbitDot} />
            <div className={styles.spoolGlow} />
            <div className={styles.spoolCenter}>
              <div className={styles.spoolSvg}>
                <Image
                  src="/images/products/monofilament-spools.jpeg"
                  alt="Premium Monofilament Spools"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '50%' }}
                  priority
                />
              </div>
            </div>

            <div className={`${styles.statBubble} ${styles.sb1}`}>
              <div className={styles.sv}>
                500<span>+</span>
              </div>
              <div className={styles.sl}>Tons / Month</div>
            </div>
            <div className={`${styles.statBubble} ${styles.sb2}`}>
              <div className={styles.sv}>
                100<span>+</span>
              </div>
              <div className={styles.sl}>Happy Clients</div>
            </div>
            <div className={`${styles.statBubble} ${styles.sb3}`}>
              <div className={styles.sv}>
                10<span>+</span>
              </div>
              <div className={styles.sl}>Yrs Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
