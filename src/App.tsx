import { content } from './data/content'

function App() {
  const { identity } = content

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      {/* Navbar — Task 3 */}
      <main id="main" className="min-h-screen">
        <div className="container-page flex min-h-screen flex-col justify-center py-24">
          <h1>{identity.name}</h1>
          <p className="mt-4 text-muted">{identity.title}</p>
        </div>
      </main>
      {/* Footer — Task 9 */}
    </>
  )
}

export default App
