export default function DifficultySelector({setDifficulty}) {
  return (
    <div className="difficultySelector">
      <button type="button" className="dificulty" onClick={() => setDifficulty('easy')}>Easy</button>
      <button type="button" className="dificulty" onClick={() => setDifficulty('medium')}>Medium</button>
      <button type="button" className="dificulty" onClick={() => setDifficulty('hard')}>Hard</button>
    </div>
  )
}