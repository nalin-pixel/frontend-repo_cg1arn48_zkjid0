import { BarChart3, Activity, Layers3, Goal, CircleDot, Gauge, Zap } from 'lucide-react'

function Pill({ icon: Icon, title, description }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-emerald-500/15 p-2 text-emerald-300">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white/90">{title}</p>
          <p className="text-xs text-white/70">{description}</p>
        </div>
      </div>
    </div>
  )
}

function Indicators() {
  return (
    <section id="indicators" className="relative w-full bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold">Primary indicators</h2>
        <p className="mt-2 text-white/70 max-w-2xl">Three focused tools form the core: Volume Profile + Order Flow, Gamma Exposure + Open Interest, and VWAP-based structure.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Pill icon={BarChart3} title="Volume Profile" description="POC, HVNs/LVNs for institutional levels" />
          <Pill icon={Activity} title="Footprint & Delta" description="Aggression, absorption, exhaustion at price" />
          <Pill icon={Gauge} title="VWAP" description="Session, weekly, anchored VWAP confluence" />
          <Pill icon={Layers3} title="GEX" description="Dealer gamma regime: pinning vs expansion" />
          <Pill icon={Goal} title="Open Interest" description="Walls and magnets for key strikes" />
          <Pill icon={Zap} title="Gamma Flip" description="Zero gamma transitions for volatility shifts" />
        </div>
      </div>
    </section>
  )
}

export default Indicators
