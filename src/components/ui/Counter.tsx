import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface CounterProps {
  value: number
  suffix?: string
  duration?: number
}

/** Counts up from 0 to `value` the first time it scrolls into view. */
export function Counter({ value, suffix = '', duration = 1500 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduced = useReducedMotion()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el || reduced) return

    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          setCurrent(Math.round(value * (1 - Math.pow(1 - t, 3))))
          if (t < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value, duration, reduced])

  return (
    <span ref={ref} className="tabular-nums">
      <span aria-hidden="true">
        {reduced ? value : current}
        {suffix}
      </span>
      <span className="sr-only">
        {value}
        {suffix}
      </span>
    </span>
  )
}
