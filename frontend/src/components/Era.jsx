import { useEffect, useState } from 'react'
import ChapterCard from './ChapterCard'
import './Era.css'

function Era({ onStart }) {
  const [introStep, setIntroStep] = useState(0)
  const chapters = [
    { number: '01', title: 'The Crash', date: 'October 24, 1929', cta: 'Start Here' },
    { number: '02', title: 'The Unemployed', date: 'Winter, 1930' },
    { number: '03', title: 'Dust and Despair', date: 'The Dust Bowl Years' },
    { number: '04', title: 'The Long Road Back', date: 'Hope Returns' },
  ]

  useEffect(() => {
    const timers = [
      setTimeout(() => setIntroStep(1), 1800),
      setTimeout(() => setIntroStep(2), 3600),
    ]

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section className="era-page">
      {introStep < 2 && (
        <div className="era-intro">
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
