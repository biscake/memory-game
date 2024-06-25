import { useEffect, useMemo, useRef } from "react";

const apiTemplate = 'https://pokeapi.co/api/v2';

export default function Card({ name }) {
  // load image from api
  // const imgUrl = useMemo(() => getImgUrl(name), [name]);
  let imgUrl = useRef('')
  useMemo(() => loadAPI(name).then(r => {
    imgUrl.current = r;
  }), [name])
  console.log('imgurl', imgUrl);

  return (
    <div>
      
    </div>
  )
}

async function loadAPI(name) {
  const result = await fetch(apiTemplate + '/pokemon/' + name);
  const json = await result.json();
  const imgUrl = json.sprites['front_default'];
  console.log(imgUrl);
  return imgUrl;
}