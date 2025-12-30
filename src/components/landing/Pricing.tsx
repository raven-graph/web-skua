import Link from 'next/link';
import styles from './Pricing.module.css';

export default function Pricing() {
    return (
        <section id="pricing" className={styles.section}>
            <div className="container">
                <h2 className={styles.heading}>Simple Pricing</h2>
                <p className={styles.subheading}>No hidden fees. Cancel anytime.</p>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3>Free</h3>
                        <div className={styles.price}>$0<span>/mo</span></div>
                        <ul className={styles.features}>
                            <li>Delayed Market Map</li>
                            <li>Limited Assets</li>
                            <li>No Alerts</li>
                        </ul>
                        <Link href="#waitlist" className={`btn btn-outline ${styles.button}`}>
                            Join Waitlist
                        </Link>
                    </div>

                    <div className={`${styles.card} ${styles.popular}`}>
                        <div className={styles.badge}>Most Popular</div>
                        <h3>Pro</h3>
                        <div className={styles.price}>$29<span>/mo</span></div>
                        <ul className={styles.features}>
                            <li>Live Market Map</li>
                            <li>Full Asset Set</li>
                            <li>Influence Alerts</li>
                            <li>7-Day History</li>
                        </ul>
                        <Link href="#waitlist" className={`btn btn-primary ${styles.button}`}>
                            Select Pro
                        </Link>
                    </div>

                    <div className={styles.card}>
                        <h3>Power</h3>
                        <div className={styles.price}>$79<span>/mo</span></div>
                        <ul className={styles.features}>
                            <li>Multiple Timeframes</li>
                            <li>Auto-Grouped Clusters</li>
                            <li>Early Sentiment Access</li>
                            <li>Priority Support</li>
                        </ul>
                        <Link href="#waitlist" className={`btn btn-outline ${styles.button}`}>
                            Select Power
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
