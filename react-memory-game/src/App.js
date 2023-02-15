
import Header from './components/Header';
import React, {useState,useEffect} from 'react';
import Data from './components/Data'
import Card from './components/Card'
import { render } from '@testing-library/react';

function App() {
  const [cards, setCards] = useState(Data)
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [reset, setReset] = useState(false);
  const Won = 10;


  const incrementScore = () => {
    setScore(score => score + 1);
  };


  const resetScore = () => {
    setScore(0);
  }





  const shuffleCards = () => {
    
    const array = [...cards.array];

    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    setCards(
      { array:array});
    console.log(cards)
    
  };

  // shuffle cards in the beginnig
  useEffect(() => {
    
    shuffleCards();
  }, []);




  // winning function
  useEffect(() => {
    if (score === Won) {
      alert("You win!");
      setReset(true);
    }
  }, [score]);

  // reset game
  useEffect(() => {
    if (reset) {
      // check for new high score
      if (score > bestScore) {
        setBestScore(score);
      }

      setScore(0);
      setReset(false);
    }
  }, [reset]);









const cardElements =   
  cards.array.map(card => {
  return(<Card 
    key={card.id} 
    name={card.name}  
    image={card.image} 
    incrementScore={incrementScore}
    shuffleCards={shuffleCards}
    setReset={setReset}
    />)
})

  return (
    <>
    <Header 
    score={score}
    bestScore={bestScore}/>
    <main >
    {cardElements}
    </main>
    </>
  );
}

export default App;
