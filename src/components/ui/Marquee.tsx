interface MarqueeProps {
  items: string[]
  label: string
}

/** Infinite CSS marquee; pauses on hover, becomes a static wrapped row with reduced motion. */
export function Marquee({ items, label }: MarqueeProps) {
  const row = (hidden: boolean) =>
    items.map((item) => (
      <li
        key={`${item}-${hidden}`}
        aria-hidden={hidden || undefined}
        className={`flex shrink-0 items-center gap-8 font-heading text-lg text-muted md:text-xl ${hidden ? 'motion-reduce:hidden' : ''}`}
      >
        {item}
        <span aria-hidden="true" className="size-1.5 rounded-full bg-accent/60" />
      </li>
    ))

  return (
    <div
      role="region"
      aria-label={label}
      className="group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] motion-reduce:[mask-image:none]"
    >
      <ul className="flex w-max gap-8 pr-8 motion-safe:animate-marquee group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center">
        {row(false)}
        {row(true)}
      </ul>
    </div>
  )
}
