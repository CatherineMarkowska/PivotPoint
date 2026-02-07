import ChapterCard from './ChapterCard'
import './Era.css'

function Era({ onStart }) {
  const chapters = [
    { number: '01', title: 'The Crash', date: 'October 24, 1929', cta: 'Start Here' },
    { number: '02', title: 'The Unemployed', date: 'Winter, 1930' },
    { number: '03', title: 'Dust and Despair', date: 'The Dust Bowl Years' },
    { number: '04', title: 'The Long Road Back', date: 'Hope Returns' },
  ]

  return (
    <section className="era-page">
      <div>
        <h2>The chapter</h2>
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
    </section>
  )
}

export default Era
