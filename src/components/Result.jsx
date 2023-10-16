export default function Result({ restart, result }) {
    return (
        <div className={result === 'win' ? 'win' : 'lose'}>
            <p>{result === 'win' ? 'You win!!' : 'You lose!'}</p>
            <button onClick={() => {
                restart();
            }}>Restart Game</button>
        </div>
    )  
}