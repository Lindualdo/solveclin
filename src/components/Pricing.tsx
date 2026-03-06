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
        description: "A porta de entrada. Um diagnóstico prático para medir furos na sua operação e desenhar o fluxo de ganho eficiente.",
        features: [
            "Mapeamento de Processos Ativos",
            "Identificação de Atritos Burocráticos",
            "Relatório de Lucro Oculto",
            "Plano de Ação para Automação",
            "Custo dedutível em planos avançados"
        ],
        popular: false,
        buttonText: "Agendar o Diagnóstico 360º"
    },
    {
        name: "Agente de Atendimento IA",
        price: "497€",
        period: "setup inicial",
        description: "Recuperação imediata de faturação. O seu agente qualifica e agenda com empatia humana, garantindo 24/7.",
        features: [
            "Atendimento 24/7 com a Sua Identidade",
            "Agendamento de Consultas Simplificado",
            "Qualificação Automática de Leads",
            "Follow-ups e Lembretes",
            "Manutenção Mensal: 297€"
        ],
        popular: true,
        buttonText: "Quero Este Agente a Trabalhar Por Mim"
    },
    {
        name: "Engenharia Operacional",
        price: "Projeto",
        period: "sob orçamento",
        description: "Para clínicas que procuram domínio de mercado com automação de backoffice e previsibilidade total ponta a ponta.",
        features: [
            "Dashboards em Tempo Real",
            "Fim de Todos os Trabalhos Manuais",
            "Campanhas de Marketing Orientadas a LTV",
            "Landing Pages de Alta Conversão",
            "Plano Executivo com KPI's de Escala"
        ],
        popular: false,
        buttonText: "Falar Sobre a Engenharia Operacional"
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
