'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './DashboardPreview.module.css';

const DashboardPreview = () => {
    return (
        <section className={styles.container}>
            <div className={styles.cardsGrid}>
                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className={styles.cardHeader}>
                        <span className={styles.label}>Total User</span>
                        <div className={`${styles.iconContainer} ${styles.bgPurple}`}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                    </div>
                    <div className={styles.value}>50,789</div>
                    <div className={styles.statusUp}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                        8.5% <span>Up from yesterday</span>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className={styles.cardHeader}>
                        <span className={styles.label}>Total Order</span>
                        <div className={`${styles.iconContainer} ${styles.bgIndigo}`}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                        </div>
                    </div>
                    <div className={styles.value}>20393</div>
                    <div className={styles.statusUp}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                        1.3% <span>Up from past week</span>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className={styles.cardHeader}>
                        <span className={styles.label}>Total Sales</span>
                        <div className={`${styles.iconContainer} ${styles.bgBlue}`}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                        </div>
                    </div>
                    <div className={styles.value}>$60,000</div>
                    <div className={styles.statusDown}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg>
                        4.3% <span>Down from yesterday</span>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <div className={styles.cardHeader}>
                        <span className={styles.label}>Total Pending</span>
                        <div className={`${styles.iconContainer} ${styles.bgIndigo}`}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-8.45l5.67-1.12"></path></svg>
                        </div>
                    </div>
                    <div className={styles.value}>5040</div>
                    <div className={styles.statusUp}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                        1.8% <span>Up from yesterday</span>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className={styles.chartContainer}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                {/* Addition of internal blur and transparency like the template */}
                <div className={styles.chartInnerGlass}>
                    <div className={styles.chartHeader}>
                        <h3>Sales Details</h3>
                        <div className={styles.dropdown}>
                            October
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                    </div>

                    <div className={styles.chartBody}>
                        <div className={styles.yAxis}>
                            <span>100%</span>
                            <span>80%</span>
                            <span>60%</span>
                            <span>40%</span>
                            <span>20%</span>
                        </div>

                        <div className={styles.chartVisual}>
                            <svg width="100%" height="100%" viewBox="0 0 800 200" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="0%" stopColor="#7C5CFC" stopOpacity="0.3"></stop>
                                        <stop offset="100%" stopColor="#7C5CFC" stopOpacity="0.0"></stop>
                                    </linearGradient>
                                </defs>
                                <path d="M0 160 C 20 140, 40 140, 60 110 S 100 80, 120 110 S 160 140, 180 120 S 220 80, 240 100 S 260 120, 280 80 S 320 100, 340 70 S 380 40, 400 90 S 440 140, 460 100 S 500 50, 520 40 S 560 60, 580 40 S 620 90, 640 100 S 680 70, 700 90 S 740 110, 760 80 S 780 90, 800 60 L 800 200 L 0 200 Z" fill="url(#chartGradient)"></path>
                                <path d="M0 160 C 20 140, 40 140, 60 110 S 100 80, 120 110 S 160 140, 180 120 S 220 80, 240 100 S 260 120, 280 80 S 320 100, 340 70 S 380 40, 400 90 S 440 140, 460 100 S 500 50, 520 40 S 560 60, 580 40 S 620 90, 640 100 S 680 70, 700 90 S 740 110, 760 80 S 780 90, 800 60" fill="none" stroke="#7C5CFC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>

                            <div className={styles.tooltip} style={{ left: '15%', top: '50%' }}>
                                50,567
                            </div>
                            <div className={styles.tooltip} style={{ left: '50%', top: '20%' }}>
                                70,867
                            </div>
                        </div>
                    </div>
                    <div className={styles.xAxis}>
                        <span>5k</span>
                        <span>10k</span>
                        <span>15k</span>
                        <span>20k</span>
                        <span>25k</span>
                        <span>30k</span>
                        <span>35k</span>
                        <span>40k</span>
                        <span>45k</span>
                        <span>50k</span>
                        <span>55k</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default DashboardPreview;
