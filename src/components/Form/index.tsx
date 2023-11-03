import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

import Button from "../Button"
import Dropdown from "../Dropdown"
import TextCamp from "../TextCamp"

import "./Form.css"
import { IPlayer } from "../../shared/interfaces/IPlayer";

interface FormProps{
    classes: string[]
    formView: boolean
    formTitle: string
    playerAdded: (player: IPlayer) => void
}

const Form = ({classes, formView, formTitle, playerAdded}: FormProps) => {

    /* recebe o array 'classes' completo, map() pega somente o nome de cada objeto do array, e coloca os nomes em um novo
    array chamado 'classesDropdown com push()'*/
    const classesDropdown:string[] = []
    classes.map(classe => classesDropdown.push(classe.name))

    /* chamado ao enviar o form, passa as variaveis a função de fora no 'App.js' e deleta os dados escritos no form 
    para deixar pronto para outro cadastro */
    const submitForm = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        playerAdded({
            name,
            img,
            classe,
            id,
            favorite
        })

        setName('')
        setImg('')
        setClasse('') 
    }

    const [name, setName] = useState('')
    const [img, setImg] = useState('')
    const [classe, setClasse] = useState('')
    const id:number = uuidv4()
    const favorite:boolean = false
    /* a const id é um número aleatório criado pelo uuid * pesquisar biblioteca no google * */

    return (
        <section className="form-section">
            <form className={formView ? "form" : "form hidden"} onSubmit={submitForm}>
                <h2 className="form-section-title">{formTitle}</h2>

                <TextCamp 
                    required = {true} 
                    label = "Nome" 
                    placeholder = "Digite o nome aqui"
                    value = {name}
                    whenChange = {value => setName(value)}
                />
                <TextCamp 
                    required = {false} 
                    label="Foto de Perfil" 
                    placeholder="Informe o link da imagem"
                    value = {img}
                    whenChange = {value => setImg(value)}
                />
                <Dropdown 
                    required = {true} 
                    label = "Classe" 
                    items = {classesDropdown} 
                    value = {classe}
                    whenChange = {value => setClasse(value)}
                />
                <Button> 
                    Criar Card
                </Button>                
            </form>
        </section>
    )
}

export default Form