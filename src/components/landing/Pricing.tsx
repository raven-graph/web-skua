'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import styles from './Pricing.module.css';

const tiers = [
    {
        name: "Free",
        price: "0",
        desc: "For casual observation",
        features: ["Delayed Market Map", "Limited Assets", "No Alerts", "Public Discord"]
    },
    {
        name: "Pro",
        price: "29",
        desc: "For active traders",
        popular: true,
        features: ["Live Market Map", "Full Asset Set", "Influence Alerts", "7-Day History", "Private Discord"]
    },
    {
        name: "Power",
        price: "79",
        desc: "For professional setups",
        features: ["Multiple Timeframes", "Auto-Grouped Clusters", "Early Sentiment Access", "Priority Support", "API Access"]
    }
];

export default function Pricing() {
    const [annual, setAnnual] = useState(false);

    return (
        <Section id="pricing" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.heading}>Early Access Pricing</h2>
                    <p className={styles.subheading}>Secure your spot. Early users get grandfathered pricing.</p>

                    <div className={styles.toggleWrapper} onClick={() => setAnnual(!annual)}>
                        <span className={`${styles.period} ${!annual ? styles.active : ''}`}>Monthly</span>
                        <div className={styles.toggle}>
                            <motion.div
                                className={styles.toggleHandle}
                                animate={{ x: annual ? 28 : 2 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </div>
                        <span className={`${styles.period} ${annual ? styles.active : ''}`}>Yearly <span className={styles.save}>(Save 20%)</span></span>
                    </div>
                </div>

                <div className={styles.grid}>
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={i}
                            className={`${styles.card} ${tier.popular ? styles.popular : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            {tier.popular && <div className={styles.badge}>Most Popular</div>}
                            <h3 className={styles.cardName}>{tier.name}</h3>
                            <div className={styles.price}>
                                <span className={styles.currency}>$</span>
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={annual ? "year" : "month"}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        {annual ? Math.floor(Number(tier.price) * 12 * 0.8) : tier.price}
                                    </motion.span>
                                </AnimatePresence>
                                <span className={styles.periodText}>{annual ? '/yr' : '/mo'}</span>
                            </div>
                            <p className={styles.desc}>{tier.desc}</p>

                            <ul className={styles.features}>
                                {tier.features.map((feat, j) => (
                                    <li key={j}>
                                        <Check size={16} className={styles.check} />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={tier.popular ? 'primary' : 'outline'}
                                className={styles.button}
                                href="#waitlist"
                            >
                                {tier.popular ? 'Get Started' : 'Join Waitlist'}
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.paidWaitlist}>
                    <div className={styles.pulsingBorder} />
                    <div className={styles.pwContent}>
                        <h3>Want guaranteed early access?</h3>
                        <p>Reserve a spot for $20. Fully refundable. Limited to the first 100 traders.</p>
                        <Button variant="secondary" size="sm" href="#waitlist">Reserve Spot</Button>
                    </div>
                </div>
            </div>
        </Section>
    );
}
