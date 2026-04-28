"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Industries", href: "#industries" },
  { label: "Quality", href: "#quality" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="mainNav"
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
    >
      <Link href="/" className={styles.logo} style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
        <Image 
          src="/images/logos/ambrotech-logo.jpeg" 
          alt="Ambrotech Filament Logo" 
          width={56} 
          height={56} 
          className={styles.logoImg}
          style={{ borderRadius: '8px', objectFit: 'contain', background: '#fff', padding: '4px' }}
        />
        <div className={styles.logoText} style={{ display: 'flex', flexDirection: 'column' }}>
          <b style={{ fontSize: '20px', lineHeight: '1.2', color: '#fff', fontFamily: 'var(--font-heading)' }}>Ambrotech</b>
          <span style={{ fontSize: '12px', letterSpacing: '2px', color: 'var(--cyan)', textTransform: 'uppercase' }}>Filament</span>
        </div>
      </Link>

      <ul className={`${styles.center} ${menuOpen ? styles.centerOpen : ""}`}>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.right}>
        <a href="#" className={styles.btnGhost}>
          Infrastructure
        </a>
        <a href="/contact" className={styles.btnSolid}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 6.18 2 2 0 014.11 4H7a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 11.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 18z" />
          </svg>
          Get Quote
        </a>
      </div>

      <button
        className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
