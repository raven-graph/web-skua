import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.brand}>
                    <span className={styles.logo}>SKUA</span>
                    <p className={styles.tagline}>Structure over Noise.</p>
                </div>
                <div className={styles.links}>
                    <a href="#" className={styles.link}>Twitter</a>
                    <a href="#" className={styles.link}>Discord</a>
                    <a href="#" className={styles.link}>Terms</a>
                </div>
                <div className={styles.copy}>
                    &copy; {new Date().getFullYear()} Skua.
                </div>
            </div>
        </footer>
    );
}
