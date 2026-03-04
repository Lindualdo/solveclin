import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.brand}>
                    <h3>Solveclin</h3>
                    <p>
                        Capacitando clínicas através de tecnologia inteligente e processos otimizados.
                        Sua parceira na jornada de transformação digital.
                    </p>
                </div>

                <div className={styles.links}>
                    <div className={styles.linkGroup}>
                        <h4>Empresa</h4>
                        <ul>
                            <li><Link href="#features">Sobre nós</Link></li>
                            <li><Link href="#solutions">Soluções</Link></li>
                            <li><Link href="#contact">Carreiras</Link></li>
                        </ul>
                    </div>
                    <div className={styles.linkGroup}>
                        <h4>Legal</h4>
                        <ul>
                            <li><Link href="/privacy">Privacidade</Link></li>
                            <li><Link href="/terms">Termos</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>&copy; 2026 Solveclin. Todos os direitos reservados.</p>
                <p>Feito com ❤️ por Antigravity</p>
            </div>
        </footer>
    );
};

export default Footer;
