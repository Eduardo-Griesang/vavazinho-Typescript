/* eslint-disable no-lone-blocks */
import "./Dropdown.css"

interface DropdownProps{
    whenChange: (value: string) => void
    label: string
    required: boolean
    value: string
    items: string[]
}

const Dropdown = ({whenChange, label, required, value, items} : DropdownProps) => {

    {/* quando uma opção do dropdown é selecionado, ele chama a função no form e altera a string vazia pelo innerHTML da opção selecionada */}
    const whenSelect = (e:React.ChangeEvent<HTMLSelectElement>) => {
        whenChange(e.target.selectedOptions[0].label)  
    }

    return (
        <div>   
            <h2 className="title">{label}</h2>
        
            <select onChange={whenSelect} required={required} value={value} className="drop">
                <option value="" hidden></option>
                {items.map(item => 
                    <option key={item} >{item}</option>
                )}                                                       {/* itera entre a lista de itens com map() e transforma cada um deles em uma option no dropdown */}
            </select>
        </div>
    )
}

export default Dropdown