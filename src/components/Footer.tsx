import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.brand}>
                    <h3>SolveClin</h3>
                    <p>
                        Engenharia de processos e automação inteligente. Ajudamos clínicas em Lisboa e Portugal inteiro a eliminar custos invisíveis e escalar receita.
                    </p>
                    <p style={{ marginTop: '16px', fontSize: '0.875rem', opacity: 0.8 }}>
                        Especialistas com +20 anos em TI Corporativa.
                    </p>
                </div>

                <div className={styles.links}>
                    <div className={styles.linkGroup}>
                        <h4>Serviços</h4>
                        <ul>
                            <li><Link href="#features">Diagnóstico 360º</Link></li>
                            <li><Link href="#features">Agentes de IA</Link></li>
                            <li><Link href="#features">Engenharia de Processos</Link></li>
                        </ul>
                    </div>
                    <div className={styles.linkGroup}>
                        <h4>SolveClin</h4>
                        <ul>
                            <li><Link href="#pricing">Investimento</Link></li>
                            <li><Link href="#faq">Perguntas Frequentes</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>&copy; 2026 SolveClin. Lisboa, Portugal. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
