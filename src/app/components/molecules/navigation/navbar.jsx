"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.logo}>
          <Image
            src="/images/logo2.png"
            alt="Logo"
            width={48}
            height={48}
            priority
          />
          <Link href="/">
            <h2>DESIGNO</h2>
          </Link>
        </div>
        <nav className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/company" onClick={closeMenu}>
            Our Company
          </Link>
          <Link href="/locations" onClick={closeMenu}>
            Locations
          </Link>
          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            stroke="currentColor"
            className={styles.menuIcon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </div>
      </header>

      {/* Overlay that shows when menu is open */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.active : ""}`}
        onClick={toggleMenu}
      ></div>
    </>
  );
};

export default Navbar;
