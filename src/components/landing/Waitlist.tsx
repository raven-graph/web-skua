'use client';

import { useState } from 'react';
import styles from './Waitlist.module.css';

export default function Waitlist() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1000);
    };

    return (
        <section id="waitlist" className={styles.section}>
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.heading}>Join the Validation List</h2>
                    <p className={styles.subheading}>
                        Be the first to see market structure clearly. Limited early access spots available.
                    </p>

                    {status === 'success' ? (
                        <div className={styles.success}>
                            <h3>You&apos;re on the list!</h3>
                            <p>We&apos;ll notify you when early access opens.</p>
                            <button onClick={() => setStatus('idle')} className={styles.linkBtn}>Add another email</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className={styles.input}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'Joining...' : 'Request Access'}
                            </button>
                        </form>
                    )}
                    <p className={styles.note}>No spam. Unsubscribe anytime.</p>
                </div>
            </div>
        </section>
    );
}
