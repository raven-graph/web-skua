import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          SKUA
        </Link>
        <div className={styles.links}>
          <Link href="#features">Features</Link>
          <Link href="#pricing">Pricing</Link>
        </div>
        <Link href="#waitlist" className="btn btn-primary">
          Get Started
        </Link>
      </div>
    </nav>
  );
}
