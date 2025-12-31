'use client';

import clsx from 'clsx';
import styles from './Section.module.css';

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    noPadding?: boolean;
}

export default function Section({
    children,
    id,
    className,
    noPadding = false,
}: SectionProps) {
    return (
        <section
            id={id}
            className={clsx(
                styles.section,
                !noPadding && styles.padded,
                className
            )}
        >
            {children}
        </section>
    );
}
