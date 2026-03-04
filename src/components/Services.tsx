'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Webhook, MonitorCheck, BarChart3, Layout, TrendingUp } from 'lucide-react';
import styles from './Services.module.css';

const services = [
    {
        title: 'Fim da Burocracia',
        description: 'Reduzimos processos complexos e confusos, organizando a casa para que tudo flua sem stress.',
        icon: <ClipboardList size={24} />
    },
    {
        title: 'Menos Trabalho Manual',
        description: 'Eliminamos as tarefas repetitivas. A sua equipa fica livre para se focar no que importa: o paciente.',
        icon: <MonitorCheck size={24} />
    },
    {
        title: 'Atendimento Humanizado 24/7',
        description: 'Agentes de atendimento amigáveis que conhecem a sua clínica, falam a sua cultura e agendam consultas o dia todo.',
        icon: <Webhook size={24} />
    },
    {
        title: 'Gestão Inteligente',
        description: 'Melhore a gestão da clínica com dados e dashboards muito eficientes e fáceis de visualizar.',
        icon: <BarChart3 size={24} />
    },
    {
        title: 'Estratégias de Venda',
        description: 'Páginas exclusivas de alta conversão para os seus tratamentos e serviços principais.',
        icon: <Layout size={24} />
    },
    {
        title: 'Campanhas de Marketing',
        description: 'Profissionalizamos e melhoramos os seus canais de tráfego, automações e campanhas para trazer mais pacientes.',
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
                    O Nosso Foco no Diagnóstico 360º
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    O nosso objetivo é muito simples: resolver os problemas de processos diários da sua clínica médica, odontológica ou estética.
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

