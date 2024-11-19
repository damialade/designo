import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* First Section - Navbar like structure */}
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Image
            src="/images/logoblack.png"
            alt="Logo"
            width={40}
            height={40}
            priority
          />
          <Link href="/">
            <h2>DESIGNO</h2>
          </Link>
        </div>
        <nav className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/company">Our Company</Link>
          <Link href="/locations">Locations</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>

      <hr className={styles.divider} />

      {/* Second Section - Three Column Grid */}
      <div className={styles.grid}>
        <div className={styles.column}>
          <h4>Designo Central Office</h4>
          <ul>
            <li>3886 Wellington Street</li>
            <li>Toronto, Ontario M9C 3J5</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Contact Us (Central Office)</h4>
          <ul>
            <li>P : +1 253-863-8967</li>
            <li>M : contact@designo.co</li>
          </ul>
        </div>

        {/* Third Section - Social Media Links */}
        <div className={styles.column}>
          <h4>Follow Us</h4>
          <div className={styles.socialLinks}>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/twitter.png"
                alt="Twitter"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/pinterest.png"
                alt="Pinterest"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/youtube.png"
                alt="Pinterest"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
