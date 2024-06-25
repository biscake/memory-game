import { useEffect, useMemo, useRef } from "react";

const apiTemplate = 'https://pokeapi.co/api/v2';

export default function Card({ data, handleCardSelect }) {
  return (
    <button className="card">
      <img 
        src={data.imgSrc} 
        alt={data.name} 
        key={data.id} 
        onClick={() => handleCardSelect(data.id)}
      />
      {data.name}
    </button>
  )
}

