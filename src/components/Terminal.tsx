import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Maximize2, Minimize2, TerminalSquare } from 'lucide-react'

type TerminalProps = {
  onNavigate: (path: string) => void
}

type Entry = {
  id: number
  type: 'input' | 'output' | 'error'
  text: string
}

const HELP_TEXT = [
  'Available commands:',
  '  help                Show this help',
  '  ls                  List sections',
  '  cd <page>           Navigate to page (home, about, projects, skills, contact)',
  '  cd .. | cd..        Go back to home',
  '  whoami              Show user identity',
  '  date                Show current date/time',
  '  clear               Clear the screen',
  '  echo <text>         Print text',
]

let idCounter = 0

export function Terminal({ onNavigate }: TerminalProps) {
  const [entries, setEntries] = useState<Entry[]>([
    { id: ++idCounter, type: 'output', text: 'Retro CRT portfolio terminal. Type `help` to begin.' },
  ])
  const [input, setInput] = useState('')
  const [isMaximized, setIsMaximized] = useState(false)
  const [isMobileHint, setIsMobileHint] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const audioCtx = useMemo(() => {
    if (typeof window === 'undefined' || !window.AudioContext) return null
    return new AudioContext()
  }, [])

  const playKeySound = () => {
    if (!audioCtx) return
    const now = audioCtx.currentTime
    const osc = audioCtx.createOscillator()
    const gain = audioCtx.createGain()
    osc.type = 'square'
    osc.frequency.setValueAtTime(1000 + Math.random() * 300, now)
    gain.gain.setValueAtTime(0.03, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06)
    osc.connect(gain)
    gain.connect(audioCtx.destination)
    osc.start(now)
    osc.stop(now + 0.07)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobileHint(window.innerWidth < 640)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    inputRef.current?.focus()
  }, [isMaximized, isMobileHint])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    el.scrollTop = el.scrollHeight
  }, [entries, isMaximized])

  // Auto-collapse into an icon after a period of inactivity on desktop.
  useEffect(() => {
    if (isMobileHint) return

    let idleTimer: number | undefined

    const resetIdle = () => {
      setIsCollapsed(false)
      if (idleTimer) window.clearTimeout(idleTimer)
      idleTimer = window.setTimeout(() => {
        setIsCollapsed(true)
      }, 10000)
    }

    resetIdle()

    const events: (keyof DocumentEventMap)[] = ['keydown']
    events.forEach((evt) => document.addEventListener(evt, resetIdle))

    return () => {
      if (idleTimer) window.clearTimeout(idleTimer)
      events.forEach((evt) => document.removeEventListener(evt, resetIdle))
    }
  }, [isMobileHint])

  const addEntry = (entry: Omit<Entry, 'id'>) => {
    setEntries((prev) => [...prev, { ...entry, id: ++idCounter }])
  }

  const handleCommand = async (raw: string) => {
    if (!raw.trim()) return
    const cmd = raw.trim()
    addEntry({ type: 'input', text: `$ ${cmd}` })
    setInput('')
    setIsProcessing(true)

    const [base, ...rest] = cmd.split(' ')
    const arg = rest.join(' ')

    const delay = (ms: number) => new Promise((r) => setTimeout(r, ms))

    const navDelay = 1000 + Math.random() * 500
    const defaultDelay = 400 + Math.random() * 300

    if (base === 'help') {
      await delay(defaultDelay)
      HELP_TEXT.forEach((line) => addEntry({ type: 'output', text: line }))
    } else if (base === 'ls') {
      await delay(defaultDelay)
      ;[
        'sections:',
        '  home       - Intro / hero',
        '  about      - Experience & education',
        '  skills     - Technical stack',
        '  projects   - Selected work',
        '  contact    - Reach out',
      ].forEach((line) => addEntry({ type: 'output', text: line }))
    } else if (base === 'whoami') {
      await delay(defaultDelay)
      addEntry({ type: 'output', text: 'guest@portfolio.dev' })
    } else if (base === 'date') {
      await delay(defaultDelay)
      addEntry({ type: 'output', text: new Date().toString() })
    } else if (base === 'clear') {
      await delay(200)
      setEntries([])
    } else if (base === 'echo') {
      await delay(defaultDelay)
      addEntry({ type: 'output', text: rest.join(' ') })
    } else if (base === 'cd') {
      const target = arg.toLowerCase()
      const path =
        target === 'home' || target === '/'
          ? '/'
          : target === 'about'
            ? '/about'
            : target === 'projects'
              ? '/projects'
              : target === 'skills'
                ? '/skills'
                : target === 'contact'
                  ? '/contact'
                  : null

      addEntry({ type: 'output', text: `▶ Navigating to ${arg || 'home'}...` })
      await delay(navDelay)
      if (path) {
        onNavigate(path)
      } else {
        addEntry({
          type: 'error',
          text: `cd: no such directory: ${arg}. Try: about, projects, skills, contact`,
        })
      }
    } else if (cmd === 'cd..' || cmd === 'cd ..') {
      addEntry({ type: 'output', text: '▶ Navigating to home...' })
      await delay(navDelay)
      onNavigate('/')
    } else {
      await delay(defaultDelay)
      addEntry({
        type: 'error',
        text: `command not found: ${cmd}. Type 'help' for commands.`,
      })
    }

    setIsProcessing(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleCommand(input)
    }
    if (e.key.length === 1) {
      playKeySound()
    }
  }

  const baseClasses =
    'fixed z-50 font-mono text-xs sm:text-sm text-foreground bg-background/95 border border-border shadow-terminal-glow overflow-hidden terminal-scanlines terminal-screen-glow'

  const minimizedDesktop =
    'hidden sm:flex flex-col bottom-4 right-4 w-[320px] h-[160px] md:w-[400px] md:h-[200px] 2xl:w-[540px] 2xl:h-[220px]'

  const mobileBar = 'flex sm:hidden bottom-0 inset-x-0 h-[56px]'

  return (
    <>
      {/* Desktop / tablet */}
      <AnimatePresence>
        {!isMobileHint && !isCollapsed && (
          <motion.div
            className={`${baseClasses} ${isMaximized ? 'inset-2 md:inset-8' : minimizedDesktop}`}
            initial={{ opacity: 0, x: 80, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 80, y: 10 }}
            onClick={() => inputRef.current?.focus()}
          >
            <div className="flex items-center justify-between border-b border-border bg-black/40 px-3 py-1">
              <div className="flex items-center gap-2 text-terminal-bright">
                <TerminalSquare className="h-4 w-4" />
                <span className="text-xs">terminal@portfolio</span>
              </div>
              <button
                type="button"
                className="text-terminal-bright hover:text-primary transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsMaximized((v) => !v)
                }}
              >
                {isMaximized ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </button>
            </div>
            <div ref={containerRef} className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
              {entries.map((entry) => (
                <div
                  key={entry.id}
                  className={
                    entry.type === 'error'
                      ? 'text-destructive'
                      : entry.type === 'input'
                        ? 'text-terminal-bright'
                        : 'text-foreground'
                  }
                >
                  {entry.text}
                </div>
              ))}
            </div>
            <div className="border-t border-border px-3 py-1.5">
              <div className="flex items-center gap-1">
                <span className="text-terminal-bright">$</span>
                <input
                  ref={inputRef}
                  className="flex-1 bg-transparent outline-none border-none text-terminal-bright caret-transparent"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <span className="terminal-cursor inline-block h-4 w-1 bg-terminal-bright" />
              </div>
              {isProcessing && (
                <div className="mt-1 text-[10px] text-muted-foreground">
                  ▶ Processing<span className="animate-pulse">...</span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Collapsed icon on desktop */}
      {!isMobileHint && isCollapsed && (
        <button
          type="button"
          className="fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-black/70 text-primary shadow-terminal-glow hover:bg-primary hover:text-primary-foreground transition-colors"
          onClick={() => {
            setIsCollapsed(false)
            // setIsMaximized(true)
            inputRef.current?.focus()
          }}
          aria-label="Open terminal"
        >
          <TerminalSquare className="h-5 w-5" />
        </button>
      )}

      {/* Mobile hint bar */}
      {isMobileHint && (
        <div className={`${baseClasses} ${mobileBar} items-center justify-between px-3`}>
          <span className="text-[11px]">
            Try: <span className="text-primary">cd about</span> |{' '}
            <span className="text-primary">cd projects</span> |{' '}
            <span className="text-primary">cd skills</span>
          </span>
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center border border-border bg-black/50 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={() => setIsMaximized(true)}
          >
            <Maximize2 className="h-3 w-3" />
          </button>
        </div>
      )}
    </>
  )
}

