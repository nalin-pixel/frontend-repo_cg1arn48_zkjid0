import Hero from './components/Hero'
import Indicators from './components/Indicators'
import Playbook from './components/Playbook'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Indicators />
      <Playbook />
      <Footer />
    </div>
  )
}

export default App
