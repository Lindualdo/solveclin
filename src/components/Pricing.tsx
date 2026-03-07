'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import styles from './Pricing.module.css';

const plans = [
    {
        name: "Diagnóstico Estratégico 360º",
        price: "397€",
        period: "único",
        description: "A porta de entrada obrigatória para a reestruturação da sua operação. Identificamos os furos reais e a origem da perda de lucro.",
        features: [
            "Auditoria de Furos Operacionais",
            "Mapeamento de Integrações de Sistemas",
            "Relatório Analítico de Lucro Oculto",
            "Plano Executivo para Eliminar Entraves",
            "Valor dedutível em Projetos de Escala"
        ],
        popular: false,
        buttonText: "Agendar o Diagnóstico 360º"
    },
    {
        name: "Otimização de Atendimento",
        price: "497€",
        period: "setup + 297€/mês",
        description: "Recuperação imediata de faturação. O seu Agente de IA qualifica, atende e agenda pacientes 24/7 com empatia máxima.",
        features: [
            "Diagnóstico de Conversão (Incluso)",
            "Agente IA de Alta Performance",
            "Automação e Agendamento Direto",
            "Follow-ups e Recuperação de Leads",
            "Resposta Imediata pelo WhatsApp"
        ],
        popular: true,
        buttonText: "Quero Otimizar o Atendimento"
    },
    {
        name: "Engenharia de Performance",
        price: "Projeto",
        period: "sob orçamento",
        description: "Para clínicas líderes que pretendem uma experiência unificada e sem quebras, da captação de leads à retenção do doente.",
        features: [
            "Ecossistema de Dashboards Analíticos",
            "Integração Total de Sistemas e Backoffice",
            "Campanhas de Escala focadas em LTV",
            "Landing Pages de Elevada Conversão",
            "Previsibilidade Absoluta de Crescimento"
        ],
        popular: false,
        buttonText: "Falar Sobre Engenharia de Escala"
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className={styles.pricing}>
            <div className={styles.header}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Clareza em todos os investimentos
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Sem custos ocultos ou planos desnecessários. Resolva os problemas da sua clínica num formato justo de eficiência.
                </motion.p>
            </div>

            <div className={styles.grid}>
                {plans.map((plan, i) => (
                    <motion.div
                        key={i}
                        className={`${styles.card} ${plan.popular ? styles.popular : ''}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                        <div className={styles.cardHeader}>
                            <h3>{plan.name}</h3>
                            {plan.popular && (
                                <div className={styles.popularBadge}>
                                    <span style={{ fontSize: '14px' }}>🔥</span> Popular
                                </div>
                            )}
                        </div>
                        <p className={styles.cardDesc}>{plan.description}</p>

                        <div className={styles.priceContainer}>
                            <span className={styles.price}>{plan.price}</span>
                            <span className={styles.period}>/ {plan.period}</span>
                        </div>

                        <button className={styles.button}>
                            {plan.buttonText}
                        </button>

                        <div className={styles.featuresLabel}>Inclui:</div>
                        <div className={styles.features}>
                            {plan.features.map((feature, j) => (
                                <div key={j} className={styles.feature}>
                                    <Check size={20} className={styles.checkIcon} />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
