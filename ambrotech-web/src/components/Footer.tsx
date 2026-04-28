import styles from "./Footer.module.css";

const productLinks = [
  "Polyester Monofilament",
  "Fishing Net Yarn",
  "Agricultural Net Yarn",
  "Industrial Filament",
  "Custom Solutions",
];

const companyLinks = [
  "About Us",
  "Infrastructure",
  "Quality Standards",
  "Industries We Serve",
  "Contact Us",
];

const contactItems = [
  { icon: "📍", text: "Bhavnagar, Gujarat, India" },
  { icon: "📞", text: "+91 XXXXXXXXXX" },
  { icon: "✉️", text: "info@ambrotechfilament.com" },
  { icon: "🌐", text: "ambrotechfilament.com" },
  { icon: "💬", text: "WhatsApp Business" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.brandLogo}>
            <div className={styles.logoMark}>AF</div>
            <div className={styles.logoText}>
              <b>Ambrotech</b>
              <span>Filament</span>
            </div>
          </div>
          <p>
            A leading manufacturer of high-performance polyester monofilament
            yarn, delivering precision-crafted quality to global markets since
            2016.
          </p>
          <div className={styles.socials}>
            {["in", "tw", "fb", "yt"].map((s) => (
              <a key={s} href="#" className={styles.socialLink}>
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.col}>
          <h5>Products</h5>
          <ul>
            {productLinks.map((l) => (
              <li key={l}>
                <a href="#">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h5>Company</h5>
          <ul>
            {companyLinks.map((l) => (
              <li key={l}>
                <a href="#">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h5>Contact</h5>
          <ul>
            {contactItems.map((c) => (
              <li key={c.text}>
                <a href="#">
                  {c.icon} {c.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 Ambrotech Filament. All rights reserved.</p>
        <p>
          <a href="#">Privacy Policy</a> &nbsp;·&nbsp;{" "}
          <a href="#">Terms of Use</a> &nbsp;·&nbsp;{" "}
          <a href="#">Sitemap</a>
        </p>
      </div>
    </footer>
  );
}
