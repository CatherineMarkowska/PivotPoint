import './WorkNEarnBranch.css'

function WorkNEarnBranch3({ onNext }) {
  return (
    <section className="work-earn-branch">
      <p className="work-earn-branch__text">Branch 3 text goes here.</p>
      <div className="work-earn-branch__actions">
        <button type="button" onClick={onNext}>
          Choice 1
        </button>
        <button type="button">Choice 2</button>
        <button type="button">Choice 3</button>
      </div>
    </section>
  )
}

export default WorkNEarnBranch3
