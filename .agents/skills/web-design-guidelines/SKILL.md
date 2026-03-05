---
name: Web Design Guidelines (UI/UX)
description: Best practices for focus states, forms, animation, accessibility, and high-quality web interfaces.
---

# Web Interface & Design Guidelines

These guidelines establish rigorous standards for professional web interface design, ensuring high accessibility, performance, and user satisfaction.

## 1. Accessibility & Interactive States

- **Focus States**: Never use `outline: none` without a visible alternative. Use `focus-visible` to prevent rings on click while keeping them for keyboard navigation.
- **Forms**:
    - Always use meaningful `autocomplete` and `name` attributes.
    - Use specific types (`email`, `tel`, `url`) to trigger correct mobile keyboards.
    - Labels must be clickable/linked to their controls.
    - Submit buttons should show a spinner and disable only after the request starts.
- **Hover/Active**: Interactive elements (buttons, links) must have distinct `hover:` and `active:` states for visual feedback.

## 2. Layout, Typography & Content

- **Typography**:
    - Use curly quotes (`" "`) and proper ellipses (`…`).
    - Use `text-wrap: balance` for headings to prevent widows.
    - Use `tabular-nums` for columns of numbers or comparisons.
- **Content Handling**:
    - Use `truncate` or `line-clamp` for text that might overflow.
    - Flex containers need `min-w-0` for inner text truncation to work.
    - Design for "Empty States"—never render broken UI if data is missing.
- **Safe Areas**: Use `env(safe-area-inset-*)` for full-bleed mobile layouts to account for notches.

## 3. Performance & Animation

- **Images**: Always provide `width` and `height` to prevent Cumulative Layout Shift (CLS). Use `loading="lazy"` for below-the-fold content.
- **Animation**:
    - Avoid `transition: all`. List properties explicitly.
    - Animate only `transform` and `opacity` for hardware acceleration.
    - Respect `prefers-reduced-motion`.
- **Performance**:
    - Virtualize lists with > 50 items.
    - Batch DOM reads and writes; avoid interleaving measurement (`getBoundingClientRect`) with mutations.

## 4. Navigation & State

- **URL as Truth**: Filters, tabs, and pagination should be reflected in query parameters for shareability and deep-linking.
- **Middle-Click Support**: Always use `<a>` tags for navigation to support Cmd/Ctrl+Click.
- **Destructive Actions**: Always require confirmation or provide an "Undo" window for irreversible actions.

## 5. Locale & i18n

- **No Hardcoding**: Use `Intl.DateTimeFormat` and `Intl.NumberFormat` for dates and currency.
- **Language Detection**: Detect via `Accept-Language` headers or `navigator.languages`, not just IP address.

## 6. Anti-Patterns (The "Don'ts")

- **DO NOT** block pasting in form fields (`onPaste` + `preventDefault`).
- **DO NOT** use `user-scalable=no` (prevents accessibility zoom).
- **DO NOT** use `autoFocus` on mobile (unexpected keyboard popups).
- **DO NOT** use icon buttons without `aria-label`.
