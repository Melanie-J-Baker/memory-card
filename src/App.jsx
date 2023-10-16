import { useState } from 'react'
import './styles/App.css';
import characters from './characters'
import GameArea from './components/GameArea';

function App() {
  const [currentCharacters, setCurrentCharacters] = useState([]);
  const [toDisplay, setToDisplay] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const getCharacters = () => {
    let selectedCharacters = [];
    while (selectedCharacters.length < 10) {
      const randomNumber = Math.floor(Math.random() * 10);
      if (!selectedCharacters.includes(characters[randomNumber])) {
        selectedCharacters.push(characters[randomNumber]);
      }
    }
    setCurrentCharacters(selectedCharacters);
    shuffle(selectedCharacters);
  };

  const shuffle = (arr) => {
    let shuffled = [];
    let clicked = 0;
    while (shuffled.length < 10) {
      const randomNumber = Math.floor(Math.random() * arr.length);
      const character = arr[randomNumber];
      if (!shuffled.includes(character) && (clicked < 9 || !character.clicked)) {
        shuffled.push(character);
        clicked += +character.clicked
      }
      setToDisplay(shuffled);
    }
  }

  const handleScore = () => {
    setScore(score + 1)
    if(score >= highScore) {
      setHighScore(highScore + 1)
    }
  };

  const checkWin = (character) => {
    if (character.clicked) {
      return 'lose'
    }
    if (score === 10) {
      return 'win'
    } else {
      return ""
    }
  };

  return (
    <div className='main'>
      <GameArea
        getCharacters={getCharacters}
        setCurrentCharacters={setCurrentCharacters}
        setToDisplay={setToDisplay}
        currentCharacters={currentCharacters}
        toDisplay={toDisplay}
        shuffle={shuffle}
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
        handleScore={handleScore}
        checkWin={checkWin}
      />
    </div>
  )
}

export default App
