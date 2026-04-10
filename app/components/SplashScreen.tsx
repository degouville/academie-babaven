'use client'

import { useEffect, useState } from 'react'

// 3 layers — exits in order: top first, base last
// Each wipes up with staggered delay so blend modes are visible mid-transition
const LAYERS = [
  { key: 'top',  bg: 'var(--blue)', blend: 'overlay',  delay: 0   },
  { key: 'mid',  bg: 'var(--red)',  blend: 'screen',   delay: 100 },
  { key: 'base', bg: 'var(--ink)',  blend: 'normal',   delay: 200 },
] as const

export default function SplashScreen() {
  const [exiting, setExiting] = useState(false)
  const [done,    setDone]    = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setExiting(true), 900)
    // done after last layer finishes: 900 + 200 delay + 1000 duration = 2100
    const t2 = setTimeout(() => setDone(true), 2300)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (done) return null

  return (
    <div className="splash" aria-hidden="true">
      {LAYERS.map(({ key, bg, blend, delay }) => (
        <div
          key={key}
          className={`splash-layer${exiting ? ' splash-layer--exit' : ''}`}
          style={{
            background: bg,
            mixBlendMode: blend,
            transitionDelay: exiting ? `${delay}ms` : '0ms',
          } as React.CSSProperties}
        >
          {key === 'base' && (
            <div className="splash-logo">
              <div className="splash-logo-icon">B</div>
              <span className="splash-logo-name">Babaven Académie</span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
