import { useEffect, useMemo, useState } from 'react'

type BootSequenceProps = {
  onComplete: () => void
}

type LineState = {
  text: string
  status: 'ok' | 'warn' | 'info' | null
  done: boolean
}

const BOOT_LINES: { text: string; status: 'ok' | 'warn' | 'info' | null; delay?: number }[] = [
  { text: 'BIOS v2.1.0 — Portfolio Firmware', status: 'info' },
  { text: 'CPU: Full-Stack Dev @ 3.0 GHz × 1 core', status: 'info' },
  { text: 'RAM: 3 years experience detected', status: 'info' },
  { text: 'Checking boot device...', status: null },
  { text: 'Loading kernel modules', status: 'ok' },
  { text: 'Started System Logging Service', status: 'ok' },
  { text: 'Started Network Manager', status: 'ok' },
  { text: 'Mounting /dev/projects', status: 'ok' },
  { text: 'Mounting /dev/skills', status: 'ok' },
  { text: 'Reached target Multi-User System', status: 'ok' },
  { text: 'Certificate chain validated', status: 'ok' },
  { text: 'Loading user profile: guest@portfolio', status: 'ok' },
  { text: 'Portfolio services initialized', status: 'ok' },
  { text: 'Starting terminal interface', status: 'ok', delay: 200 },
]

function getTimestamp(offsetMs: number) {
  const base = new Date()
  base.setTime(base.getTime() - (BOOT_LINES.length * 80) + offsetMs)
  return `[${String(base.getMinutes()).padStart(2,'0')}:${String(base.getSeconds()).padStart(2,'0')}.${String(base.getMilliseconds()).padStart(3,'0')}]`
}

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [lines, setLines] = useState<LineState[]>(
    BOOT_LINES.map(() => ({ text: '', status: null, done: false }))
  )
  const [activeIndex, setActiveIndex] = useState(0)
  const [finished, setFinished] = useState(false)
  const [accessGranted, setAccessGranted] = useState(false)
  const [progress, setProgress] = useState(0)

  const audioCtx = useMemo(() => {
    if (typeof window === 'undefined' || !window.AudioContext) return null
    return new AudioContext()
  }, [])

  const playKeySound = (freq = 1200) => {
    if (!audioCtx) return
    const now = audioCtx.currentTime
    const osc = audioCtx.createOscillator()
    const gain = audioCtx.createGain()
    osc.type = 'square'
    osc.frequency.setValueAtTime(freq + Math.random() * 300, now)
    gain.gain.setValueAtTime(0.04, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05)
    osc.connect(gain)
    gain.connect(audioCtx.destination)
    osc.start(now)
    osc.stop(now + 0.06)
  }

  const playDone = () => {
    if (!audioCtx) return
    const now = audioCtx.currentTime
    ;[440, 550, 660].forEach((freq, i) => {
      const osc = audioCtx.createOscillator()
      const gain = audioCtx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, now + i * 0.08)
      gain.gain.setValueAtTime(0.08, now + i * 0.08)
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.2)
      osc.connect(gain)
      gain.connect(audioCtx.destination)
      osc.start(now + i * 0.08)
      osc.stop(now + i * 0.08 + 0.25)
    })
  }

  useEffect(() => {
    let cancelled = false

    const typeLine = async (index: number) => {
      const entry = BOOT_LINES[index]
      if (!entry) return

      if (entry.delay) await new Promise((r) => setTimeout(r, entry.delay))

      for (let i = 0; i < entry.text.length; i++) {
        if (cancelled) return
        setLines((prev) => {
          const next = [...prev]
          next[index] = { text: entry.text.slice(0, i + 1), status: null, done: false }
          return next
        })
        playKeySound()
        await new Promise((r) => setTimeout(r, 18 + Math.random() * 25))
      }

      if (cancelled) return

      setLines((prev) => {
        const next = [...prev]
        next[index] = { text: entry.text, status: entry.status, done: true }
        return next
      })
      setProgress(Math.round(((index + 1) / BOOT_LINES.length) * 100))

      await new Promise((r) => setTimeout(r, 80))

      if (index < BOOT_LINES.length - 1) {
        setActiveIndex(index + 1)
        await typeLine(index + 1)
      } else {
        if (cancelled) return
        setFinished(true)
        playDone()
        await new Promise((r) => setTimeout(r, 400))
        setAccessGranted(true)
        setTimeout(onComplete, 900)
      }
    }

    typeLine(0)
    return () => { cancelled = true }
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black terminal-scanlines">
      <div className="relative w-full max-w-2xl border border-border bg-black shadow-terminal-glow terminal-screen-glow overflow-hidden">

        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-border bg-black px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive opacity-70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500 opacity-70" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary opacity-70" />
          </div>
          <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">
            CRT Bootloader — Portfolio OS v1.0
          </span>
          <span className="text-[10px] font-mono text-primary">{progress}%</span>
        </div>

        {/* Boot log */}
        <div className="px-5 py-4 font-mono text-xs leading-6 min-h-[340px]">
          {lines.map((line, i) => {
            const entry = BOOT_LINES[i]
            const isActive = activeIndex === i && !line.done
            const show = i <= activeIndex

            if (!show) return null

            return (
              <div key={i} className="flex items-start gap-3">
                {/* Timestamp */}
                <span className="text-muted-foreground/40 shrink-0 select-none">
                  {line.done ? getTimestamp(i * 120) : '          '}
                </span>

                {/* Status badge */}
                <span className="shrink-0 w-14 text-right">
                  {line.done && entry.status === 'ok' && (
                    <span className="text-primary">[ OK ]</span>
                  )}
                  {line.done && entry.status === 'warn' && (
                    <span className="text-yellow-400">[ WARN ]</span>
                  )}
                  {line.done && entry.status === 'info' && (
                    <span className="text-muted-foreground">[INFO]</span>
                  )}
                  {(isActive || (!line.done && line.text)) && (
                    <span className="text-muted-foreground/40">[ .... ]</span>
                  )}
                </span>

                {/* Text */}
                <span className={
                  entry.status === 'info'
                    ? 'text-muted-foreground'
                    : 'text-terminal-bright'
                }>
                  {line.text}
                  {isActive && (
                    <span className="inline-block w-[0.5ch] h-[1em] bg-terminal-bright align-middle ml-px animate-pulse" />
                  )}
                </span>
              </div>
            )
          })}
        </div>

        {/* Progress bar */}
        <div className="border-t border-border px-5 py-3 space-y-1.5">
          <div className="h-1 w-full bg-border overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
            <span>{finished ? 'Boot complete' : 'Booting...'}</span>
            <span>{progress}% loaded</span>
          </div>
        </div>

        {/* Access Granted overlay */}
        {accessGranted && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
            <div className="text-center space-y-2 animate-pulse">
              <p className="text-3xl md:text-4xl font-mono font-bold text-primary tracking-[0.3em]">
                ACCESS GRANTED
              </p>
              <p className="text-xs font-mono text-muted-foreground tracking-widest">
                Loading portfolio...
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
