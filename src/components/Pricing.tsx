'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import styles from './Pricing.module.css';

const plans = [
    {
        name: "Diagnóstico 360º",
        price: "297€",
        period: "único",
        description: "Porta de entrada obrigatória para qualquer projeto. Descubra onde sua clínica perde dinheiro.",
        features: [
            "Auditoria de Vendas",
            "Auditoria de Gestão e Admin",
            "Mapeamento de Gaps de Lucro",
            "Desenho do Fluxo Otimizado",
            "Plano de Modernização"
        ],
        popular: false,
        buttonText: "Agendar Diagnóstico"
    },
    {
        name: "Agentes de IA",
        price: "497€",
        period: "a partir de",
        description: "Mais 297€/mês de manutenção. Resposta imediata 24/7 e agendamento sem intervenção humana.",
        features: [
            "Tudo do Diagnóstico 360º",
            "Motor de IA Chatvolt",
            "Integração Google / Cal.com",
            "Recuperação de Consultas (No-show)",
            "Suporte Dedicado"
        ],
        popular: true,
        buttonText: "Implementar Agentes"
    },
    {
        name: "Engenharia & Escala",
        price: "Customizado",
        period: "sob consulta",
        description: "Automatização completa e unificação do ecossistema de dados. Apenas para clínicas escaláveis.",
        features: [
            "Engenharia de Processos de Backoffice",
            "Sincronização de CRM Hubspot/Pipedrive",
            "Alertas de Fecho",
            "Dashboards de Gestão de ROI",
            "Consultoria Contínua"
        ],
        popular: false,
        buttonText: "Falar com Consultor"
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
                    Planos flexíveis para cada estágio
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Investimento claro, retornos previsíveis. Escolha como quer escalar sua clínica.
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
                        {plan.popular && <div className={styles.popularBadge}>Mais Escolhido</div>}

                        <div className={styles.cardHeader}>
                            <h3>{plan.name}</h3>
                            <p>{plan.description}</p>
                        </div>

                        <div className={styles.priceContainer}>
                            <span className={styles.price}>{plan.price}</span>
                            <span className={styles.period}>/ {plan.period}</span>
                        </div>

                        <button className={`${styles.button} ${plan.popular ? styles.buttonPopular : ''}`}>
                            {plan.buttonText}
                        </button>

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
