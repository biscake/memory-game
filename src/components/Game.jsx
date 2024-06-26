import { useEffect, useRef, useState } from "react";
import Card from "./Cards/Card";
import Pokemons from "./Cards/ExampleCards";
import { getRandomCardIds, cardRandomizer } from "./Utilities";


export default function Game({ difficulty, updateScore, onLose, restartGame }) {
  const [selected, setSelected] = useState([]);
  const currentGameCardsId = useRef(getRandomCardIds(Pokemons, difficulty));
  const idToDisplay = cardRandomizer(currentGameCardsId.current, selected, difficulty);

  function handleCardSelect(id) {
    document.querySelector('.cards').style.animation = 'animateHideCards 0.5s ease-in forwards';
    setTimeout(() => {
      if (!selected.includes(id)) {
        setSelected([...selected, id]);
        updateScore();
      } else {
        setSelected([]);
        onLose();
      }  
      document.querySelector('.cards').style.animation = 'animateShowCards 0.5s ease-in forwards';    
    }, 500);

  }

  return (
    <div className="game">
      <p> {difficulty} </p>
      <div className="cards">
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
      </div>
      <button className="restartBtn" onClick={() => restartGame()}>restart</button>
    </div>
  )
}
