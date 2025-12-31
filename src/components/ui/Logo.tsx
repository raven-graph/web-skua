import { motion } from 'framer-motion';

export default function Logo({ className, size = 32 }: { className?: string, size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#60A5FA" />
                </linearGradient>
            </defs>

            {/* Abstract 'S' formed by structure nodes */}
            <motion.path
                d="M24 8L16 4L8 8V14L16 18"
                stroke="url(#logo-gradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />

            <motion.path
                d="M8 24L16 28L24 24V18L16 14"
                stroke="url(#logo-gradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            />

            {/* Nodes */}
            <motion.circle cx="16" cy="4" r="2" fill="white" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} />
            <motion.circle cx="16" cy="14" r="2" fill="#2563EB" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }} />
            <motion.circle cx="16" cy="28" r="2" fill="white" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4 }} />
        </svg>
    );
}
