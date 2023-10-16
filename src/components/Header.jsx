export default function Header({score, highScore}) {
    return (
        <div className='header'>
            <h1> FUTURAMA MEMORY GAME</h1>
            <div className="scores">
                <p className='score'>Score: {score}/10</p>
                <p className='highScore'>High Score: {highScore}/10</p>
            </div>
        </div>
    )
}