"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { ArrowRight, Play, Star } from "lucide-react";

const Hero = () => {
  return (
    <div className={styles.heroSection}>
      {/* Background image layer */}
      <div className={styles.heroBg} aria-hidden="true" />

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
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Reduza até 30% do{" "}
          <br className={styles.desktopOnly} />
          custo operacional e{" "}
          <br className={styles.desktopOnly} />
          <em>aumente 40% nas vendas.</em>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Tecnologia e automação sem um processo eficiente é jogar dinheiro fora.
          Primeiro otimizamos a sua operação, depois automatizamos com eficiência.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.primaryGroup}>
            <button
              className={styles.primaryBtn}
              aria-label="Agendar Diagnóstico 360º"
            >
              Agendar Meu Diagnóstico 360º
              <ArrowRight size={18} />
            </button>
            <span className={styles.microcopy}>
              Sem compromisso · Resposta em 24h
            </span>
          </div>
          <button
            className={styles.secondaryBtn}
            aria-label="Ver como resolvemos o seu problema"
          >
            <Play size={18} fill="currentColor" />
            Como Resolvemos o Seu Problema
          </button>
        </motion.div>

        <motion.div
          className={styles.socialProof}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.stars} aria-label="Avaliação 5 estrelas">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
          </div>
          <span>Mais de 40 clínicas já otimizaram a sua operação</span>
        </motion.div>
        <motion.div
          className={styles.mockupContainer}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.mockup}>
            <div className={styles.mockupHeader}>
              <div className={styles.dots}>
                <span />
                <span />
                <span />
              </div>
              <div className={styles.mockupContentTitle}>
                Dashboard de Performance
              </div>
            </div>
            <div className={styles.mockupBody}>
              <div className={styles.mockupCard}>
                <span className={styles.mockupLabel}>Custo Operacional</span>
                <span className={styles.mockupValue}>-30%</span>
                <span className={styles.mockupTrendPositive}>
                  ↓ Redução Ativa
                </span>
              </div>
              <div className={`${styles.mockupCard} ${styles.highlightCard}`}>
                <span className={styles.mockupLabel}>Novas Vendas</span>
                <span className={styles.mockupValue}>+40%</span>
                <span className={styles.mockupTrend}>↑ Aumento Mês a Mês</span>
              </div>
              <div className={styles.mockupCard}>
                <span className={styles.mockupLabel}>Horas Salvas</span>
                <span className={styles.mockupValue}>120h</span>
                <span className={styles.mockupTrend}>Nesta semana</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
