import React, { useState } from 'react'

function ColorForm(props){
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addColor(input)
        setInput('')
    }
    
    const clear = () => {
        setInput('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={input} type="text" onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Add a Color!</button>
                <button onClick={clear}>Delete</button>
            </form>
                    
        </div>
    )
}
export default ColorForm;