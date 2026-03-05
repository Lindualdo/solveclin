'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <motion.div
                className={styles.badge}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div>Soluções para clínicas odontológicas, médicas e bem-estar</div>
            </motion.div>

            <motion.h1
                className={styles.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
                Reduza até 30% do custo operacional e aumente 40% nas vendas.
            </motion.h1>

            <motion.p
                className={styles.subtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
                Tecnologia e automação sem um processo eficiente é jogar dinheiro fora. Primeiro otimizamos a sua operação, depois automatizamos com eficiência.
            </motion.p>

            <motion.div
                className={styles.actions}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
                <button className={styles.primaryBtn}>
                    Agendar Meu Diagnóstico 360º
                    <ArrowRight size={18} />
                </button>
                <button className={styles.secondaryBtn}>
                    <Play size={18} fill="currentColor" />
                    Como Resolvemos o Seu Problema
                </button>
            </motion.div>
        </section>
    );
};

export default Hero;
