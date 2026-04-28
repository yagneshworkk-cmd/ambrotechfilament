import Image from "next/image";
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
  { icon: "📍", text: "Bhavnagar, Gujarat, India", href: "#" },
  { icon: "📞", text: "+91 90997 88563", href: "tel:+919099788563" },
  { icon: "✉️", text: "ambtotechfilament99@gmail.com", href: "mailto:ambtotechfilament99@gmail.com" },
  { icon: "🌐", text: "ambrotechfilament.com", href: "#" },
  { icon: "💬", text: "WhatsApp Business", href: "https://wa.me/919099788563" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.brandLogo} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Image 
              src="/images/logos/ambrotech-logo.jpeg" 
              alt="Ambrotech Filament Logo" 
              width={64} 
              height={64} 
              style={{ borderRadius: '8px', objectFit: 'contain', background: '#fff', padding: '4px' }}
            />
            <div className={styles.logoText} style={{ display: 'flex', flexDirection: 'column' }}>
              <b style={{ fontSize: '24px', lineHeight: '1.2', color: '#fff', fontFamily: 'var(--font-heading)' }}>Ambrotech</b>
              <span style={{ fontSize: '13px', letterSpacing: '2px', color: 'var(--cyan)', textTransform: 'uppercase' }}>Filament</span>
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
            {contactItems.map((c) => {
              const isExternal = c.href && c.href.startsWith("http");
              return (
                <li key={c.text}>
                  <a 
                    href={c.href || "#"}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    {c.icon} {c.text}
                  </a>
                </li>
              );
            })}
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
