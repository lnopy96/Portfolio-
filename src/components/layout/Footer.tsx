import { FiArrowUp } from 'react-icons/fi'
import { content } from '../../data/content'

const { identity, footer, ui } = content
const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-heading font-semibold">{identity.name}</p>
          <p className="mt-1 text-sm text-muted">{footer.tagline}</p>
          <p className="mt-3 text-xs text-muted">
            © {year} {identity.name}. {ui.rights}
          </p>
        </div>
        <a
          href="#top"
          className="inline-flex items-center gap-2 self-start rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent sm:self-auto"
        >
          <FiArrowUp aria-hidden="true" /> {ui.backToTop}
        </a>
      </div>
    </footer>
  )
}
