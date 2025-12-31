'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import styles from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    onClick?: () => void;
    className?: string;
    external?: boolean;
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    onClick,
    className,
    external = false,
}: ButtonProps) {
    const cn = clsx(
        styles.btn,
        styles[variant],
        styles[size],
        className
    );

    const content = (
        <>
            {children}
            {variant === 'primary' && <div className={styles.shine} />}
        </>
    );

    if (href) {
        if (external) {
            return (
                <a href={href} className={cn} target="_blank" rel="noopener noreferrer">
                    {content}
                </a>
            );
        }
        return (
            <Link href={href} className={cn}>
                {content}
            </Link>
        );
    }

    return (
        <motion.button
            className={cn}
            onClick={onClick}
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.02 }}
        >
            {content}
        </motion.button>
    );
}
