'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle } from 'lucide-react';
import Section from '@/components/ui/Section';
import styles from './Waitlist.module.css';

export default function Waitlist() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1500);
    };

    return (
        <Section id="waitlist" className={styles.section} noPadding>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>Understand the market before you trade it.</h2>
                    <p className={styles.subheading}>Join 2,000+ traders waiting for structural clarity.</p>

                    <div className={styles.formWrapper}>
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className={styles.success}
                                >
                                    <CheckCircle size={24} className={styles.checkIcon} />
                                    <div>
                                        <h3>You&apos;re on the list!</h3>
                                        <p>Keep an eye on your inbox.</p>
                                    </div>
                                    <button onClick={() => setStatus('idle')} className={styles.resetBtn}>Add another</button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    onSubmit={handleSubmit}
                                    className={styles.form}
                                >
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className={styles.input}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        disabled={status === 'loading'}
                                    />
                                    <button
                                        type="submit"
                                        className={styles.submitBtn}
                                        disabled={status === 'loading' || !email}
                                    >
                                        {status === 'loading' ? (
                                            <Loader2 size={20} className={styles.spinner} />
                                        ) : (
                                            'Join Waitlist'
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>

                    <p className={styles.note}>
                        Built by traders. No financial advice. No promises.<br />
                        <span className={styles.secure}>Encrypted & Secure.</span>
                    </p>
                </div>
            </div>
        </Section>
    );
}
