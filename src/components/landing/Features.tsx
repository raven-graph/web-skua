'use client';

import { motion } from 'framer-motion';
import { Zap, Network, Target, ArrowRight, Layers, Box } from 'lucide-react';
import Section from '@/components/ui/Section';
import ProductShowcase from './ProductShowcase';
import styles from './Features.module.css';

const features = [
    {
        icon: Zap,
        title: "Directional Influence",
        description: "Don't just see correlations. See who is pulling who. Identify lead-lag relationships in real-time.",
        className: styles.card
    },
    {
        icon: Network,
        title: "Regime Detection",
        description: "Know when a narrative is structural or isolated. Spot when clusters like AI or Memes start to fracture.",
        className: styles.card
    },
    {
        icon: Target,
        title: "Context Layer",
        description: "Stop guessing. Validate breakouts by checking if the underlying structure supports the move.",
        className: styles.card
    },
    {
        icon: Layers,
        title: "Multi-Timeframe",
        description: "Zoom out to 4h for structure, zoom in to 15m for execution.",
        className: styles.card
    },
    {
        icon: Box,
        title: "Asset Clusters",
        description: "Auto-grouped sectors showing you where money is flowing.",
        className: styles.cardLarge
    }
];

export default function Features() {
    return (
        <Section id="features" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.heading}
                    >
                        Structure over Noise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={styles.subheading}
                    >
                        Charts show moves. Twitter shows narratives.<br />
                        <span className={styles.highlight}>Only Skua shows structure.</span>
                    </motion.p>
                </div>

                {/* Integrated Showcase */}
                <div className={styles.showcaseWrapper}>
                    <ProductShowcase />
                </div>

                <div className={styles.grid}>
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            className={`${styles.card} ${feature.className || ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className={styles.cardContent}>
                                <div className={styles.iconWrapper}>
                                    <feature.icon size={24} />
                                </div>
                                <h3 className={styles.cardTitle}>{feature.title}</h3>
                                <p className={styles.cardDesc}>{feature.description}</p>
                            </div>

                            <div className={styles.cardHover}>
                                <ArrowRight size={16} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
