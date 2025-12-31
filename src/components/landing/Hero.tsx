'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let particles: Particle[] = [];
        let animationFrameId: number;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.2;
                this.vy = (Math.random() - 0.5) * 0.2;
                this.size = Math.random() * 2 + 1;
                // 10% chance to be blue, else grey
                this.color = Math.random() > 0.9 ? '#2563EB' : 'rgba(255, 255, 255, 0.2)';
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            const count = Math.min(width < 768 ? 40 : 80, 100);
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            // Draw connections first
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 150) {
                        ctx.beginPath();
                        const opacity = 1 - dist / 150;
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.05})`;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw particles
            particles.forEach(p => {
                p.update();
                p.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.spotlight} />
            <canvas ref={canvasRef} className={styles.canvas} />

            <div className={`container ${styles.content}`}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={styles.center}
                >
                    <div className={styles.badge_wrapper}>
                        <div className={styles.badge}>Live Market Structure</div>
                    </div>

                    <h1 className={styles.title}>
                        See who <span className={styles.highlight}>leads</span>.<br />
                        See who <span className={styles.highlight}>follows</span>.
                    </h1>

                    <p className={styles.subtitle}>
                        A live graph of the crypto market. Track directional influence and regime shifts in real-time, not just price action.
                    </p>

                    <div className={styles.actions}>
                        <Button size="lg" href="#waitlist">
                            Get Early Access
                        </Button>
                        <Button size="lg" variant="ghost" href="#features">
                            Learn how it works
                        </Button>
                    </div>

                    <div className={styles.disclaimer}>
                        Not a trading bot. Not a signal feed. Pure structure.
                    </div>
                </motion.div>
            </div>

            <div className={styles.fadeBottom} />
        </section>
    );
}
