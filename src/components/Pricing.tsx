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
        description: "A porta de entrada. Um raio-x para descobrirmos onde investir o seu tempo e tirar a sua equipa do caos.",
        features: [
            "Mapeamento de Processos Atuais",
            "Identificação de Burocracias",
            "Plano para Eliminar Trabalho Manual",
            "Desenho da Máquina de Vendas",
            "Custo dedutível num plano avançado"
        ],
        popular: false,
        buttonText: "Agendar o Diagnóstico 360º"
    },
    {
        name: "Agente de Atendimento",
        price: "497€",
        period: "setup inicial",
        description: "O Agente humanizado que não dorme, não tira férias e marca as suas consultas no WhatsApp.",
        features: [
            "Atendimento 24/7 com a Sua Cultura",
            "Agendamento de Consultas Simplificado",
            "Recuperação de Contatos Automática",
            "Fim das Consultas Esquecidas",
            "Manutenção Mensal: 297€"
        ],
        popular: true,
        buttonText: "Quero Este Agente a Trabalhar Por Mim"
    },
    {
        name: "Solução Completa",
        price: "Pacote",
        period: "sob consulta",
        description: "Para clínicas que querem delegar toda a automação, dashboards de gestão e campanhas de marketing.",
        features: [
            "Todos os Processos Manuais Eliminados",
            "Dashboards e Dados de Gestão",
            "Estratégias de Marketing e Vendas",
            "Páginas de Alta Conversão Incluídas",
            "Integração Total (Burocracia Zero)"
        ],
        popular: false,
        buttonText: "Falar Sobre a Solução Completa"
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
                    Planos claros e sem burocracia
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Invista apenas na resolução dos problemas reais da sua clínica. Nós trazemos clareza ao seu negócio.
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
