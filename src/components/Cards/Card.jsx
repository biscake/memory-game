import { useState } from "react";
import { animateCard } from "../Utilities";

const apiTemplate = 'https://pokeapi.co/api/v2';

export default function Card({ data, handleCardSelect }) {
  const [rotateAngle, setRotateAngle] = useState({X: 0, Y: 0});

  function handleMouseMove(e) {
    const [rotateXAngle, rotateYAngle] = animateCard(e);
    setRotateAngle({X: rotateXAngle, Y: rotateYAngle});
  }

  let style = {
    transform: `rotateY(${rotateAngle.X + 'deg'}) rotateX(${rotateAngle.Y + 'deg'})`
  }

  function handleMouseleave() {
    setTimeout(() => {
      setRotateAngle({X: 0, Y: 0});
    }, 200);
  }

  return (
    <div className="card">
      <button onMouseMove={(e) => handleMouseMove(e)} style={style} onMouseLeave={() => handleMouseleave()}>
        <img 
          src={data.imgSrc} 
          alt={data.name} 
          key={data.id} 
          onClick={() => handleCardSelect(data.id)}
        />
        {data.name}
      </button>
    </div>
  )
}

