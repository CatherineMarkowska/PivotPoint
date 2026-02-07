import './ChapterCard.css'

function ChapterCard({ chapter, onStart }) {
  return (
    <article className="chapter-card">
      <div className="chapter-number">{chapter.number}</div>
      <div className="chapter-body">
        <h2>{chapter.title}</h2>
        <p>{chapter.date}</p>
      </div>
      {chapter.cta && (
        <button type="button" onClick={onStart}>
          {chapter.cta}
        </button>
      )}
    </article>
  )
}

export default ChapterCard
