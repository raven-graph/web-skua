'use client';

import { motion } from 'framer-motion';
import { Activity, Share2, Shield, Settings, Bell, Search, Menu, TrendingUp } from 'lucide-react';
import Section from '@/components/ui/Section';
import styles from './ProductShowcase.module.css';

export default function ProductShowcase() {
    return (
        <Section className={styles.section} noPadding>
            <div className={styles.glow} />

            <div className="container">
                <div className={styles.perspectiveWrapper}>
                    <motion.div
                        className={styles.dashboard}
                        initial={{ transform: "rotateX(20deg) scale(0.9) translateY(40px)", opacity: 0 }}
                        whileInView={{ transform: "rotateX(0deg) scale(1) translateY(0px)", opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {/* Header */}
                        <header className={styles.dashHeader}>
                            <div className={styles.dashLogo}>
                                <div className={styles.logoIcon}></div>
                                <span>Skua Terminal</span>
                            </div>
                            <div className={styles.dashSearch}>
                                <Search size={14} />
                                <span>Search assets...</span>
                            </div>
                            <div className={styles.dashControls}>
                                <Bell size={16} />
                                <div className={styles.avatar}></div>
                            </div>
                        </header>

                        <div className={styles.dashBody}>
                            {/* Sidebar */}
                            <aside className={styles.sidebar}>
                                <div className={`${styles.navItem} ${styles.active}`}><Activity size={18} /></div>
                                <div className={styles.navItem}><Share2 size={18} /></div>
                                <div className={styles.navItem}><Shield size={18} /></div>
                                <div className={styles.spacer} />
                                <div className={styles.navItem}><Settings size={18} /></div>
                            </aside>

                            {/* Main Graph Area */}
                            <main className={styles.mainArea}>
                                <div className={styles.graphControls}>
                                    <div className={styles.badge}>Live</div>
                                    <div className={styles.timeframe}>1H</div>
                                    <div className={styles.controlItem}>Correlation &gt; 0.8</div>
                                    <div className={styles.controlItem}>Sector: All</div>
                                </div>

                                <div className={styles.metricsOverlay}>
                                    <div className={styles.metric}>
                                        <span className={styles.metricLabel}>Structure Score</span>
                                        <span className={styles.metricValue}>8.4/10</span>
                                    </div>
                                    <div className={styles.metric}>
                                        <span className={styles.metricLabel}>Active Clusters</span>
                                        <span className={styles.metricValue}>3</span>
                                    </div>
                                </div>

                                {/* Simulated Graph */}
                                <div className={styles.graphContainer}>
                                    {/* CLUSTER 1: SOL Ecosystem */}
                                    <div className={`${styles.node} ${styles.leader}`} style={{ top: '40%', left: '40%' }}>
                                        <div className={styles.nodeLabel}>SOL</div>
                                        <div className={styles.nodeTag}>+4.2%</div>
                                        <div className={styles.pulse} />
                                    </div>

                                    <div className={styles.node} style={{ top: '30%', left: '60%' }}>
                                        <div className={styles.nodeLabel}>JUP</div>
                                        <div className={styles.nodeTag}>+2.1%</div>
                                    </div>
                                    <div className={styles.node} style={{ top: '55%', left: '55%' }}>
                                        <div className={styles.nodeLabel}>WIF</div>
                                        <div className={styles.nodeTag}>+5.8%</div>
                                    </div>
                                    <div className={styles.node} style={{ top: '60%', left: '30%' }}>
                                        <div className={styles.nodeLabel}>BONK</div>
                                    </div>

                                    {/* CLUSTER 2: AI Sector (Detached) */}
                                    <div className={styles.node} style={{ top: '20%', left: '25%', opacity: 0.7 }}>
                                        <div className={styles.nodeLabel}>TAO</div>
                                        <div className={styles.nodeTag}>-1.2%</div>
                                    </div>
                                    <div className={styles.node} style={{ top: '15%', left: '15%', opacity: 0.6 }}>
                                        <div className={styles.nodeLabel}>FET</div>
                                    </div>

                                    {/* Connections with Active Particles */}
                                    <svg className={styles.connections} viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.5" />
                                                <stop offset="100%" stopColor="#2563EB" stopOpacity="0.1" />
                                            </linearGradient>
                                        </defs>

                                        <Connection x1={40} y1={40} x2={60} y2={30} delay={0} />
                                        <Connection x1={40} y1={40} x2={55} y2={55} delay={1} />
                                        <Connection x1={40} y1={40} x2={30} y2={60} delay={2} />

                                        {/* AI Connections */}
                                        <motion.line
                                            x1={25} y1={20} x2={15} y2={15}
                                            stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" strokeDasharray="2 2"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ duration: 1.5, delay: 1.2 }}
                                        />
                                    </svg>

                                    {/* Dynamic Signal Toast */}
                                    <motion.div
                                        className={styles.signalToast}
                                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{ delay: 3, duration: 0.5 }}
                                    >
                                        <div className={styles.signalDot} />
                                        <span>High-Conviction Breakout: <strong>SOL</strong></span>
                                    </motion.div>
                                </div>
                            </main>

                            {/* Right Panel (Feed) */}
                            <aside className={styles.rightPanel}>
                                <div className={styles.panelHeader}>
                                    <span>Regime Shifts</span>
                                    <div className={styles.panelBadge}>3 New</div>
                                </div>
                                <div className={styles.feed}>
                                    <motion.div
                                        className={styles.feedItem}
                                        initial={{ x: 20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 1 }}
                                    >
                                        <div className={styles.feedIcon}><TrendingUp size={14} /></div>
                                        <div className={styles.feedContent}>
                                            <div className={styles.feedTitle}>SOL Lead Expanding</div>
                                            <div className={styles.feedMeta}>
                                                <span className={styles.feedTag}>High Confidence</span>
                                                <span className={styles.feedTime}>2m ago</span>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <div className={styles.feedItem} style={{ opacity: 0.7 }}>
                                        <div className={styles.feedIcon}><Share2 size={14} /></div>
                                        <div className={styles.feedContent}>
                                            <div className={styles.feedTitle}>AI Sector Decoupling</div>
                                            <div className={styles.feedMeta}>
                                                <span className={`${styles.feedTag} ${styles.warning}`}>Medium Impact</span>
                                                <span className={styles.feedTime}>15m ago</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.feedItem} style={{ opacity: 0.4 }}>
                                        <div className={styles.feedIcon}><Activity size={14} /></div>
                                        <div className={styles.feedContent}>
                                            <div className={styles.feedTitle}>ETH/BTC Correlation Break</div>
                                            <div className={styles.feedMeta}>
                                                <span className={styles.feedTag}>Low Impact</span>
                                                <span className={styles.feedTime}>1h ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.panelFooter}>
                                    <div className={styles.footerItem}>
                                        <span className={styles.footerLabel}>System Status</span>
                                        <span className={styles.footerValue} style={{ color: '#22c55e' }}>Online</span>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}

function Connection({ x1, y1, x2, y2, delay }: { x1: number, y1: number, x2: number, y2: number, delay: number }) {
    // Calculate length for the dash array
    const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    return (
        <g>
            <motion.line
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="url(#line-gradient)" strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: delay }}
            />
            {/* Energy Beam */}
            <motion.line
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#60A5FA"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeDasharray={`15 ${length + 20}`}
                initial={{ strokeDashoffset: length + 15, opacity: 0 }}
                animate={{
                    strokeDashoffset: -length,
                    opacity: [0, 1, 1, 0] // Fade in/out slightly at ends
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut", // Smoother flow
                    delay: delay + 1,
                    repeatDelay: 0.5
                }}
                style={{ filter: 'drop-shadow(0 0 1px #3B82F6)' }} // Inline glow or use class
            />
        </g>
    );
}
