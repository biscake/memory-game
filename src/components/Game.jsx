import { useEffect, useRef, useState } from "react";
import Card from "./Cards/Card";
import Pokemons from "./Cards/ExampleCards";
import { getRandomCardIds, cardRandomizer } from "./Utilities";


export default function Game({ difficulty, updateScore, onLose, restartGame }) {
  const [selected, setSelected] = useState([]);
  const currentGameCardsId = useRef(getRandomCardIds(Pokemons, difficulty));
  const idToDisplay = cardRandomizer(currentGameCardsId.current, selected, difficulty);

  function handleCardSelect(id) {
    if (!selected.includes(id)) {
      setSelected([...selected, id]);
      updateScore();
    } else {
      setSelected([]);
      onLose();
    }
  }

  return (
    <div className="game">
      <p> {difficulty} </p>
      {idToDisplay.map(id => {
        const data = Pokemons.find(entry => entry.id === id); 
        return (
            <Card p
              key={data.id} 
              data={data} 
              handleCardSelect={handleCardSelect}
            />
        )
      })}
      <button onClick={() => restartGame()}>restart</button>
    </div>
  )
}
