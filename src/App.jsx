import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
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
