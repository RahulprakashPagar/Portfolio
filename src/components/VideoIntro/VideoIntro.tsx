'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import s from './VideoIntro.module.css'
import CinematicLayer from '../CinematicLayer/CinematicLayer'

export default function VideoIntro() {
  const videoRef    = useRef<HTMLVideoElement>(null)
  const navRef      = useRef<HTMLDivElement>(null)
  const pillRef     = useRef<HTMLDivElement>(null)
  const firstRef    = useRef<HTMLSpanElement>(null)
  const lastRef     = useRef<HTMLSpanElement>(null)
  const divRef      = useRef<HTMLDivElement>(null)
  const roleRef     = useRef<HTMLParagraphElement>(null)
  const ctaRef      = useRef<HTMLDivElement>(null)
  const statsRef    = useRef<HTMLDivElement>(null)
  const sideRef     = useRef<HTMLDivElement>(null)
  const controlsRef = useRef<HTMLDivElement>(null)
  const scrollRef   = useRef<HTMLDivElement>(null)
  const tickerRef   = useRef<HTMLDivElement>(null)

  const [muted,   setMuted]   = useState(true)
  const [playing, setPlaying] = useState(true)
  const [hint,    setHint]    = useState(true)
  const [lineActive, setLineActive] = useState(false)

  useEffect(() => {
    let gsap: any, ctx: any
    const run = async () => {
      const m = await import('gsap')
      gsap = m.default || m.gsap

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ delay: 0.3 })

        // Nav fade in
        tl.to(navRef.current, { opacity:1, y:0, duration:0.8, ease:'power3.out' })

        // Status pill
        .to(pillRef.current, {
          opacity:1, y:0, duration:0.7, ease:'power3.out'
        }, '-=0.4')

        // RAHUL
        .to(firstRef.current, {
          opacity:1, y:0, duration:1.1, ease:'power4.out'
        }, '-=0.3')

        // PAGAR (outline)
        .to(lastRef.current, {
          opacity:1, y:0, duration:1.1, ease:'power4.out',
          onComplete: () => setLineActive(true)
        }, '-=0.75')

        // divider
        .to(divRef.current, {
          opacity:1, y:0, duration:0.6, ease:'power3.out'
        }, '-=0.5')

        // role
        .to(roleRef.current, {
          opacity:1, y:0, duration:0.7, ease:'power3.out'
        }, '-=0.4')

        // cta
        .to(ctaRef.current, {
          opacity:1, y:0, duration:0.6, ease:'power3.out'
        }, '-=0.4')

        // stats
        .to(statsRef.current, {
          opacity:1, y:0, duration:0.6, ease:'power3.out'
        }, '-=0.35')

        // side panel
        .to(sideRef.current, {
          opacity:1, duration:0.7, ease:'power2.out'
        }, '-=0.4')

        // controls
        .to(controlsRef.current, {
          opacity:1, duration:0.5, ease:'power2.out'
        }, '-=0.3')

        // scroll
        .to(scrollRef.current, {
          opacity:0.6, duration:0.5
        }, '-=0.2')

        // ticker
        .to(tickerRef.current, {
          opacity:1, duration:0.5
        }, '-=0.3')
      })
    }
    run()
    return () => ctx?.revert()
  }, [])

  // Auto-hide sound hint
  useEffect(() => {
    const t = setTimeout(() => setHint(false), 5500)
    return () => clearTimeout(t)
  }, [])

  const toggleMute = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
    setHint(false)
  }, [])

  const togglePlay = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.paused ? v.play() : v.pause()
    setPlaying(!v.paused)
  }, [])

  const scrollDown = useCallback(() => {
    document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <section className={s.hero}>

      {/* ── FULLSCREEN VIDEO ── */}
      <div className={s.videoBg}>
        <video
          ref={videoRef}
          src="/video/hero.mp4"
          autoPlay muted loop playsInline preload="auto"
        />
      </div>

      {/* ── OVERLAYS ── */}
      <div className={s.overlayVignette} />
      <div className={s.overlayLeft} />
      <div className={s.overlayBottom} />
      <div className={s.overlayTop} />

      {/* ── GLOWS ── */}
      <div className={s.glowAmber} />
      <div className={s.glowBlue} />

      {/* ── GRAIN ── */}
      <div className={s.grain} />

      {/* ── THREE.JS ── */}
      <div className={s.canvas}>
        <CinematicLayer />
      </div>

      {/* ══ NAVIGATION ══ */}
      <nav className={s.nav} ref={navRef} style={{ opacity:0 }}>
        <div className={s.navLogo}>
          Rahul <span>Pagar</span>
        </div>
        <div className={s.navLinks}>
          <a className={s.navLink} onClick={() => document.getElementById('stats')?.scrollIntoView({behavior:'smooth'})}>Experience</a>
          <a className={s.navLink} onClick={() => document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}>Projects</a>
          <a className={s.navLink} href="https://github.com/RahulprakashPagar" target="_blank" rel="noopener">GitHub</a>
          <a className={s.navLink} href="https://linkedin.com/in/rahul-pagar1993" target="_blank" rel="noopener">LinkedIn</a>
        </div>
        <a className={s.navCta} href="mailto:rahulpagar423@gmail.com">Hire Me</a>
      </nav>

      {/* ══ HERO CONTENT ══ */}
      <div className={s.content}>

        {/* Status pill */}
        <div className={s.statusPill} ref={pillRef} style={{ opacity:0 }}>
          <div className={s.pulse} />
          <span className={s.statusText}>
            Based in Dublin · <em>Open to opportunities</em>
          </span>
        </div>

        {/* Name */}
        <div className={s.nameWrap}>
          <span className={s.nameFirst} ref={firstRef} style={{ opacity:0 }}>
            Rahul
          </span>
          <span
            className={`${s.nameLast} ${lineActive ? s.lineActive : ''}`}
            ref={lastRef}
            style={{ opacity:0 }}
          >
            Pagar
          </span>
        </div>

        {/* Divider */}
        <div className={s.divider} ref={divRef} style={{ opacity:0 }}>
          <div className={s.dividerLine} />
          <span className={s.dividerText}>Senior Data Analyst · MSc Business Analytics</span>
        </div>

        {/* Role */}
        <p className={s.role} ref={roleRef} style={{ opacity:0 }}>
          <strong>5+ years</strong> turning raw enterprise data into decisions —
          SQL, Python, Power BI, Machine Learning. From manufacturing floors at{' '}
          <strong>Škoda VW & Caterpillar</strong> to EV grid forecasting and
          healthcare risk prediction.
        </p>

        {/* CTA */}
        <div className={s.ctaRow} ref={ctaRef} style={{ opacity:0 }}>
          <a className={s.btnPrimary} href="mailto:rahulpagar423@gmail.com">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Get in touch
          </a>
          <a className={s.btnSecondary} href="https://github.com/RahulprakashPagar" target="_blank" rel="noopener">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            View GitHub
          </a>
          <a className={s.btnSecondary} href="https://linkedin.com/in/rahul-pagar1993" target="_blank" rel="noopener">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Stats strip */}
        <div className={s.statsRow} ref={statsRef} style={{ opacity:0 }}>
          {[
            { num:'5+',  label:'Years experience' },
            { num:'13',  label:'GitHub projects' },
            { num:'40%', label:'Query speed gain' },
            { num:'MSc', label:'Business Analytics' },
          ].map((st, i) => (
            <div key={i} className={s.statItem}>
              <span className={s.statNum}>{st.num}</span>
              <span className={s.statLabel}>{st.label}</span>
            </div>
          ))}
        </div>

      </div>

      {/* ══ SIDE PANEL ══ */}
      <div className={s.sidePanel} ref={sideRef} style={{ opacity:0 }}>
        <div className={s.socialLinks}>
          <a className={s.socialLink} href="https://github.com/RahulprakashPagar" target="_blank" rel="noopener" title="GitHub">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
          <a className={s.socialLink} href="https://linkedin.com/in/rahul-pagar1993" target="_blank" rel="noopener" title="LinkedIn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a className={s.socialLink} href="mailto:rahulpagar423@gmail.com" title="Email">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>
        <div className={s.socialLine} />
      </div>

      {/* ══ VIDEO CONTROLS ══ */}
      <div className={s.controls} ref={controlsRef} style={{ opacity:0 }}>
        {hint && (
          <div className={s.soundHint} onClick={toggleMute}>
            <div className={s.soundDot} />
            Tap for sound
          </div>
        )}
        <button className={s.ctrlBtn} onClick={togglePlay} title={playing ? 'Pause':'Play'}>
          {playing
            ? <svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
            : <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
          }
        </button>
        <button className={s.ctrlBtn} onClick={toggleMute} title={muted ? 'Unmute':'Mute'}>
          {muted
            ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
            : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/><path d="M15.54,8.46a5,5,0,0,1,0,7.07"/><path d="M19.07,4.93a10,10,0,0,1,0,14.14"/></svg>
          }
        </button>
      </div>

      {/* ══ SCROLL ══ */}
      <div className={s.scrollCta} ref={scrollRef} style={{ opacity:0 }} onClick={scrollDown}>
        <span className={s.scrollLabel}>Scroll</span>
        <div className={s.scrollBar} />
      </div>

      {/* ══ TICKER ══ */}
      <div className={s.ticker} ref={tickerRef} style={{ opacity:0 }}>
        <div className={s.tickerInner}>
          <div className={s.tickerDot} />
          <span className={s.tickerText}>
            Currently available · <em>Dublin, Ireland</em>
          </span>
        </div>
      </div>

    </section>
  )
}
