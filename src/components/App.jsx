import { useState, useEffect, useRef } from "react";
import Scoreboard from "./Scoreboard";
import DifficultySelector from "./DifficultySelector";
import Game from './Game'

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isSelected, setIsSelected] = useState([]);
  const [difficulty, setDifficulty] = useState('');

  return (
    <>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      {difficulty === ''
        ? <DifficultySelector setDifficulty={setDifficulty} />
        : <Game difficulty={difficulty} />
      }
    </>
  )
  
}

export default App