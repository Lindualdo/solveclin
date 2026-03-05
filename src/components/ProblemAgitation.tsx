'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProblemAgitation.module.css';

const problems = [
    {
        number: "01",
        title: "A Cadeira Vazia",
        description: "Gastou centenas de euros em campanhas na Meta Ads, mas o WhatsApp demorou a responder. O paciente procurou a clínica vizinha.",
    },
    {
        number: "02",
        title: "Trabalho Repetitivo",
        description: "A sua receção passa horas a enviar mensagens de confirmação e a preencher folhas de cálculo em vez de receber bem quem chega à clínica.",
    },
    {
        number: "03",
        title: "Falta de Gestão Visual",
        description: "Chega ao final do mês e não sabe exatamente qual o custo de aquisição (CAC) de cada paciente nem qual tratamento trouxe mais lucro.",
    }
];

const ProblemAgitation = () => {
    return (
        <section className={styles.problemSection}>
            <div className={styles.header}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    A Tecnologia Atual da sua Clínica está a Custar Dinheiro.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Ter mais sistemas não significa ter mais pacientes. Muito pelo contrário: a falta de integração cria o caos na sua operação diária.
                </motion.p>
            </div>

            <div className={styles.grid}>
                {problems.map((problem, idx) => (
                    <motion.div
                        key={idx}
                        className={`${styles.card} glass`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                        <span className={styles.number}>{problem.number}</span>
                        <h3>{problem.title}</h3>
                        <p>{problem.description}</p>
                    </motion.div>
                ))}
            </div>

        </section>
    );
};

export default ProblemAgitation;
