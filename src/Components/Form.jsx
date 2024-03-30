import { useState } from "react"

const btnStyle = { backgroundColor: '#636161'}

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [show, setShow] = useState(false)
    const handleSubmit = (event) => {
    event.preventDefault()
    if(name.length >5 && email.length >= 10 && email.includes('@')){
      setShow(true)
    }
}
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Nombre: </label>
                <input type="text" onChange={(event) => setName(event.target.value)}/>
                <label >Email: </label>
                <input type="text" onChange={(event) => setEmail(event.target.value)}/>
                <button style={btnStyle}>Send</button>
            </form>
        {show ?
            <>
                <h3>Gracias {name}, te contactaremos cuanto antes vía mail.</h3>
            </>
        : '**Por favor verifique su información nuevamente**'}
        </div>
    )
}

export default Form;
      