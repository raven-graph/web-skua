'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Button from '@/components/ui/Button';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          SKUA
        </Link>
        <div className={styles.links}>
          <Link href="#features">Features</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</Link>
        </div>
        <div className={styles.actions}>
          <Link href="#waitlist" className={styles.login}>Log in</Link>
          <Button href="#waitlist" size="sm">Get Access</Button>
        </div>
      </div>
    </motion.nav>
  );
}
