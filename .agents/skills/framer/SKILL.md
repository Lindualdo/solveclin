---
name: Framer Development
description: Best practices, animations, and code overrides for Framer and Framer Motion
---

# Framer & Framer Motion Development Guidelines

These guidelines consolidate best practices for working with Framer Code Components, Code Overrides, and Framer Motion animations. They are optimized to avoid ambiguities and prevent conflicting rules between Framer's internal environment and general React best practices.

## 1. Framer Motion Best Practices (Performance & Optimization)

### Bundle Optimization (CRITICAL)
- Use `LazyMotion` and `m` component instead of `motion` to reduce bundle size.
- Dynamically import motion features.
- Enable `strict` mode to catch accidental imports of the full `motion` component.

### Re-render Prevention (CRITICAL)
- Use `useMotionValue` instead of React `useState` for frequently updating animation values (e.g., drag, scroll).
- Derive values with `useTransform` to avoid re-renders.
- Keep animation callbacks stable using `useCallback`.
- Define animation variants outside the component to prevent recreating them on every render.
- Use `useMotionValueEvent` for subscribing to motion value changes safely.

### Animation Properties & Layout (HIGH)
- **Transform > Layout**: Animate `transform` properties (`scale`, `x`, `y`, `rotate`) instead of structural properties (`width`, `height`, `top`, `left`).
- Prefer `opacity` and `filter` for visual effects.
- Limit layout measurements by using `layoutDependency` and specifying `layout="position"` or `layout="size"` where appropriate.
- Group related layout animations with `LayoutGroup`.
- Use `layoutId` for shared element transitions.

### Scroll & Gestures (MEDIUM)
- Smooth scroll animations with `useSpring`.
- Use `whileHover` and `whileTap` props instead of manual React event handlers (`onMouseEnter`, `onMouseDown`) for gestures.
- Let gesture variants flow down to children for synchronized states.

---

## 2. Framer Motion Animator Core Workflows

### Execution Flow
1. **Identify animation needs:** Entrance, exit, hover, gestures.
2. **Choose animation type:** Simple, variants, gestures, layout.
3. **Define motion values:** Opacity, scale, position, rotation.
4. **Add transitions:** Duration, easing, spring physics (prefer springs over tweens for natural feeling).
5. **Orchestrate sequences:** Stagger, delay, parent-child variants.

### Variant Patterns
Define variants clearly to orchestrate parent/children animations:
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
  },
};
```

### Exit Animations
Wrap components that conditionally render with `<AnimatePresence>` so exit animations can run before the element is removed from the DOM.

---

## 3. Framer Code Components & Overrides Environment Rules

### Code Components vs. Code Overrides
- **Code Components**: Custom React components added to the canvas. They **support** `addPropertyControls`.
- **Code Overrides**: Higher-order components (HOCs) wrapping existing canvas elements. They must use the `with` prefix (e.g., `withFeatureName`) and do **NOT** support `addPropertyControls`.

### Required Annotations
Every Framer component/override must include proper annotations to ensure editor stability:
```tsx
/**
 * @framerDisableUnlink
 * @framerIntrinsicWidth 100
 * @framerIntrinsicHeight 100
 */
```

### Critical: Font Handling
Never access font properties individually. Always spread the entire font object from props:
```tsx
// ❌ BROKEN - Will not work in the Framer canvas
style={{ fontFamily: props.font.fontFamily, fontSize: props.font.fontSize }}

// ✅ CORRECT - Spread entire object
style={{ ...props.font }}
```

### Critical: Wrap State Updates
All React state updates in Framer code must be wrapped in `startTransition` to prevent concurrent rendering pipeline issues in the Framer canvas:
```tsx
import { startTransition } from "react"

// ✅ CORRECT
startTransition(() => {
  setCount(count + 1)
})
```

### Critical: Hydration Safety
Framer pre-renders on the server (SSR). Browser APIs (`window`, `document`, `localStorage`) are unavailable during initial render.
Always use a two-phase render pattern for client-side logic dependent on browser APIs:
```tsx
const [isClient, setIsClient] = useState(false)
useEffect(() => { setIsClient(true) }, [])

if (!isClient) {
  return <Component {...props} /> // SSR-safe fallback
}
// Safe to use window/document below
```

### Canvas vs. Preview Detection
Use `RenderTarget` to disable heavy effects, 3D Canvas, or show debug overlays only in the editor context:
```tsx
import { RenderTarget } from "framer"
const isOnCanvas = RenderTarget.current() === RenderTarget.canvas
```

### Scroll Detection Constraint
Framer's native scroll detection uses a viewport-based `IntersectionObserver`. Applying `overflow: scroll` or `overflow: auto` to containers breaks this detection.
For scroll-triggered animations within custom scrollable containers, implement a custom `IntersectionObserver` instead of relying on Framer's `whileInView`.

### External NPM Packages
- Standard import: `import { Component } from "package-name"`
- Force version via ESM CDN (if Framer cache is stuck): 
  `import { Component } from "https://esm.sh/package-name@1.2.3?external=react,react-dom"`
