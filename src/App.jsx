import { useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import WhatiDo from './components/WhatiDo'
import WhoIam from './components/WhoIam'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <HeroSection />
      <WhoIam />
      <WhatiDo />
      <Projects />
    </>
  )
}

export default App
