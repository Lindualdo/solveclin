'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        quote: "Recuperámos mais de 3.500€ em orçamentos perdidos só no primeiro mês. O Agente de IA marca consultas de madrugada sem falhar.",
        author: "Dra. Ana Silva",
        role: "Diretora Clínica, Lisboa",
        initials: "AS"
    },
    {
        quote: "A SolveClin não nos vendeu software, desenhou um processo completo. Hoje a minha receção foca no paciente presencial, não no telemóvel.",
        author: "Dr. Ricardo Santos",
        role: "Clínica de Estética",
        initials: "RS"
    },
    {
        quote: "A clareza do Diagnóstico 360º assustou-nos de forma positiva. Percebemos que as campanhas geravam leads, mas o funil perdia 60% deles.",
        author: "Juliana Lima",
        role: "Gestora, Bem Estar",
        initials: "JL"
    }
];

const Testimonials = () => {
    return (
        <section className={styles.testimonials}>
            <h2 className={styles.title}>Resultados que superam expetativas</h2>

            <div className={styles.carousel}>
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        className={`${styles.card} glass`}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                    >
                        <p className={styles.quote}>"{t.quote}"</p>
                        <div className={styles.author}>
                            <div className={styles.avatar}>{t.initials}</div>
                            <div className={styles.info}>
                                <h4>{t.author}</h4>
                                <span>{t.role}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
