import "./Player.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface PlayerProps{
    removePlayer: (value: number) => void
    changeFavorite: (value: number) => void
    img: string
    id: number
    name: string
    favorite: boolean
    color: string
}

const Player = ({changeFavorite, removePlayer, img, id, name, favorite, color}:PlayerProps) => {
    
    const deletePlayer = () => {
        removePlayer(id)
    }

    const change = () => {
        changeFavorite(id)
    }

    return (
        <div className="player" style={{background:`linear-gradient(180deg, ${color} 30%, #F2F2F2 30%)`}}>

                <FontAwesomeIcon icon={["fas", "x"]} className="player-btn" onClick={deletePlayer}/>

                <img src={img} alt={name}/>
                <h4>{name}</h4>

                <button className="favorite" onClick={change}>
                    {favorite 
                        ? <FontAwesomeIcon icon={["fas" , "star"]} style={{color: "#fbdb09",}} /> 
                        : <FontAwesomeIcon icon={["far", "star"]} />}
                </button>
        </div>
    )
}

export default Player