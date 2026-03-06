'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Webhook, MonitorCheck, BarChart3, Layout, TrendingUp } from 'lucide-react';
import styles from './Services.module.css';

const services = [
    {
        title: 'Foco no Atendimento Humano',
        description: 'Libertamos a sua equipa das tarefas mecânicas. Menos ecrãs para olhar e mais pacientes para acolher com atenção total.',
        icon: <ClipboardList size={24} />
    },
    {
        title: 'Automação Silenciosa',
        description: 'Os processos repetitivos correm de forma invísivel e contínua num background, acabando com a carga da burocracia digital.',
        icon: <MonitorCheck size={24} />
    },
    {
        title: 'Receção IA 24/7',
        description: 'Agentes inteligentes que entendem o tom da clínica, fazem a triagem clínica diária de forma cordial e eficiente.',
        icon: <Webhook size={24} />
    },
    {
        title: 'Gestão Baseada em Dados Realistas',
        description: 'Fim do achismo. Obtenha a margem real dos tratamentos em tempo real usando dashboards altamente dinâmicos.',
        icon: <BarChart3 size={24} />
    },
    {
        title: 'Conversão Eficiente',
        description: 'Apoiamos campanhas com landing pages focadas na jornada dos pacientes, gerando oportunidades seguras de venda.',
        icon: <Layout size={24} />
    },
    {
        title: 'Tração Estratégica',
        description: 'Os seus canais convertem de forma inteligente porque otimizamos tudo antes mesmo do tráfego começar a crescer.',
        icon: <TrendingUp size={24} />
    }
];

const Services = () => {
    return (
        <section id="features" className={styles.services}>
            <div className={styles.header}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    A Arquitetura da Eficiência
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Reduzimos o ruído para que a verdadeira rentabilidade apareça. Desenhamos a estrutura em que pacientes, dados e equipas funcionem em perfeita harmonia.
                </motion.p>
            </div>

            <div className={styles.grid}>
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className={`${styles.card} glass`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className={styles.iconWrapper}>
                            {service.icon}
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;

