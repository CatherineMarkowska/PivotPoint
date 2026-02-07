import { useEffect, useRef, useState } from 'react'
import ChapterCard from './ChapterCard'
import './Era.css'
import broadcastAudio from './203019__samkolber__1930s-broadcast.wav'

function Era({ onStart, onIntroAudioStart, onIntroAudioEnd }) {
  const [introStep, setIntroStep] = useState(0)
  const [introAudioPlayed, setIntroAudioPlayed] = useState(false)
  const audioRef = useRef(null)
  const chapters = [
    { number: '01', title: 'The Crash', date: 'October 24, 1929', cta: 'Start Here' },
    { number: '02', title: 'The Unemployed', date: 'Winter, 1930' },
    { number: '03', title: 'Dust and Despair', date: 'The Dust Bowl Years' },
    { number: '04', title: 'The Long Road Back', date: 'Hope Returns' },
  ]

  useEffect(() => {
    const timers = [
      setTimeout(() => setIntroStep(1), 6000),
      setTimeout(() => setIntroStep(2), 12000),
    ]

    return () => timers.forEach(clearTimeout)
  }, [])

  useEffect(() => {
    if (!audioRef.current) return
    if (introAudioPlayed) return
    onIntroAudioStart?.()
    audioRef.current.currentTime = 0
    audioRef.current.play().catch(() => {})
  }, [introAudioPlayed, onIntroAudioStart])

  useEffect(() => {
    if (!audioRef.current) return
    if (introStep >= 2) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      onIntroAudioEnd?.()
    }
  }, [introStep, onIntroAudioEnd])

  return (
    <section className="era-page">
      <audio
        ref={audioRef}
        src={broadcastAudio}
        preload="auto"
        loop={false}
        onEnded={() => {
          setIntroAudioPlayed(true)
          onIntroAudioEnd?.()
        }}
      />
      {introStep < 2 && (
        <div
          className={`era-intro${introStep === 1 ? ' era-intro--outro' : ''}`}
          onPointerDown={() => {
            if (!audioRef.current) return
            if (introAudioPlayed) return
            audioRef.current.play().catch(() => {})
          }}
        >
          <div className="era-intro__audio">
            <svg
              className="era-intro__audio-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M4 9h4l5-4v14l-5-4H4z"
                fill="currentColor"
                opacity="0.85"
              />
              <path
                d="M16 8c1.7 1.1 2.5 2.5 2.5 4s-.8 2.9-2.5 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M18.5 6c2.2 1.6 3.5 3.6 3.5 6s-1.3 4.4-3.5 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
            <span>Sound on</span>
          </div>
          <div className="era-intro__frame" key={introStep}>
            {introStep === 0 ? 'October 24, 1929.' : 'You are about to enter history.'}
          </div>
        </div>
      )}

      {introStep >= 2 && (
        <>
          <div>
            <h2>The chapters</h2>
          </div>

          <div className="era-list">
            {chapters.map((chapter) => (
              <ChapterCard
                key={chapter.number}
                chapter={chapter}
                onStart={chapter.cta ? onStart : undefined}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}

export default Era
