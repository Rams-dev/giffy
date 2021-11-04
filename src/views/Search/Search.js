import React, {useEffect} from 'react'
import { useGif } from '../../hooks/useGifs'
import ListGif from '../../components/ListGif'

export default function Search({params}){
    
    const { word } = params
    const {gifs, isLoading} = useGif(word)

    if(isLoading) return ("Cargando...")

    return(
        <div className="search">
            <h3 class="title">{decodeURI(word)}</h3>
            <ListGif gifs={gifs}/>
        </div>
    )
    
}
