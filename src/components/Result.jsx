export default function Result({ restart, result }) {
    return (
        <div className={result === 'win' ? 'win' : 'lose'}>
            <iframe src={result === 'win' ? "https://giphy.com/embed/plrhd7RveGGZy" : "https://giphy.com/embed/3jtkP4aEpOOQw"} width="480" height="360" frameBorder={0}></iframe>
            <p className="result">{result === 'win' ? 'You win!!' : 'You lose!'}</p>
            <button className="result-btn" onClick={() => {
                restart();
            }}>Restart</button>
        </div>
    )  
}