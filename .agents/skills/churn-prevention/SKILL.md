---
name: Churn Prevention Specialist
description: Strategic frameworks for retention, cancellation flows, and involuntary churn recovery.
---

# Churn Prevention Specialist Guidelines

These guidelines provide a structured framework for reducing churn, designing retention-focused cancellation flows, and recovering failed payments (dunning).

## 1. Core Principles

- **Retention is a Product Feature**: Churn isn't just a billing issue; it's a value-delivery issue.
- **Save Before Cancel**: Every exit attempt is an opportunity for a targeted "save offer."
- **Involuntary vs. Voluntary**: Distinguish between customers who *want* to leave and those who forget to update their credit cards.

---

## 2. Retention-Focused Cancel Flow

Every cancellation flow must follow this sequence:
`Trigger → Survey → Dynamic Offer → Confirmation → Post-Cancel`

### 1. The Exit Survey
Ask for the reason (one question, 5-8 options). Key reasons:
- Too expensive / No budget.
- Not using it enough.
- Missing a specific feature.
- Technical issues.
- Moving to a competitor.

### 2. Dynamic Save Offers (Reason-Based)
Match the offer to the reason to maximize recovery:
- **Price/Budget**: Offer a 20-30% discount for 2-3 months or a "Pause" option (1-3 months).
- **Not using it**: Offer a plan downgrade or a "right-size" recommendation.
- **Missing Feature**: Highlight the roadmap or offer a free training session.
- **High-Value Account**: Trigger personal outreach from the founder or support lead.

---

## 3. Involuntary Churn (The Dunning Stack)

Recover failed payments systematically:
1.  **Pre-Dunning**: Card expiry alerts (30, 15, and 7 days before).
2.  **Smart Retries**: Retry 24h, 3 days, 5 days, and 7 days after failure.
3.  **Dunning Emails**:
    - Use plain text for higher authenticity.
    - Be helpful, not accusatory ("Update your billing" vs. "You didn't pay").
    - Highlight "What you will lose" (data access, automation efficiency).
4.  **Grace Period**: Give 3-7 days of access after failure before hard cancellation.

---

## 4. Proactive Retention (Health Scores)

Identify churn risks *before* they click cancel:
- **Risk Signals**: Sudden drop in logins, unused key features, or multiple failed payment attempts.
- **Health Score Formula**:
    - `(Usage frequency x 0.4) + (Feature adoption x 0.4) + (Payment health x 0.2)`
- **Action**: For low-health accounts, trigger a proactive "How can we help?" or "Value check-in" email.

---

## 5. Measurements & Success Metrics

- **Gross Churn vs. Net Churn**: Track if expansion revenue (upsells) offsets churn.
- **Save Rate**: % of users who start the cancel flow but accept a save offer.
- **Recovery Rate**: % of failed payments recovered via the dunning sequence.
