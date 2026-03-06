'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                    width={234}
                    height={73}
                    className={styles.logoImg}
                    priority
                />
            </div>

            <div className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
                <Link href="#features" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Serviços</Link>
                <Link href="#pricing" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Investimento</Link>
                <Link href="#faq" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
                <Link href="#contact" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Contato</Link>
            </div>

            <button className={styles.mobileToggle} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
                {mobileMenuOpen ? <X size={24} color="#000" /> : <Menu size={24} color="#000" />}
            </button>
        </motion.nav>
    );
};

export default Navbar;
