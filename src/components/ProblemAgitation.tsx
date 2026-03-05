"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./ProblemAgitation.module.css";

const problems = [
  {
    number: "01",
    title: "A Cadeira Vazia que Pagou Cara",
    description:
      "Investiu em anúncios, o paciente enviou mensagem às 21h — e a receção respondeu na manhã seguinte. Ele já tinha marcado na clínica ao lado. Cada lead ignorado custa entre €150 a €400 em receita perdida.",
  },
  {
    number: "02",
    title: "A Rececionista a Fazer Tudo Menos Receber",
    description:
      "Confirmações de consulta, lembretes de retorno, follow-ups de orçamentos, folhas de cálculo. A sua equipa passa 3 a 4 horas por dia em tarefas que nenhum sistema faz por ela — e o paciente que chega à porta espera sem atenção.",
  },
  {
    number: "03",
    title: "Fim do Mês Sem Saber o Que Aconteceu",
    description:
      "Qual tratamento teve margem real? Qual campanha trouxe pacientes que pagaram? Quantas consultas foram desmarcadas sem reagendamento? Sem esses dados, está a gerir às cegas — e a repetir erros caros todos os meses.",
  },
  {
    number: "04",
    title: "Tecnologia que Prometeu Tudo e Entregou Stress",
    description:
      "Já teve um software de gestão que ninguém usou. Uma agenda online que duplicava marcações. Um chatbot que confundia os pacientes. Mais sistemas não significa mais eficiência — significa mais problemas para a sua equipa resolver.",
  },
  {
    number: "05",
    title: "Equipa Esgotada, Alta Rotatividade",
    description:
      "As melhores recepcionistas saem porque as tarefas são repetitivas e sem fim. Contratar e treinar custa tempo e dinheiro. Uma equipa desgastada atende mal — e o paciente sente, mesmo antes de sentar na cadeira.",
  },
];

const ProblemAgitation = () => {
  return (
    <section className={styles.problemSection}>
      <div className={styles.header}>
        <motion.span
          className={styles.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          O diagnóstico honesto
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A sua clínica está a perder dinheiro todos os dias — e sabe disso.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Não é falta de pacientes. Não é falta de esforço. É falta de processos
          que funcionem enquanto a sua equipa cuida de quem importa: o paciente.
        </motion.p>
      </div>

      <div className={styles.grid}>
        {problems.map((problem, idx) => (
          <motion.div
            key={idx}
            className={styles.card}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.5,
              delay: idx * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className={styles.number}>{problem.number}</span>
            <h3>{problem.title}</h3>
            <p>{problem.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className={styles.callout}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p>
          Cada dia sem processos eficientes é dinheiro que sai pela porta. A
          questão não é <em>se</em> vai resolver — é{" "}
          <em>quanto mais vai custar</em> esperar.
        </p>
      </motion.div>
    </section>
  );
};

export default ProblemAgitation;
