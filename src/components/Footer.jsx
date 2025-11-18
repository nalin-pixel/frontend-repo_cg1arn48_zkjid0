function Footer() {
  return (
    <footer className="bg-black text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>Built for futures and index traders. Educational only.</p>
        <nav className="flex items-center gap-4 text-white/60">
          <a href="#strategy" className="hover:text-white">Playbook</a>
          <a href="#indicators" className="hover:text-white">Indicators</a>
          <a href="/test" className="hover:text-white">System Check</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
