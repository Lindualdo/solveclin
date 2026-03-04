'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Webhook, MonitorCheck, Database, Layout, TrendingUp } from 'lucide-react';
import styles from './Services.module.css';

const services = [
    {
        title: 'Diagnóstico 360º',
        description: 'Auditoria completa de processos (Vendas, Gestão) para identificar e estancar vazamentos de lucro na clínica.',
        icon: <Activity size={24} />
    },
    {
        title: 'Agentes de IA (Atendimento)',
        description: 'Resposta imediata 24/7 via WhatsApp. Eliminamos o desperdício de leads com agendamento direto.',
        icon: <Webhook size={24} />
    },
    {
        title: 'Engenharia de Processos',
        description: 'Automação de tarefas repetitivas de backoffice, liberando sua equipe humana para cuidar do paciente.',
        icon: <MonitorCheck size={24} />
    },
    {
        title: 'Ecossistema CRM',
        description: 'Implementação de CRM sincronizado aos canais de entrada, com dashboards de gestão em tempo real.',
        icon: <Database size={24} />
    },
    {
        title: 'Presença Web Elite',
        description: 'Desenvolvimento de Landing Pages de alta conversão para construir autoridade técnica.',
        icon: <Layout size={24} />
    },
    {
        title: 'Máquina de Aquisição',
        description: 'Gestão de tráfego focado em procedimentos de alto ticket e qualificação antecipada de pacientes.',
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
                    Não vendemos apenas tecnologia.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Vendemos a redução de custos, o fim da cadeira vazia e controle total da sua operação.
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
