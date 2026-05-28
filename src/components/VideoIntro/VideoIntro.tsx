'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import styles from './VideoIntro.module.css'
import CinematicLayer from '../CinematicLayer/CinematicLayer'

export default function VideoIntro() {
  const fgVideoRef = useRef<HTMLVideoElement>(null)
  const bgVideoRef = useRef<HTMLVideoElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)
  const locationRef = useRef<HTMLDivElement>(null)
  const nameFirstRef = useRef<HTMLSpanElement>(null)
  const nameLastRef = useRef<HTMLSpanElement>(null)
  const roleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const controlsRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const soundHintRef = useRef<HTMLDivElement>(null)

  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const [showSoundHint, setShowSoundHint] = useState(true)

  // GSAP entrance animation
  useEffect(() => {
    let gsap: any
    let ctx: any

    const initGSAP = async () => {
      const gsapModule = await import('gsap')
      gsap = gsapModule.default || gsapModule.gsap

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ delay: 0.4 })

        // Location badge
        tl.to(locationRef.current, {
          opacity: 1, y: 0, duration: 0.7,
          ease: 'power3.out'
        })

        // Tagline
        .to(taglineRef.current, {
          opacity: 1, y: 0, duration: 0.7,
          ease: 'power3.out'
        }, '-=0.4')

        // First name
        .to(nameFirstRef.current, {
          opacity: 1, y: 0, duration: 0.9,
          ease: 'power4.out'
        }, '-=0.3')

        // Last name
        .to(nameLastRef.current, {
          opacity: 1, y: 0, duration: 0.9,
          ease: 'power4.out'
        }, '-=0.65')

        // Role description
        .to(roleRef.current, {
          opacity: 1, y: 0, duration: 0.8,
          ease: 'power3.out'
        }, '-=0.5')

        // CTA strip
        .to(ctaRef.current, {
          opacity: 1, y: 0, duration: 0.7,
          ease: 'power3.out'
        }, '-=0.5')

        // Stats
        .to(statsRef.current, {
          opacity: 1, y: 0, duration: 0.7,
          ease: 'power3.out'
        }, '-=0.4')

        // Controls
        .to(controlsRef.current, {
          opacity: 1, duration: 0.6,
          ease: 'power2.out'
        }, '-=0.4')

        // Scroll indicator
        .to(scrollRef.current, {
          opacity: 0.5, duration: 0.6,
          ease: 'power2.out'
        }, '-=0.2')
      })
    }

    initGSAP()
    return () => ctx?.revert()
  }, [])

  // Auto-hide sound hint
  useEffect(() => {
    const t = setTimeout(() => setShowSoundHint(false), 5000)
    return () => clearTimeout(t)
  }, [])

  const handleScrollClick = useCallback(() => {
    const next = document.querySelector('#stats') as HTMLElement
    if (next) next.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const toggleMute = useCallback(() => {
    const vid = fgVideoRef.current
    if (!vid) return
    vid.muted = !vid.muted
    setIsMuted(vid.muted)
    setShowSoundHint(false)
  }, [])

  const togglePlay = useCallback(() => {
    const vid = fgVideoRef.current
    if (!vid) return
    if (vid.paused) {
      vid.play()
      bgVideoRef.current?.play()
      setIsPlaying(true)
    } else {
      vid.pause()
      bgVideoRef.current?.pause()
      setIsPlaying(false)
    }
  }, [])

  return (
    <section className={styles.hero} id="hero">

      {/* Ambient bg video */}
      <div className={styles.videoBg}>
        <video
          ref={bgVideoRef}
          src="/video/hero.mp4"
          autoPlay muted loop playsInline
          preload="auto"
        />
      </div>

      {/* Foreground video */}
      <div className={styles.videoFg}>
        <video
          ref={fgVideoRef}
          src="/video/hero.mp4"
          autoPlay muted loop playsInline
          preload="auto"
        />
      </div>

      {/* Gradient overlays */}
      <div className={styles.gradientLeft} />
      <div className={styles.gradientBottom} />
      <div className={styles.gradientTop} />

      {/* Ambient glows */}
      <div className={styles.ambientAmber} />
      <div className={styles.ambientBlue} />

      {/* Noise texture */}
      <div className={styles.noise} />

      {/* Three.js Cinematic Layer */}
      <div className={styles.threeCanvas}>
        <CinematicLayer />
      </div>

      {/* Main content */}
      <div className={styles.content}>
        <div className={styles.contentInner} ref={contentRef}>

          {/* Location */}
          <div className={styles.locationBadge} ref={locationRef}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
            Dublin, Ireland
          </div>

          {/* Tagline */}
          <div className={styles.tagline} ref={taglineRef}>
            <div className={styles.taglineDot} />
            <span className={styles.taglineText}>Senior Data Analyst · Open to Opportunities</span>
          </div>

          {/* Name */}
          <div className={styles.nameBlock}>
            <span className={styles.nameFirst} ref={nameFirstRef}>Rahul</span>
            <span className={styles.nameLast} ref={nameLastRef}>
              P<span className={styles.nameAccent}>ag</span>ar
            </span>
          </div>

          {/* Role */}
          <p className={styles.role} ref={roleRef}>
            <span className={styles.roleHighlight}>5+ years</span> transforming complex enterprise data into decisions.{' '}
            SQL · Python · Power BI · Machine Learning · ETL pipelines —{' '}
            <span className={styles.roleHighlight}>from factory floors to EV grid forecasting.</span>
          </p>

          {/* CTA */}
          <div className={styles.ctaStrip} ref={ctaRef}>
            <a
              className={styles.ctaPrimary}
              href="mailto:rahulpagar423@gmail.com"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Get in Touch
            </a>
            <a
              className={styles.ctaSecondary}
              href="https://github.com/RahulprakashPagar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              View GitHub
            </a>
          </div>

          {/* Quick stats */}
          <div className={styles.quickStats} ref={statsRef}>
            <div className={styles.stat}>
              <span className={styles.statNum}>5+</span>
              <span className={styles.statLabel}>Years experience</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>13</span>
              <span className={styles.statLabel}>GitHub projects</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>3</span>
              <span className={styles.statLabel}>Enterprise employers</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>MSc</span>
              <span className={styles.statLabel}>Business Analytics</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sound hint */}
      {showSoundHint && (
        <div className={styles.soundHint} ref={soundHintRef} onClick={toggleMute} style={{ cursor: 'pointer' }}>
          <div className={styles.soundHintDot} />
          Tap for sound
        </div>
      )}

      {/* Video Controls */}
      <div className={styles.videoControls} ref={controlsRef}>
        <button className={styles.controlBtn} onClick={togglePlay} title={isPlaying ? 'Pause' : 'Play'}>
          {isPlaying ? (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16"/>
              <rect x="14" y="4" width="4" height="16"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21"/>
            </svg>
          )}
        </button>
        <button className={styles.controlBtn} onClick={toggleMute} title={isMuted ? 'Unmute' : 'Mute'}>
          {isMuted ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/>
              <line x1="23" y1="9" x2="17" y2="15"/>
              <line x1="17" y1="9" x2="23" y2="15"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/>
              <path d="M15.54,8.46a5,5,0,0,1,0,7.07"/>
              <path d="M19.07,4.93a10,10,0,0,1,0,14.14"/>
            </svg>
          )}
        </button>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} ref={scrollRef} onClick={handleScrollClick}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine} />
      </div>

    </section>
  )
}
