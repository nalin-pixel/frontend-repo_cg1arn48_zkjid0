function Step({ number, title, children }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-black font-bold">{number}</div>
        <div>
          <h3 className="text-white font-semibold">{title}</h3>
          <p className="mt-1 text-white/70 text-sm leading-relaxed">{children}</p>
        </div>
      </div>
    </div>
  )
}

function Playbook() {
  return (
    <section id="strategy" className="relative w-full bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold">Options-informed order flow playbook</h2>
        <p className="mt-2 text-white/70 max-w-2xl">Top-down context from options data. Bottom-up timing from tape.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Step number="1" title="Define regime with GEX/OI">
            Determine if the market is long gamma (pinning) or short gamma (expansion). Mark gamma flip, high OI strikes, and magnets.
          </Step>
          <Step number="2" title="Map structure with volume">
            Plot session/weekly VWAP and volume profile POC/HVNs. These are fair value areas and institutional levels.
          </Step>
          <Step number="3" title="Wait for interaction">
            Let price come to a GEX/OI wall or a major POC/VWAP band. No level, no trade.
          </Step>
          <Step number="4" title="Read the footprint">
            Look for absorption, exhaustion, or initiative flows. Confirm with delta shift and failed follow-through.
          </Step>
          <Step number="5" title="Execute with risk defined">
            Place stops beyond the level that prompted the trade. Target nearest magnet/POC. Trail if regime supports trends.
          </Step>
        </div>
      </div>
    </section>
  )
}

export default Playbook
