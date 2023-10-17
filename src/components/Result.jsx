export default function Result({ restart, result }) {
    return (
        <div className={result === 'win' ? 'win' : 'lose'}>
            <p className="result">{result === 'win' ? 'You win!!' : 'You lose!'}</p>
            <button className="result-btn" onClick={() => {
                restart();
            }}>Restart</button>
        </div>
    )  
}