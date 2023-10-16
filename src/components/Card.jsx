export default function Card({ character, flipped, handleClickCard }) {
    return (
        <div className={flipped ? "card flipped" : "card"} onClick={() => { handleClickCard(character) }}>
            <div className="frontCard">
                <div className="image" style={{ backgroundImage: `url(${character.src})` }}></div>
                <div className="name">{character.name}</div>
            </div>
            <div className="backCard"></div>
        </div>
    )
}