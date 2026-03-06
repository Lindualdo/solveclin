'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './HowItWorks.module.css';

const steps = [
    {
        num: "1",
        title: "Diagnóstico e Reestruturação",
        description: "Mapeamos ao detalhe os processos atuais da sua operação. Identificamos exatemente onde a sua margem de lucro diminui e ajudamos a reduzir atritos operacionais.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
        )
    },
    {
        num: "2",
        title: "Integração Otimizada",
        description: "Com a casa organizada, orquestramos a sua área digital. Retiramos os dados espalhados e passamos tudo para workflows que correm em contexto estruturado e invisível.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
            </svg>
        )
    },
    {
        num: "3",
        title: "Inteligência IA e Escala",
        description: "Implementamos IA para assumir o tempo repetitivo, de modo que consiga ganhar com processos altamente performantes os que se revertem num painel prático para análise de margem de lucro e eficiência diária.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
            </svg>
        )
    }
];

const HowItWorks = () => {
    return (
        <section className={styles.howItWorks}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>Protocolo R.O.I: Engenharia Operacional</h2>
                </motion.div>

                <div className={styles.grid}>
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.iconBox}>{step.icon}</div>
                                <div className={styles.stepNum}>{step.num}</div>
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                            <div className={styles.stepBadge}>Step {step.num}</div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className={styles.statsPanel}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>+40</span>
                        <span className={styles.statLabel}>Clínicas Otimizadas</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>150k+</span>
                        <span className={styles.statLabel}>Horas Salvas</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>4.9/5</span>
                        <span className={styles.statLabel}>Avaliação Média</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
