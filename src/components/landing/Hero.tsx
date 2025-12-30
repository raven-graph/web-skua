'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener('resize', resize);
        resize();

        // Nodes
        const nodes: { x: number; y: number; vx: number; vy: number; radius: number; color: string }[] = [];
        const nodeCount = 40;

        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                color: i % 5 === 0 ? '#3B82F6' : '#6B7280' // Some blue, some gray
            });
        }

        const draw = () => {
            ctx.fillStyle = '#050507'; // Match bg-primary
            ctx.fillRect(0, 0, width, height);

            // Updates
            nodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;

                if (node.x < 0 || node.x > width) node.vx *= -1;
                if (node.y < 0 || node.y > height) node.vy *= -1;
            });

            // Draw connections
            ctx.lineWidth = 0.5;
            for (let i = 0; i < nodeCount; i++) {
                for (let j = i + 1; j < nodeCount; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 150) {
                        ctx.beginPath();
                        const opacity = 1 - dist / 150;
                        ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.3})`;
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes
            nodes.forEach(node => {
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = node.color;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section className={styles.hero}>
            <canvas ref={canvasRef} className={styles.canvas} />
            <div className={`container ${styles.content}`}>
                <div className={styles.badge}>
                    Coming Soon
                </div>
                <h1 className={styles.title}>
                    See which assets are <span className={styles.accent}>pulling</span>, <span className={styles.accent}>following</span>, or <span className={styles.accent}>breaking away</span>.
                </h1>
                <p className={styles.subtitle}>
                    Skua is a live map of market structure. Spot regime changes and influence shifts before they show up in single-asset charts.
                </p>
                <div className={styles.actions}>
                    <Link href="#waitlist" className="btn btn-primary">
                        Reference the Map
                    </Link>
                    <Link href="#features" className="btn btn-outline">
                        How it works
                    </Link>
                </div>
            </div>
        </section>
    );
}
