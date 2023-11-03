import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Classe from "./components/Classe";
import Footer from "./components/Footer";

import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub, faInstagram, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faEye, faEyeSlash, faX, faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { IPlayer } from "./shared/interfaces/IPlayer";

library.add(faFontAwesome, faLinkedin, faGithub, faInstagram, faX, fasStar, farStar, faEye, faEyeSlash)

/* precisei instalar todos os passos do font awesome nesse link " https://fontawesome.com/docs/web/use-with/react/ " 
adicionando o " npm i --save @fortawesome/free-brands-svg-icons  " que não aparece na documentação, esse comando
adiciona os icones de empresas */

function App() {

  /* array dos players cadastrados */
  const [Players, setPlayer] = useState<IPlayer[]>([])

  const SetNewPlayer = (player:IPlayer) => {
    setPlayer([...Players, player])
  }
 
  /* essa função foi passada como prop até chegar no componente "Player", se o botão de delete for clicado la, ela retorna o "player.id". 
  O "player.id" chega nessa função como index e aqui é feito um novo "setPlayer do useState Player"
  usando o filter. Somente os players que não possuem o mesmo id que o index passado anteriormente entram na const "Players do useState" */
  function removePlayer (index:number) {
    setPlayer(Players.filter(player => player.id !== index))
  }

  /* essa função é passada até o componente "Player", lá ela devolve o id do player que foi clicado,
  neste id, ele muda o estado de "player.favorite" para o contrário de "player.favorite", 
  ou seja, de 'true' para 'false' e vice versa */
  function changeFavorite (index:number) {
    setPlayer(Players.filter(player => {
      if (player.id === index){
        player.favorite = !player.favorite
      }

      return player
    }))
  }

  /* este array 'classes' é uma const State, ou seja, se algum item do array for mudado pelo "setClasses" o React vai atualiza-lo automaticamente */
  const [ classes , setClasses ] = useState([
    {
      name: "Duelista",
      color: "#C70039"
    },
    {
      name: "Controlador",
      color: "#427D9D"
    },
    {
      name: "Iniciador",
      color: "#A2C579"
    },
    {
      name: "Sentinela",
      color: "#D6D46D"
    }
  ])

  /* 'changeColor' é passado como prop para o componente "Classe", la ele é chamado quando o input de cor muda, passando
  de volta a cor que foi selecionada mais o nome do element onde foi selecionado. 
  Aqui usamos o filter() procurando por um item que tenha o mesmo nome que o element, e muda sua cor para a cor selecionada.
  Os elementos que não tem o mesmo nome do element permanecem com sua cor original */
  function changeColor (color:string, element:string) {
    setClasses(classes.filter((classe) => {
      if (classe.name === element){
        classe.color = color
      }
      return classe
    })) 
  }

  let [ formView, setFormView ] = useState( true )

  function changeformView () {
    setFormView(formView = !formView)
  }

  return (
    <div>
      <Banner imageSource="/imgs/banner.png" altText="Banner do Valorant Teams" />

      <div className="form-block">
        <Form 
          classes = {classes} 
          playerAdded={player => SetNewPlayer(player)} 
          formTitle='Preencha os dados para adicionar o card do player:'
          formView = {formView}
        />

        <button className="show-icon" onClick={changeformView}>
          {formView 
            ? <FontAwesomeIcon icon={["fas", "eye-slash"]} style={{color: "#f5f5f5",}} />
            : <FontAwesomeIcon icon={["fas", "eye"]} style={{color: "#f5f5f5",}} />
          }
        </button>
      </div>

      {/* map das classes criando componentes 'Classe' */}
      {classes.map(classe => 
        <Classe 
          key = {classe.name} 
          label = {classe.name} 
          primaryColor = {classe.color} 
          color = {classe.color} 
          players = {Players.filter(player => player.classe.trim() === classe.name.trim())}
          removePlayer = {removePlayer}
          changeColor = {changeColor}
          changeFavorite = {changeFavorite}
        />)
      }
            {/* Essa parte especifica pega o state 'Players' e faz um filtro para comparar a classe a 
              quem ele pertence com o nome de cada classe dentro da const 'classes', para assim, passar as informações somente se elas batem 
              o ".trim()" remove quaisquer espaços que tenham antes ou depois*/}

      <Footer/>
    </div>
  ) 
}

export default App; 
