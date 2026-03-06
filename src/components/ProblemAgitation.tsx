"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./ProblemAgitation.module.css";

import {
  Calendar,
  BarChart2,
  AlertCircle,
  Users,
  Cpu,
  TrendingDown,
} from "lucide-react";

const problems = [
  {
    number: "01",
    icon: Calendar,
    title: "O Custo Oculto da Espera",
    description:
      "O seu paciente confia em si, mas enviou uma mensagem às 21h. A sua receção respondeu na manhã seguinte, quando ele já tinha marcação na concorrência. A lentidão burocrática custa centenas de euros por dia.",
  },
  {
    number: "02",
    icon: Users,
    title: "Uma Excelente Equipa Focada no Sítio Errado",
    description:
      "Confirmações, reagendamentos, e folhas de Excel intermináveis. A sua equipa passa 4 horas por dia em processos administrativos invisíveis — enquanto o paciente que está na sala de espera aguarda por atenção plena.",
  },
  {
    number: "03",
    icon: BarChart2,
    title: "Gestão Desligada da Operação Real",
    description:
      "A clínica fatura bem, mas qual é a margem de lucro real de cada tratamento? Onde estão a falhar os fechos de orçamentos? Gerir sem um dashboard clínico integrado é apostar às cegas todos os meses.",
  },
  {
    number: "04",
    icon: Cpu,
    title: "Tecnologia que Adicionou Complexidade",
    description:
      "Ferramentas isoladas que não conversam entre si. Um software de gestão engessado; um chatbot genérico que frustra pacientes. Adicionar mais sistemas sem um processo claro apenas aumenta o caos digital.",
  },
  {
    number: "05",
    icon: AlertCircle,
    title: "Desgaste Silencioso do Talento",
    description:
      "A rotatividade do seu staff não acontece por falta de vontade. Acontece quando profissionais sentem que o seu dia se resume a copiar e colar dados entre sistemas, sem tempo para o acolhimento humano.",
  },
  {
    number: "06",
    icon: TrendingDown,
    title: "Faturação Alta, Lucro Comprimido",
    description:
      "O volume de consultas aumentou, mas a complexidade operacional também. A margem de lucro é consumida por faltas (no-shows) não geridas de imediato e por custos com processos que já deveriam estar automatizados.",
  },
];

const ProblemAgitation = () => {
  return (
    <section className={styles.problemSection}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <motion.span
            className={styles.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            O diagnóstico prático
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A sua equipa é excelente, mas o volume de processos manuais trava a sua expansão.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Não é falta de pacientes e muito menos de profissionais dedicados.
            É a burocracia diária, que suga a atenção que deveria ser exclusiva dos seus pacientes.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {problems.map((problem, idx) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={idx}
                className={styles.card}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className={styles.number} aria-hidden="true">
                  {problem.number}
                </span>
                <div className={styles.iconWrapper}>
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3>{problem.title}</h3>
                <p>{problem.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className={styles.callout}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>
            O lucro não se perde no marketing; a margem escorre pelos atritos operacionais diários.
            Nós arquitetamos a eficiência sistémica que estanca essa perda de imediato.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemAgitation;
