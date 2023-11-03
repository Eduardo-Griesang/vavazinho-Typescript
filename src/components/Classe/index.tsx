import { IPlayer } from "../../shared/interfaces/IPlayer";
import Player from "../Player"
import "./Classe.css"

import hexToRgba from 'hex-to-rgba';
/* ver a documentação do hexToRgba para mais detalhes, mas basicamente ele recebe um hex que no caso é o 'props.color'
e um segundo paramentro que dita a opacidade do hex, deixando assim o background mais opaco do que a cor de destaque */

interface ClasseProps{
    color: string
    players: IPlayer[]
    label: string
    primaryColor: string
    changeColor: (color: string, element:string) => void
    removePlayer: (index: number) => void
    changeFavorite: (index: number) => void
}

const Classe = ({color, players, label, removePlayer, changeFavorite, changeColor}:ClasseProps) => {

    /* changeBackground é chamado quando o input de cor é acionado, ele pega a cor selecionada e o titulo do elemento
    e passa esses valores para a função "changeColor" que se encontra no "App.js" */
    const changeBackground = (e:React.ChangeEvent<HTMLInputElement>) => {
        const color = e.target.value
        const element = e.target.parentNode.firstChild.innerHTML
        changeColor(color, element)
    }

    /* a primeira parte do return faz com que somente as classes que possuirem length maior do que 0 sejam exibidas 
    mostrando o card do 'Player', ou seja, classes sem nenhum player dentro retornarão "false" ao "lenght > 0"
    passando assim a segunda parte do codigo, que simplismente trás uma mensagem de nenhum player cadastrado */
    return (
        (players.length > 0) ? <section className="classe" style={{background: hexToRgba(color, 0.55)}}>

            <h1 className="classe-title" style={{borderColor: color}}>{label}</h1>

            <input value={color} onChange={event => changeBackground} type="color" className="classe-color" />

            <div className="classe-players">
                {players.map((player, index) =>
                    <Player 
                        key = {index}
                        color = {color} 
                        name = {player.name} 
                        img = {player.img} 
                        id = {player.id}
                        favorite = {player.favorite}
                        removePlayer = {removePlayer}
                        changeFavorite = {changeFavorite}
                    />
                )}
            </div>

        </section>
        : <section className="classe" style={{background: hexToRgba(color, 0.55) }}>

                <h1 className="classe-title" style={{borderColor: color}}>{label}</h1>

                <input value={color} onChange={changeBackground} type="color" className="classe-color" />

                <div className="classe-players">
                    <h2>Ainda não extistem players desta classe cadastrados</h2>
                </div>

            </section>
    )
}

export default Classe