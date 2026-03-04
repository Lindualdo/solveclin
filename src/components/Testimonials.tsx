'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        quote: "A Solveclin transformou a nossa recepção. Hoje não perdemos mais nenhum contato no WhatsApp.",
        author: "Dra. Ana Silva",
        role: "Clínica Sorriso",
        initials: "AS"
    },
    {
        quote: "O diagnóstico de processos foi um divisor de águas. Reduzimos custos operacionais em 30%.",
        author: "Dr. Ricardo Santos",
        role: "Estética Avançada",
        initials: "RS"
    },
    {
        quote: "As Landing Pages da Solveclin convertem muito mais do que nosso site antigo. Excelente investimento.",
        author: "Juliana Lima",
        role: "Bem Estar Spa",
        initials: "JL"
    }
];

const Testimonials = () => {
    return (
        <section className={styles.testimonials}>
            <h2 className={styles.title}>O que dizem nossos parceiros</h2>

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
