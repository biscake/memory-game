import { useEffect, useMemo, useRef, useState } from "react";
import DifficultySelector from "./DifficultySelector";
import Game from './Game';
import Scoreboard from "./Scoreboard";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [difficulty, setDifficulty] = useState('');

  const scoreToWin = useMemo(() => {
  let limit;
  if (difficulty === 'easy') {
    limit = 3; 
  } else if (difficulty === 'medium') {
    limit = 5;
  } else if (difficulty === 'hard') {
    limit = 10;
  }
  return limit;
  }, [difficulty])

  function updateScore() {
    const newCurrent = currentScore + 1;
    setCurrentScore(newCurrent);
    const best = bestScore;
    if (newCurrent > best) {
      setBestScore(newCurrent);
    }
  }

  function onLose() {
    setCurrentScore(0);
  }

  function restartGame() {
    setDifficulty('');
    setCurrentScore(0);
  }

  return (
    <>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      {
        difficulty === ''
        ? <DifficultySelector setDifficulty={setDifficulty} />
        : !(currentScore === scoreToWin)
          ? <Game 
              difficulty={difficulty}
              updateScore={updateScore}
              onLose={onLose}
              restartGame={restartGame}
            />
          : <p>you win</p>
      }
    </>
  )
  
}

export default App