'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
            initial={{ y: -100, x: '-50%', opacity: 0 }}
            animate={{ y: 0, x: '-50%', opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className={styles.logo}>
                <Image
                    src="/images/solveclin-retangular.png"
                    alt="SolveClin"
                    width={180}
                    height={56}
                    className={styles.logoImg}
                    priority
                />
            </div>

            <div className={styles.navLinks}>
                <Link href="#features" className={styles.navLink}>Serviços</Link>
                <Link href="#pricing" className={styles.navLink}>Investimento</Link>
                <Link href="#faq" className={styles.navLink}>FAQ</Link>
                <Link href="#contact" className={styles.navLink}>Contato</Link>
            </div>

            <button className={styles.cta}>
                Agendar Diagnóstico
            </button>
        </motion.nav>
    );
};

export default Navbar;
