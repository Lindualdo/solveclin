'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

const faqs = [
    {
        question: "O que inclui o Diagnóstico 360º?",
        answer: "É uma auditoria completa dos seus processos de Vendas e Gestão. Mapeamos onde a clínica drena lucro e apresentamos um plano de modernização com foco em eficiência e redução de custos."
    },
    {
        question: "Como funcionam os Agentes de Atendimento IA?",
        answer: "Nossos Agentes atuam 24/7 via WhatsApp, respondendo mensagens instantaneamente, qualificando leads e agendando consultas diretamente na sua agenda (Google/Cal.com) sem intervenção humana."
    },
    {
        question: "Tenho que mudar o software de gestão da clínica?",
        answer: "Não. A nossa engenharia de processos atua integrando as soluções da SolveClin (como Chatvolt e CRMs) aos ecossistemas já existentes na sua clínica, automatizando tarefas repetitivas."
    },
    {
        question: "Qual é o investimento médio?",
        answer: "Todo projeto começa pelo Diagnóstico 360º (297€). A partir dele, implementamos os Agentes de IA e as automatizações (de 497€ a 1.470€ + manutenção) sob medida para a sua necessidade."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="faq" className={styles.faq}>
            <div className={styles.faqWrapper}>
                <h2 className={styles.title}>Perguntas Frequentes</h2>

                <div className={styles.list}>
                    {faqs.map((faq, i) => (
                        <div key={i} className={`${styles.item} ${activeIndex === i ? styles.active : ''} glass`}>
                            <button
                                className={styles.question}
                                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                            >
                                {faq.question}
                                <ChevronDown className={styles.icon} size={20} />
                            </button>

                            <AnimatePresence>
                                {activeIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className={styles.answer}>
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
