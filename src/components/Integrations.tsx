'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Integrations.module.css';
import { Linkedin, Facebook, Twitter, Phone, MessageCircle } from 'lucide-react';

const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.27 6.36 6.34 6.34 0 0 0 6.25-6.36V7.98a7.81 7.81 0 0 0 3.14 1.16l-.07-3.45a4.89 4.89 0 0 1-1-1z" />
    </svg>
);

const LogoIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="#0f172a" />
        <path d="M7 14L10.5 10.5M10.5 10.5L14 7M10.5 10.5L14 14M14 7L17.5 10.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 10.5L10.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

interface NodePosition {
    x: number;
    y: number;
}

export default function Integrations() {
    const leftNodesRef = useRef<(HTMLDivElement | null)[]>([]);
    const rightNodesRef = useRef<(HTMLDivElement | null)[]>([]);
    const centerNodeRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [lines, setLines] = useState<{ x1: number, y1: number, x2: number, y2: number }[]>([]);

    useEffect(() => {
        const updateLines = () => {
            if (!containerRef.current || !centerNodeRef.current) return;
            const containerRect = containerRef.current.getBoundingClientRect();
            const centerRect = centerNodeRef.current.getBoundingClientRect();

            const centerPoint = {
                x: centerRect.left - containerRect.left + centerRect.width / 2,
                y: centerRect.top - containerRect.top + centerRect.height / 2
            };

            const newLines: { x1: number, y1: number, x2: number, y2: number }[] = [];

            leftNodesRef.current.forEach(node => {
                if (node) {
                    const rect = node.getBoundingClientRect();
                    newLines.push({
                        x1: rect.right - containerRect.left,
                        y1: rect.top - containerRect.top + rect.height / 2,
                        x2: centerPoint.x,
                        y2: centerPoint.y
                    });
                }
            });

            rightNodesRef.current.forEach(node => {
                if (node) {
                    const rect = node.getBoundingClientRect();
                    newLines.push({
                        x1: centerPoint.x,
                        y1: centerPoint.y,
                        x2: rect.left - containerRect.left,
                        y2: rect.top - containerRect.top + rect.height / 2
                    });
                }
            });

            setLines(newLines);
        };

        updateLines();
        window.addEventListener('resize', updateLines);
        return () => window.removeEventListener('resize', updateLines);
    }, []);

    const leftApps = [
        { icon: <Linkedin size={24} color="#0077B5" />, name: "LinkedIn" },
        { icon: <Facebook size={24} color="#1877F2" />, name: "Facebook" },
        { icon: <GoogleIcon />, name: "Google" }
    ];

    const rightApps = [
        { icon: <Twitter size={24} color="#1DA1F2" />, name: "Twitter" },
        { icon: <TikTokIcon />, name: "TikTok" },
        { icon: <MessageCircle size={24} color="#25D366" />, name: "WhatsApp" }
    ];

    // SVG bezier curve generator for neat lines
    const drawLine = (x1: number, y1: number, x2: number, y2: number) => {
        const midX = (x1 + x2) / 2;
        return `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`;
    };

    return (
        <section className={styles.integrations}>
            <div className={styles.header}>
                <h2>O seu paciente não espera. Nós também não.</h2>
                <p>Integramos os seus canais de aquisição numa única máquina de marcação. Feche orçamentos diretamente pelo WhatsApp e centralize no seu sistema de gestão (CRM).</p>
            </div>

            <div className={styles.mapContainer} ref={containerRef}>
                <svg className={styles.lines}>
                    {lines.map((line, i) => (
                        <motion.path
                            key={i}
                            d={drawLine(line.x1, line.y1, line.x2, line.y2)}
                            stroke="#cbd5e1"
                            strokeWidth="2"
                            strokeDasharray="6 6"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.2 + (i * 0.1) }}
                        />
                    ))}
                </svg>

                <div className={styles.columns}>
                    <div className={styles.columnEdge}>
                        {leftApps.map((app, i) => (
                            <motion.div
                                key={i}
                                className={styles.appCard}
                                ref={el => { leftNodesRef.current[i] = el; }}
                                initial={{ opacity: 0, x: -20, y: 0 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                            >
                                {app.icon}
                            </motion.div>
                        ))}
                    </div>

                    <div className={styles.columnCenter}>
                        <motion.div
                            className={styles.centerNode}
                            ref={centerNodeRef}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                        >
                            <LogoIcon />
                        </motion.div>
                    </div>

                    <div className={styles.columnEdge}>
                        {rightApps.map((app, i) => (
                            <motion.div
                                key={i}
                                className={styles.appCard}
                                ref={el => { rightNodesRef.current[i] = el; }}
                                initial={{ opacity: 0, x: 20, y: 0 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.2 + 0.1 }}
                            >
                                {app.icon}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
