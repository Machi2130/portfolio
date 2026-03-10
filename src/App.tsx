import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { BootSequence } from './components/BootSequence'
import { Terminal } from './components/Terminal'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { SkillsPage } from './pages/SkillsPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ContactPage } from './pages/ContactPage'


function AppRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  )
}


function AppShell() {
  const navigate = useNavigate()
  const [bootDone, setBootDone] = useState(
    () => sessionStorage.getItem('bootDone') === 'true'
  )

  const handleBootComplete = () => {
    sessionStorage.setItem('bootDone', 'true')
    setBootDone(true)
  }

  useEffect(() => {
    document.body.classList.add('bg-background')
    document.body.classList.add('crt-flicker-overlay')

    let cancelled = false
    let timer: number | undefined
    let innerTimer: number | undefined

    const rand = (min: number, max: number) => Math.floor(min + Math.random() * (max - min + 1))
    const randFloat = (min: number, max: number) => min + Math.random() * (max - min)

    const schedule = () => {
      if (cancelled) return

      const wait = rand(4500, 12000)
      timer = window.setTimeout(() => {
        if (cancelled) return

        const strength = randFloat(0.5, 1.2)
        const glitchX = rand(6, 26)
        const glitchY = rand(1, 6)
        const tearX = rand(10, 44)

        document.body.style.setProperty('--flicker-strength', strength.toFixed(2))
        document.body.style.setProperty('--glitch-x', `${glitchX}px`)
        document.body.style.setProperty('--glitch-y', `${glitchY}px`)
        document.body.style.setProperty('--tear-x', `${tearX}px`)

        document.body.classList.add('is-flickering')

        const isBurst = Math.random() < 0.15
        const duration = isBurst ? rand(220, 420) : rand(70, 130)

        if (innerTimer) window.clearTimeout(innerTimer)
        innerTimer = window.setTimeout(() => {
          document.body.classList.remove('is-flickering')
          schedule()
        }, duration)
      }, wait)
    }

    schedule()

    return () => {
      cancelled = true
      if (timer) window.clearTimeout(timer)
      if (innerTimer) window.clearTimeout(innerTimer)
      document.body.classList.remove('is-flickering')
      document.body.classList.remove('crt-flicker-overlay')
      document.body.style.removeProperty('--flicker-strength')
      document.body.style.removeProperty('--glitch-x')
      document.body.style.removeProperty('--glitch-y')
      document.body.style.removeProperty('--tear-x')
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Retro CRT Portfolio</title>
      </Helmet>
      {!bootDone && <BootSequence onComplete={handleBootComplete} />}
      <AppRoutes />
      <Terminal onNavigate={(path) => navigate(path)} />
    </>
  )
}


function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}


export default App
