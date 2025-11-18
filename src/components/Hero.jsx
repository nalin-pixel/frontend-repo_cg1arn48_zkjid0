import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-black text-white">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient veil for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 pointer-events-none" />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-black/30 px-3 py-1 text-xs text-emerald-300/90 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Options-informed order flow
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            High-precision futures and index trading
          </h1>
          <p className="mt-5 text-emerald-100/90 leading-relaxed">
            A multi-layered framework that fuses Order Flow (Volume Profile, VWAP, Footprint) with Options Market Structure (GEX, OI) to time entries at institutional levels and manage risk with clarity.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#strategy" className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-black shadow hover:bg-emerald-400 transition-colors">
              See the playbook
            </a>
            <a href="#indicators" className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/5 transition-colors">
              Explore indicators
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
