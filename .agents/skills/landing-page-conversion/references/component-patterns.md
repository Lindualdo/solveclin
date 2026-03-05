# Component Patterns

Full TSX blueprints for each landing page section. Adapt colors, copy, and layout — but keep the underlying structure and animation logic.

---

## AnimatedSection (reusable wrapper)

```tsx
// components/ui/AnimatedSection.tsx
'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedSection({ children, className, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

---

## Navbar

```tsx
// components/sections/Navbar.tsx
'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-subtle)]' : 'bg-transparent'
      }`}
    >
      <nav className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="font-display font-bold text-lg tracking-tight">
          YourBrand
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-[var(--text-secondary)]">
          {['Services', 'Work', 'Pricing', 'About'].map((item) => (
            <li key={item}>
              <Link href={`#${item.toLowerCase()}`} className="hover:text-[var(--text-primary)] transition-colors">
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden md:block text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            Log in
          </Link>
          <Link
            href="#contact"
            className="btn-primary text-sm px-5 py-2.5 rounded-full bg-[var(--accent)] text-[var(--bg-primary)] font-medium hover:opacity-90 transition-opacity"
          >
            Book a Call
          </Link>
        </div>
      </nav>
    </header>
  )
}
```

---

## Hero Section

```tsx
// components/sections/Hero.tsx
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const STAGGER = { animate: { transition: { staggerChildren: 0.1 } } }
const FADE_UP = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 gradient-bg pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          className="max-w-4xl"
          variants={STAGGER}
          initial="initial"
          animate="animate"
        >
          {/* Badge */}
          <motion.div variants={FADE_UP} className="mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[var(--text-tertiary)] border border-[var(--border-default)] rounded-full px-4 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-pulse" />
              New · AI-Powered Platform
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={FADE_UP}
            className="text-display text-[var(--text-primary)] mb-6"
          >
            Lead your business{' '}
            <span className="text-[var(--text-secondary)]">with AI automation</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={FADE_UP}
            className="text-subheading max-w-xl mb-10"
          >
            We help agencies harness AI to work smarter, scale faster, and deliver
            results that compound — without hiring more people.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--accent)] text-[var(--bg-primary)] font-semibold text-sm px-7 py-3.5 rounded-full hover:opacity-90 transition-all duration-200 group"
            >
              Book a Free Call
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
            <Link
              href="#work"
              className="inline-flex items-center justify-center gap-2 text-[var(--text-secondary)] text-sm px-7 py-3.5 rounded-full border border-[var(--border-default)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)] transition-all duration-200"
            >
              See our work
            </Link>
          </motion.div>

          {/* Social proof micro-element */}
          <motion.div variants={FADE_UP} className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-[var(--bg-elevated)] border-2 border-[var(--bg-primary)]" />
              ))}
            </div>
            <p className="text-sm text-[var(--text-secondary)]">
              <span className="text-[var(--text-primary)] font-medium">12,000+</span> businesses growing with us
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
```

---

## Social Proof Bar (Logo Marquee)

```tsx
// components/sections/SocialProofBar.tsx
'use client'

const LOGOS = ['Stripe', 'Linear', 'Notion', 'Vercel', 'Figma', 'Loom', 'Framer', 'Arc']

export function SocialProofBar() {
  return (
    <section className="py-12 border-y border-[var(--border-subtle)] overflow-hidden">
      <p className="text-label text-center mb-8 text-[var(--text-tertiary)]">
        Trusted by teams at
      </p>
      <div className="relative flex overflow-hidden">
        <div className="marquee-track flex items-center gap-16">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <span
              key={i}
              className="text-[var(--text-tertiary)] font-semibold text-sm tracking-tight whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Features / Bento Grid

```tsx
// components/sections/Features.tsx
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const features = [
  {
    icon: '⚡',
    title: 'Automate everything',
    description: 'Set up once, run forever. Your workflows keep moving while you focus on growth.',
    size: 'col-span-12 md:col-span-8',
  },
  {
    icon: '🎯',
    title: 'Smart targeting',
    description: 'AI identifies your best leads automatically.',
    size: 'col-span-12 md:col-span-4',
  },
  {
    icon: '📊',
    title: 'Real-time insights',
    description: 'See what\'s working before your competitors even notice.',
    size: 'col-span-12 md:col-span-4',
  },
  {
    icon: '🔒',
    title: 'Enterprise security',
    description: 'SOC 2 certified. Your data stays yours.',
    size: 'col-span-12 md:col-span-4',
  },
  {
    icon: '🚀',
    title: 'Launch in minutes',
    description: 'Integrates with your existing stack. No dev needed.',
    size: 'col-span-12 md:col-span-4',
  },
]

export function Features() {
  return (
    <section className="section-lg" id="services">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <p className="text-label text-[var(--text-tertiary)] mb-4">Services</p>
          <h2 className="text-headline text-[var(--text-primary)]">
            Process is performance
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-12 gap-4">
          {features.map((feature, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.07}
              className={`${feature.size} glass-card p-7 group cursor-default`}
            >
              <div className="text-2xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-2 text-base">
                {feature.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {feature.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Testimonials

```tsx
// components/sections/Testimonials.tsx
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const testimonials = [
  {
    quote: "We went from 40 manual hours/week to under 5. That's not an exaggeration — it completely changed how our team operates.",
    name: 'Ryan Harper',
    role: 'CEO',
    company: 'Harper Education',
    avatar: '/avatars/ryan.jpg',
    stars: 5,
  },
  // Add 2 more...
]

export function Testimonials() {
  return (
    <section className="section-lg" id="reviews">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <p className="text-label text-[var(--text-tertiary)] mb-4">Reviews</p>
          <h2 className="text-headline text-[var(--text-primary)]">
            Our customers love us
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.1}
              className="glass-card p-7 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-subtle)]">
                <div className="w-9 h-9 rounded-full bg-[var(--bg-elevated)]" />
                <div>
                  <p className="text-sm font-medium text-[var(--text-primary)]">{t.name}</p>
                  <p className="text-xs text-[var(--text-tertiary)]">{t.role} · {t.company}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Pricing Section

```tsx
// components/sections/Pricing.tsx
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/mo',
    description: 'For solo operators ready to automate.',
    features: ['5 automated workflows', 'CRM integration', 'Email support', '1 user seat'],
    cta: 'Start Free Trial',
    featured: false,
  },
  {
    name: 'Growth',
    price: '$149',
    period: '/mo',
    description: 'Best for teams ready to scale fast.',
    features: ['Unlimited workflows', 'AI lead scoring', 'Priority support', '5 user seats', 'Custom integrations'],
    cta: 'Start Free Trial',
    featured: true,
  },
  {
    name: 'Agency',
    price: '$399',
    period: '/mo',
    description: 'White-label for agencies.',
    features: ['Everything in Growth', 'White-label dashboard', 'Dedicated account manager', 'Unlimited seats', 'API access'],
    cta: 'Talk to Sales',
    featured: false,
  },
]

export function Pricing() {
  return (
    <section className="section-lg" id="pricing">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <p className="text-label text-[var(--text-tertiary)] mb-4">Pricing</p>
          <h2 className="text-headline text-[var(--text-primary)]">Simple, transparent pricing</h2>
          <p className="text-subheading mt-4 max-w-lg mx-auto">
            Start free. Upgrade when you're ready. No hidden fees, ever.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.1}
              className={`relative glass-card p-7 ${plan.featured ? 'border-[var(--accent)] border-opacity-60 ring-1 ring-white/20' : ''}`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[var(--accent)] text-[var(--bg-primary)] text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className="text-sm font-medium text-[var(--text-primary)] mb-1">{plan.name}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[var(--text-primary)]">{plan.price}</span>
                  <span className="text-[var(--text-tertiary)] text-sm">{plan.period}</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <Check size={14} className="mt-0.5 text-[var(--success)] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center text-sm font-medium py-3 rounded-full transition-all duration-200 ${
                  plan.featured
                    ? 'bg-[var(--accent)] text-[var(--bg-primary)] hover:opacity-90'
                    : 'border border-[var(--border-default)] text-[var(--text-primary)] hover:border-[var(--border-strong)]'
                }`}
              >
                {plan.cta}
              </a>
              <p className="text-center text-xs text-[var(--text-tertiary)] mt-3">
                14-day free trial · No credit card
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## FAQ Section

```tsx
// components/sections/FAQ.tsx
'use client'
import { useState } from 'react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  { q: 'Is this right for my business?', a: 'If you run any kind of service business with repetitive workflows, yes. Our clients range from 1-person agencies to 50-person teams.' },
  { q: 'How long does setup take?', a: 'Most clients are live within 48 hours. Our onboarding team handles the heavy lifting.' },
  { q: 'What if it doesn\'t work for me?', a: 'We offer a 30-day money-back guarantee, no questions asked. We\'re confident you\'ll see results.' },
  { q: 'Do you integrate with [my tools]?', a: 'We integrate natively with 100+ tools including HubSpot, Salesforce, Slack, Notion, and more.' },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section-md" id="faq">
      <div className="container max-w-2xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-headline text-[var(--text-primary)]">Common questions</h2>
        </AnimatedSection>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left glass-card p-5 flex items-center justify-between gap-4 hover:border-[var(--border-strong)] transition-colors"
              >
                <span className="font-medium text-sm text-[var(--text-primary)]">{faq.q}</span>
                <Plus
                  size={16}
                  className={`shrink-0 text-[var(--text-secondary)] transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-2 text-sm text-[var(--text-secondary)] leading-relaxed border-x border-b border-[var(--border-default)] rounded-b-lg -mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Final CTA Section

```tsx
// components/sections/FinalCTA.tsx
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function FinalCTA() {
  return (
    <section className="section-lg">
      <div className="container">
        <AnimatedSection>
          <div className="relative glass-card p-16 text-center overflow-hidden">
            {/* Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10">
              <p className="text-label text-[var(--text-tertiary)] mb-5">Get started today</p>
              <h2 className="text-headline text-[var(--text-primary)] mb-4 max-w-2xl mx-auto">
                Ready to grow — without the chaos?
              </h2>
              <p className="text-subheading max-w-md mx-auto mb-10">
                Join 12,000+ businesses. Set up takes under 10 minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-[var(--accent)] text-[var(--bg-primary)] font-semibold text-sm px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
                >
                  Start Your Free Trial →
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 text-[var(--text-secondary)] text-sm px-8 py-4 rounded-full border border-[var(--border-default)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-all"
                >
                  Book a Demo
                </a>
              </div>

              <p className="mt-6 text-xs text-[var(--text-tertiary)]">
                ✓ 14-day free trial &nbsp;·&nbsp; ✓ No credit card required &nbsp;·&nbsp; ✓ Cancel anytime
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
```

---

## Magnetic Button (Signature Detail)

```tsx
// components/ui/MagneticButton.tsx
'use client'
import { useRef, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useSpring(0, { stiffness: 300, damping: 20 })
  const y = useSpring(0, { stiffness: 300, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * 0.3)
    y.set((e.clientY - cy) * 0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

---

## Custom Cursor (Optional Signature Detail)

```tsx
// components/ui/CustomCursor.tsx
'use client'
import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const x = useSpring(0, { stiffness: 500, damping: 28 })
  const y = useSpring(0, { stiffness: 500, damping: 28 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    const hover = () => setHovered(true)
    const unhover = () => setHovered(false)

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', hover)
      el.addEventListener('mouseleave', unhover)
    })

    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
    >
      <motion.div
        className="rounded-full bg-white"
        animate={{
          width: hovered ? 40 : 10,
          height: hovered ? 40 : 10,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
    </motion.div>
  )
}
```

Add `<CustomCursor />` inside `layout.tsx` body, and add `cursor-none` to `html` in globals.css.

---

## Metrics Bar

```tsx
const metrics = [
  { value: '10k+', label: 'Happy Users' },
  { value: '250k+', label: 'Hours Saved' },
  { value: '4.9', label: 'Avg Rating' },
  { value: '98%', label: 'Retention Rate' },
]

// Inside section:
<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border-subtle)]">
  {metrics.map((m, i) => (
    <AnimatedSection key={i} delay={i * 0.08} className="bg-[var(--bg-primary)] p-8 text-center">
      <p className="text-3xl font-bold text-[var(--text-primary)] mb-1">{m.value}</p>
      <p className="text-xs text-[var(--text-tertiary)] tracking-wide uppercase">{m.label}</p>
    </AnimatedSection>
  ))}
</div>
```