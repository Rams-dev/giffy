import React, {useState} from 'react'
import { useLocation } from 'wouter'

export default function Header () {
    const [_, navigate] = useLocation()

    const [word, setWord] = useState(null)
    const handleChange = (e) => {
        setWord(e.target.value)
    }

    const onsubmit = (e) => {
        e.preventDefault()
        navigate(`/gifs/${word}`)
    }

    return (
        <header className="header">
            <form className="form-group" onSubmit={onsubmit}>
                <input className="inputsearch" placeholder="Buscar" name="input" onChange={handleChange}/>
                <button className="btn btn-search">Buscar</button>
            </form>
        </header>
    )

}