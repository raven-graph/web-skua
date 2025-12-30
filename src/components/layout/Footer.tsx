import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.logo}>SKUA</div>
                <div className={styles.links}>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter / X</a>
                    <span>&copy; {new Date().getFullYear()} Skua. All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
}
