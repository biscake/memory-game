function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className="scoreboard">
      Score:{' ' + currentScore} <br />
      Best Score: {' ' + bestScore}
    </div>
  )
}

export default Scoreboard