'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Heart } from 'lucide-react';
import styles from './Integrations.module.css';

/* ─── Pure SVG icon paths (reliable inside <svg>) ─────────── */
const PathLinkedIn = () => (
    <>
        <rect x="0" y="0" width="20" height="20" rx="4" fill="#0077B5" />
        <path d="M4.5 8h2.2v7H4.5V8zm1.1-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM8.5 8h2.1v.96h.03C10.95 8.38 11.9 8 13.1 8c2.3 0 2.9 1.52 2.9 3.49V15h-2.2v-3.1c0-.74-.01-1.69-1.03-1.69-1.04 0-1.2.81-1.2 1.64V15H8.5V8z" fill="white" />
    </>
);
const PathFacebook = () => (
    <>
        <rect x="0" y="0" width="20" height="20" rx="4" fill="#1877F2" />
        <path d="M13.3 11l.4-2.6h-2.5V6.75c0-.71.35-1.4 1.47-1.4H14V3.18S12.95 3 11.95 3C9.9 3 8.6 4.2 8.6 6.44V8.4H6.2V11h2.4v6.5h2.8V11h2.1z" fill="white" />
    </>
);
const PathGoogle = () => (
    <>
        <rect x="0" y="0" width="20" height="20" rx="4" fill="white" stroke="#e5e7eb" strokeWidth="0.8" />
        <path d="M18.64 10.2c0-.64-.06-1.26-.17-1.86H10v3.51h4.87a4.16 4.16 0 0 1-1.81 2.73v2.27h2.93c1.71-1.57 2.7-3.9 2.7-6.64z" fill="#4285F4" />
        <path d="M10 19c2.44 0 4.49-.81 5.98-2.19l-2.93-2.27c-.81.54-1.84.87-3.05.87-2.35 0-4.34-1.59-5.05-3.73H1.94v2.34A9 9 0 0 0 10 19z" fill="#34A853" />
        <path d="M4.95 11.68A5.42 5.42 0 0 1 4.67 10c0-.58.1-1.15.28-1.68V5.98H1.94A9 9 0 0 0 1 10c0 1.45.35 2.82.94 4.02l3.01-2.34z" fill="#FBBC05" />
        <path d="M10 4.58c1.33 0 2.52.46 3.46 1.35l2.59-2.59A9 9 0 0 0 10 1 9 9 0 0 0 1.94 5.98l3.01 2.34C5.66 6.18 7.65 4.58 10 4.58z" fill="#EA4335" />
    </>
);
const PathWhatsApp = () => (
    <>
        <rect x="0" y="0" width="20" height="20" rx="4" fill="#25D366" />
        <path d="M10 1.5A8.46 8.46 0 0 0 1.54 9.94c0 1.5.39 2.95 1.13 4.23L1.5 18.5l4.45-1.16A8.46 8.46 0 1 0 10 1.5zm4.97 11.97c-.21.58-1.2 1.1-1.65 1.17-.43.07-.97.1-1.56-.1-.36-.12-.82-.28-1.41-.55-2.48-1.07-4.1-3.57-4.22-3.73-.12-.16-.97-1.29-.97-2.46 0-1.17.61-1.74.83-1.98a.88.88 0 0 1 .63-.29c.16 0 .31 0 .45.01.14.01.34-.05.52.4.2.47.67 1.64.73 1.76.06.12.1.26.02.42-.24.48-.5.7-.68.94-.1.13-.2.27-.09.53.48 1.04 1.3 1.84 2.32 2.32.27.13.42.11.58-.07.16-.18.68-.79.86-1.06.18-.27.35-.22.6-.13.24.09 1.56.74 1.83.87.27.13.45.2.52.31.07.12.07.69-.14 1.27z" fill="white" />
    </>
);
// Instagram gradient icon
const PathInstagram = () => (
    <>
        <defs>
            <radialGradient id="igGrad" cx="30%" cy="107%" r="130%">
                <stop offset="0%" stopColor="#ffd600" />
                <stop offset="20%" stopColor="#ff7a00" />
                <stop offset="50%" stopColor="#ff0069" />
                <stop offset="80%" stopColor="#d300c5" />
                <stop offset="100%" stopColor="#7638fa" />
            </radialGradient>
        </defs>
        <rect x="0" y="0" width="20" height="20" rx="5" fill="url(#igGrad)" />
        <rect x="4" y="4" width="12" height="12" rx="3.5" fill="none" stroke="white" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="3.2" fill="none" stroke="white" strokeWidth="1.5" />
        <circle cx="14.2" cy="5.8" r="1" fill="white" />
    </>
);

/* ─── SVG icon wrapper — nested <svg> for reliable positioning ─ */
const SvgIcon = ({ x, y, size = 20, children }: { x: number; y: number; size?: number; children: React.ReactNode }) => (
    <svg x={x - size / 2} y={y - size / 2} width={size} height={size} viewBox="0 0 20 20" overflow="visible">
        {children}
    </svg>
);

/* ─── Path definitions ──────────────────────────────────────── */
const PATHS = {
    l0: 'M 148 74  C 260 74,  310 170, 358 170',
    l1: 'M 148 170 C 250 170, 300 170, 358 170',
    l2: 'M 148 266 C 260 266, 310 170, 358 170',
    r0: 'M 442 170 C 490 170, 520 74,  640 74',
    r1: 'M 442 170 C 540 170, 540 170, 640 170',
    r2: 'M 442 170 C 490 170, 520 266, 640 266',
};

/* ─── Animated particle ─────────────────────────────────────── */
const Particle = ({ pathId, delay, color = '#10b981' }: { pathId: string; delay: number; color?: string }) => (
    <circle r={4} fill={color} filter="url(#fglow)" opacity={0}>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="2.5s" begin={`${delay}s`} repeatCount="indefinite" />
        <animateMotion dur="2.5s" begin={`${delay}s`} repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1">
            <mpath href={`#${pathId}`} />
        </animateMotion>
    </circle>
);

/* ─── Automation Flow Diagram ───────────────────────────────── */
const AutomationFlowSVG = () => (
    <svg viewBox="0 0 800 340" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={styles.flowSvg}>
        <defs>
            <filter id="fglow" x="-200%" y="-200%" width="500%" height="500%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <linearGradient id="lgL" gradientUnits="userSpaceOnUse" x1="80" y1="150" x2="400" y2="150">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.55" />
            </linearGradient>
            <linearGradient id="lgR" gradientUnits="userSpaceOnUse" x1="400" y1="150" x2="720" y2="150">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
            </linearGradient>
            {/* clipPath for the logo image inside the center circle */}
            <clipPath id="centerClip">
                <circle cx="400" cy="150" r="54" />
            </clipPath>
            {/* Named paths for animateMotion */}
            {Object.entries(PATHS).map(([id, d]) => <path key={id} id={id} d={d} />)}
        </defs>

        {/* ── LEFT CONNECTOR LINES ─── */}
        {[
            { d: PATHS.l0, delay: 0.2 },
            { d: PATHS.l1, delay: 0.35 },
            { d: PATHS.l2, delay: 0.5 },
        ].map(({ d, delay }, i) => (
            <motion.path key={`lp${i}`} d={d} stroke="url(#lgL)" strokeWidth={1.5} strokeDasharray="5 5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay, ease: 'easeOut' }}
            />
        ))}
        {/* ── RIGHT CONNECTOR LINES ─── */}
        {[
            { d: PATHS.r0, delay: 0.65 },
            { d: PATHS.r1, delay: 0.8 },
            { d: PATHS.r2, delay: 0.95 },
        ].map(({ d, delay }, i) => (
            <motion.path key={`rp${i}`} d={d} stroke="url(#lgR)" strokeWidth={1.5} strokeDasharray="5 5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay, ease: 'easeOut' }}
            />
        ))}

        {/* ── PARTICLES ─── */}
        <Particle pathId="l0" delay={1.5} />
        <Particle pathId="l1" delay={1.8} />
        <Particle pathId="l2" delay={2.1} />
        <Particle pathId="r0" delay={2.4} color="#34d399" />
        <Particle pathId="r1" delay={2.7} color="#34d399" />
        <Particle pathId="r2" delay={3.0} color="#34d399" />

        {/* ════ LEFT NODES (sources — 3: LinkedIn, Facebook, Google) ════ */}
        {/* Card backdrops */}
        {[74, 150, 226].map((cy, i) => (
            <motion.g key={`lbg${i}`}
                initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 + i * 0.08 }}>
                <rect x="52" y={cy - 28} width="96" height="56" rx="14" fill="white" fillOpacity={0.94} />
                <rect x="52" y={cy - 28} width="96" height="56" rx="14" fill="none" stroke="rgba(16,185,129,0.15)" strokeWidth="1" />
            </motion.g>
        ))}
        {/* LinkedIn */}
        <motion.g initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <SvgIcon x={82} y={62}><PathLinkedIn /></SvgIcon>
            <text x="110" y="82" fontSize="10" fill="#374151" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'system-ui' }}>LinkedIn</text>
        </motion.g>
        {/* Facebook */}
        <motion.g initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.18 }}>
            <SvgIcon x={82} y={138}><PathFacebook /></SvgIcon>
            <text x="110" y="158" fontSize="10" fill="#374151" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'system-ui' }}>Facebook</text>
        </motion.g>
        {/* Google */}
        <motion.g initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.26 }}>
            <SvgIcon x={82} y={214}><PathGoogle /></SvgIcon>
            <text x="110" y="234" fontSize="10" fill="#374151" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'system-ui' }}>Google Ads</text>
        </motion.g>

        {/* ════ CENTER NODE (SolveClin logo) ════ */}
        <motion.g
            initial={{ scale: 0.4, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 180, damping: 16, delay: 0.55 }}
            style={{ transformOrigin: '400px 150px' }}
        >
            {/* Outer pulse ring */}
            <circle cx="400" cy="150" r="68" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.18">
                <animate attributeName="r" values="68;78;68" dur="3.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.18;0;0.18" dur="3.2s" repeatCount="indefinite" />
            </circle>
            {/* White card background for contrast with dark green logo strokes */}
            <circle cx="400" cy="150" r="58" fill="white" stroke="rgba(16,185,129,0.35)" strokeWidth="2" />
            {/* Transparent PNG logo — dark green strokes show on white bg */}
            <image
                href="/images/solveclin-logo-branco-sem-fundo.png"
                x="322"
                y="88"
                width="156"
                height="124"
                preserveAspectRatio="xMidYMid meet"
                clipPath="url(#centerClip)"
            />
            {/* Border ring on top */}
            <circle cx="400" cy="150" r="58" fill="none" stroke="rgba(16,185,129,0.35)" strokeWidth="2" />
        </motion.g>

        {/* ════ RIGHT NODES (outputs — WhatsApp + Instagram + CRM) ════ */}
        {[74, 170, 266].map((cy, i) => (
            <motion.g key={`rbg${i}`}
                initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.65 + i * 0.08 }}>
                <rect x="640" y={cy - 28} width="108" height="56" rx="14"
                    fill={i === 2 ? '#0b2419' : 'white'} fillOpacity={0.95} />
                <rect x="640" y={cy - 28} width="108" height="56" rx="14" fill="none"
                    stroke={i === 2 ? 'rgba(16,185,129,0.4)' : 'rgba(16,185,129,0.2)'}
                    strokeWidth={i === 2 ? 1.5 : 1} />
            </motion.g>
        ))}
        {/* WhatsApp */}
        <motion.g initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7 }}>
            <SvgIcon x={670} y={62}><PathWhatsApp /></SvgIcon>
            <text x="708" y="82" fontSize="10" fill="#374151" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'system-ui' }}>WhatsApp</text>
        </motion.g>
        {/* Instagram */}
        <motion.g initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.8 }}>
            <SvgIcon x={670} y={158}><PathInstagram /></SvgIcon>
            <text x="708" y="178" fontSize="10" fill="#374151" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'system-ui' }}>Instagram</text>
        </motion.g>
        {/* CRM / Agenda */}
        <motion.g initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.9 }}>
            <text x="694" y="258" fontSize="9.5" fill="rgba(52,211,153,0.9)" fontWeight="700" textAnchor="middle" letterSpacing="0.06em" style={{ fontFamily: 'system-ui' }}>AGENDA</text>
            <text x="694" y="272" fontSize="9.5" fill="rgba(255,255,255,0.5)" fontWeight="500" textAnchor="middle" style={{ fontFamily: 'system-ui' }}>+ CRM</text>
        </motion.g>

        {/* ── Column labels ── */}
        <text x="100" y="22" fontSize="9.5" fill="rgba(107,114,128,0.7)" textAnchor="middle" letterSpacing="0.1em" fontWeight="600" style={{ fontFamily: 'system-ui' }}>LEADS</text>
        <text x="694" y="22" fontSize="9.5" fill="rgba(16,185,129,0.75)" textAnchor="middle" letterSpacing="0.1em" fontWeight="600" style={{ fontFamily: 'system-ui' }}>VENDAS</text>
    </svg>
);

/* ─── Benefit cards ─────────────────────────────────────────── */
const benefits = [
    {
        Icon: Zap,
        title: 'Operação Invisível',
        desc: 'Qualificação, respostas e follow-ups acontecem automaticamente, 24 h por dia, sem intervenção humana.',
    },
    {
        Icon: Clock,
        title: 'Liberdade Operacional',
        desc: 'A sua equipa foca no que importa — atender e vender. O volume operacional fica com a tecnologia.',
    },
    {
        Icon: Heart,
        title: 'Atendimento que Encanta',
        desc: 'Respostas rápidas, personalizadas e consistentes criam uma experiência premium desde o primeiro contacto.',
    },
];

/* ─── Main component ────────────────────────────────────────── */
export default function Integrations() {
    return (
        <section className={styles.wrapper}>
            {/* topFade hidden via CSS — transition now handled by wrapper background gradient */}
            <div className={styles.topFade} aria-hidden="true" />

            {/* ambient blobs */}
            <div className={styles.blob1} aria-hidden="true" />
            <div className={styles.blob2} aria-hidden="true" />

            <div className={styles.inner}>
                {/* Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className={styles.label}>Automação Inteligente</span>
                    <h2 className={styles.title}>
                        O seu paciente{' '}
                        <span className={styles.gradient}>não espera.</span>
                        <br />Nós também não.
                    </h2>
                    <p className={styles.subtitle}>
                        Integramos todos os seus canais numa única máquina de marcação.
                        Feche orçamentos pelo WhatsApp e centralize tudo no seu CRM — sem esforço manual.
                    </p>
                </motion.div>

                {/* Automation flow diagram */}
                <motion.div
                    className={styles.flowWrap}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                >
                    <AutomationFlowSVG />
                </motion.div>

                {/* Benefit cards */}
                <motion.div
                    className={styles.cardsGrid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                >
                    {benefits.map(({ Icon, title, desc }, i) => (
                        <motion.div
                            key={i}
                            className={styles.card}
                            variants={{
                                hidden: { opacity: 0, y: 24 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                            }}
                            whileHover={{ y: -6, transition: { duration: 0.25 } }}
                        >
                            <div className={styles.iconWrap}>
                                <Icon size={20} />
                            </div>
                            <h3>{title}</h3>
                            <p>{desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
