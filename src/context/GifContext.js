import React, {useState} from 'react'

const Context = React.createContext({})

export function GifContextProvider({children}){
    const [gifs, setGifs] = useState([])
    const [gif, setGif] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    return <Context.Provider value={{ gifs, setGifs, isLoading, setIsLoading, setGif, gif}}>
        {children}
    </Context.Provider>

}
export default Context