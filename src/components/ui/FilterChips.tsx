interface Option {
  value: string
  label: string
  count: number
}

interface FilterChipsProps {
  legend: string
  options: Option[]
  value: string
  onChange: (value: string) => void
}

export function FilterChips({ legend, options, value, onChange }: FilterChipsProps) {
  return (
    <fieldset className="flex flex-wrap items-center gap-2">
      <legend className="mb-2 w-full text-xs tracking-widest text-muted uppercase sm:float-left sm:mr-3 sm:mb-0 sm:w-20">
        {legend}
      </legend>
      {options.map((opt) => {
        const active = opt.value === value
        return (
          <button
            key={opt.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(opt.value)}
            className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-colors duration-200 ${
              active
                ? 'border-accent bg-accent text-bg'
                : 'border-border text-muted hover:border-accent/60 hover:text-text'
            }`}
          >
            {opt.label}
            <span className={`text-xs tabular-nums ${active ? 'text-bg/70' : 'text-muted/70'}`}>{opt.count}</span>
          </button>
        )
      })}
    </fieldset>
  )
}
