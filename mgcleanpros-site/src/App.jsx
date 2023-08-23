import { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Reviews from './components/Reviews'
import Contact from './components/Contact'

function App() {
  const [showMenu, setShowMenu] = useState(false)

  function toggleMenu() {
    setShowMenu(prev => !prev)
  }

  return (
    <div>
      <Header
        showMenu={showMenu}
        toggleMenu={() => toggleMenu()}
      />
      <Hero />
      <Services />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
