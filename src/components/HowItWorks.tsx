'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './HowItWorks.module.css';

const steps = [
    {
        num: "1",
        title: "Primeiro, Organizamos o Processo",
        desc: "Mergulhamos na operação da sua clínica para diagnosticar onde se perde tempo e dinheiro. Desenhamos fluxos otimizados para eliminar o trabalho manual e a burocracia."
    },
    {
        num: "2",
        title: "Depois, Automatizamos",
        desc: "Com a casa arrumada, implementamos automações e Agentes para fazerem o trabalho repetitivo por si. Integramos sistemas no background sem perturbar a sua equipa."
    },
    {
        num: "3",
        title: "Por Fim, Escalamos",
        desc: "Com processos eficientes e tarefas diárias a rodarem no automático, aplicamos estratégias de marketing para atrair mais pacientes e escalar o seu faturamento de forma previsível."
    }
];

const HowItWorks = () => {
    return (
        <section className={styles.howItWorks}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <motion.div
                        className={styles.header}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2>Menos Fricção, Zero Burocracia. O Processo Exato.</h2>
                        <p>O nosso foco é garantir que não paralisa a clínica enquanto a modernizamos.</p>
                    </motion.div>

                    <div className={styles.stepsList}>
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.stepItem}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <div className={styles.stepNum}>{step.num}</div>
                                <div className={styles.stepText}>
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
