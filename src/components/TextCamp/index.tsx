import "./TextCamp.css"

interface TextCampProps {
    whenChange: (value: string) => void
    label: string
    value: string
    required: boolean
    placeholder: string
}

const TextCamp = ({ whenChange, label, value, required, placeholder }: TextCampProps) => {

    /* quando algo é digitado ele pega o valor digitado e adiciona a const relacionada */
    const whenTyped = (e:React.ChangeEvent<HTMLInputElement>) => {
        whenChange(e.target.value)
    }

    return (
        <div className="campo__texto">
            <label className="campo__texto-label">{label}</label>
            <input 
                value={value} 
                onChange={whenTyped} 
                required={required} 
                className="campo__texto-input" 
                placeholder={placeholder}/>
        </div>
    )
}

export default TextCamp