function getRandomCardIds(arr, difficulty) {
  let numberOfCards;
  if (difficulty === 'easy') {
    numberOfCards = 5; 
  } else if (difficulty === 'medium') {
    numberOfCards = 7;
  } else if (difficulty === 'hard') {
    return [...Array(arr.length).keys()];
  }

  let IdArr = [];
  while (IdArr.length !== numberOfCards) {
    const randomId = Math.floor(Math.random() * arr.length)
    if (!IdArr.includes(randomId)) {
      IdArr.push(randomId);
    }
  }

  return IdArr;
}

function cardRandomizer(arr, selected, difficulty) {
  //need at least one not thats not selected
  let numberOfCards;
  if (difficulty === 'easy') {
    numberOfCards = 3; 
  } else if (difficulty === 'medium') {
    numberOfCards = 4;
  } else if (difficulty === 'hard') {
    numberOfCards = 5;
  }

  // select random id from 0 to 9
  let IdArr = [];
  while (IdArr.length !== numberOfCards) {
    const randomIdx = Math.floor(Math.random() * arr.length);
    const id = arr[randomIdx]
    if (!IdArr.includes(id)) {
      IdArr.push(id);
    }
  }

  // check if theres at least one thats not been selected
  let isValid = false;
  IdArr.forEach(id => {
    if (!selected.includes(id)) {
      isValid = true;
    }
  });

  if (isValid) {
    return IdArr;
  } else {
    //replace random slot with a non selected Id
    const nonSelectedArr = [...arr].filter(id => !selected.includes(id));
    const randomIdx = Math.floor(Math.random() * IdArr.length);
    const randomNonSelectedId = nonSelectedArr[Math.floor(Math.random() * nonSelectedArr.length)];
    IdArr[randomIdx] = randomNonSelectedId;
    return IdArr;
  }
}

export {getRandomCardIds, cardRandomizer}