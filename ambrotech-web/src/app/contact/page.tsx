"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <h1 className={styles.h1}>Get In Touch</h1>
          <p className={styles.subtitle}>
            Have a question or need a custom quote? Our team is ready to provide
            you with the best filament solutions tailored to your industry.
          </p>
        </div>
      </section>

      <div className={styles.inner}>
        {/* Left Column: Contact Info */}
        <div className={styles.infoColumn}>
          <div className={styles.infoCard}>
            <div className={styles.iconWrap}>📍</div>
            <div className={styles.infoContent}>
              <h3>Corporate Office & Plant</h3>
              <p>Ambrotech Filament<br />Bhavnagar, Gujarat, India</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.iconWrap}>📞</div>
            <div className={styles.infoContent}>
              <h3>Phone & WhatsApp</h3>
              <p>
                <a href="tel:+919099788563">+91 90997 88563</a><br />
                <a href="https://wa.me/919099788563" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.iconWrap}>✉️</div>
            <div className={styles.infoContent}>
              <h3>Email Us</h3>
              <p>
                <a href="mailto:ambtotechfilament99@gmail.com">ambtotechfilament99@gmail.com</a>
              </p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.iconWrap}>🕒</div>
            <div className={styles.infoContent}>
              <h3>Business Hours</h3>
              <p>Monday - Saturday: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className={styles.formColumn}>
          <h2>Send us a Message</h2>
          <p>Fill out the form below and our sales team will get back to you shortly.</p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="company">Company Name</label>
                <input type="text" id="company" placeholder="ABC Manufacturing" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="+91 90997 88563" />
              </div>
              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label htmlFor="interest">Product of Interest</label>
                <select id="interest">
                  <option value="polyester">Polyester Monofilament</option>
                  <option value="fishing">Fishing Net Yarn</option>
                  <option value="agriculture">Agricultural Net Yarn</option>
                  <option value="industrial">Industrial Filament</option>
                  <option value="other">Other / Custom Requirement</option>
                </select>
              </div>
              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label htmlFor="message">Message *</label>
                <textarea id="message" placeholder="How can we help you?" required></textarea>
              </div>
            </div>
            
            <button type="submit" className={styles.submitBtn}>
              Submit Inquiry
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <CTA />
      <Footer />
    </main>
  );
}
