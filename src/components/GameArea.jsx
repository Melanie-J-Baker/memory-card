import { useEffect, useState } from 'react';
import Header from './Header'
import Card from './Card';
import Result from './Result';

export default function GameArea({
    getCharacters,
    currentCharacters,
    toDisplay,
    shuffle,
    score,
    highScore,
    setScore,
    setHighScore,
    setCurrentCharacters,
    handleScore,
    checkWin
}) {
    const [flipped, setFlipped] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [result, setResult] = useState("");

    useEffect(() => {
        getCharacters();

        return () => {
            setCurrentCharacters([]);
            setScore(0);
            setHighScore(0);
            currentCharacters.forEach(char => {
                char.clicked = false;
            })
        }
    }, []);

    const handleClickCard = (character) => {
        setClicked(true);
        if (clicked) return;

        let roundResult = checkWin(character);
        setResult(roundResult);
        character.clicked = true;
        if (roundResult !== "") {
            if (roundResult === "win") handleScore();
            setClicked(false)
            return
        }
        handleScore();

        setFlipped(true);
        setTimeout(() => {
            shuffle(currentCharacters)
        }, 600);
        setTimeout(() => {
            setFlipped(false);
            setClicked(false);
            roundResult = "";
        }, 600);
    }

    const restart = () => {
        setScore(0);
        setResult("");
        currentCharacters.forEach(char => {
            char.clicked = false;
        });
        getCharacters();
    };

    return (
        <>
            <Header score={score} highScore={highScore} />
            <div className="cards">
                {toDisplay.map(character => {
                    return (
                        <Card
                            key={character.id}
                            character={character}
                            flipped={flipped}
                            handleClickCard={handleClickCard}
                        />
                    );
                })}
            </div>
            {result !== '' &&
                <Result
                    restart={restart}
                    result={result}
                />
            }
        </>
    )
}