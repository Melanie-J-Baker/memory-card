export default function Header({score, highScore}) {
    return (
        <div className='header'>
            <h1> FUTURAMA MEMORY GAME</h1>
            <div className="scores">
                <p className='score'>Score: {score}/12</p>
                <p className='highScore'>High Score: {highScore}/12</p>
            </div>
        </div>
    )
}