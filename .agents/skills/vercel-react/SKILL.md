---
name: Vercel React Best Practices
description: Performance optimization, waterfall elimination, and server-side efficiency for Next.js and React.
---

# Vercel React Best Practices

These guidelines focus on maximizing performance and efficiency in React applications, particularly when deployed on Vercel or using Next.js.

## 1. Eliminating Waterfalls (CRITICAL)

- **Parallel Operations**: Always use `Promise.all()` for independent data fetching operations to avoid sequential blocking.
- **Defer Await**: Move `await` statements into the specific branches where the data is actually needed, rather than at the top level of a function.
- **Streaming with Suspense**: Use React `Suspense` boundaries to stream content as it becomes available, preventing the entire page from waiting on the slowest request.
- **Start Promises Early**: In API routes or server components, start promises as early as possible and await them as late as possible.

## 2. Bundle Size Optimization (CRITICAL)

- **Avoid Barrel Files**: Import components and utilities directly from their files (e.g., `import { Button } from './components/Button'`) to prevent loading unnecessary modules.
- **Dynamic Imports**: Use `next/dynamic` (or `React.lazy`) for heavy components that are not visible on initial load or are conditional.
- **Defer Third-Party Scripts**: Load analytics, logging, and non-critical trackers after the initial hydration is complete.
- **Preload on Interaction**: Use preloading strategies (like preloading on hover or focus) to improve perceived performance for critical paths.

## 3. Server-Side Performance (HIGH)

- **Request Deduplication**: Use `React.cache()` to deduplicate data fetching within a single request cycle.
- **Minimize Serialization**: Reduce the amount of data passed from Server Components to Client Components. Only pass necessary primitives or lean objects.
- **Hoist Static I/O**: Move static I/O operations (like reading font files or local config) to the module level so they are performed only once during startup.
- **Non-blocking Operations**: Use `after()` (in Next.js) or similar patterns for logging or analytics that shouldn't block the response to the user.

## 4. Rendering & Re-render Optimization

- **Selective Memoization**: Use `React.memo` only for expensive components. Avoid unnecessary memoization for simple primitives as it can add its own overhead.
- **Functional setState**: Always use the functional form of `setState` (e.g., `setCount(c => c + 1)`) to ensure stable callbacks and prevent stale state issues.
- **Lazy State Init**: Pass a function to `useState` for expensive initial values so they only calculate on the first render.
- **startTransition**: Use `useTransition` for non-urgent updates (like filtering lists or tab switching) to keep the UI responsive during expensive renders.
- **Ternary over &&**: Prefer ternary operators (`condition ? <Comp /> : null`) over short-circuit evaluation (`condition && <Comp />`) for conditional rendering to avoid accidental `0` or `""` rendering.

## 5. JavaScript Performance

- **O(1) Lookups**: Use `Map` or `Set` instead of `Array.find()` or `Array.includes()` for repeated lookups in large datasets.
- **Combined Iterations**: Combine multiple `.filter().map()` calls into a single `.reduce()` or a loop to avoid multiple passes over the same array.
- **Early Exit**: Guard clauses and early returns improve both readability and performance by avoiding unnecessary execution.
- **Ref for Transient Values**: Use `useRef` for values that change frequently but don't need to trigger a re-render (e.g., scroll positions, timer IDs).
