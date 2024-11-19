"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./navbar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Our Company",
    path: "/company",
  },
  {
    label: "Locations",
    path: "/locations",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const pathname = usePathname();

  const handleResize = useCallback(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 640);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 640);

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [handleResize]);

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
          <ul>
            {links.map((link) => {
              const isActive = pathname === link.path;
              const color = isActive
                ? "#e7816b"
                : isMobile
                ? "#fafafa"
                : "#333136";
              return (
                <li key={`${link.label}-${link.path}`}>
                  <Link
                    style={{
                      fontWeight: isActive ? "bold" : "normal",
                      color: color,
                    }}
                    href={link.path}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
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

export { Navbar };
