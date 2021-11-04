import React from 'react'
import Header from '../../components/header/header'
import ListGif from '../../components/ListGif'
import { useGif } from '../../hooks/useGifs'
import Trending from '../tending/Trending'

export default function Index(){
    const {gifs} = useGif()
    
    return(
        <>
        <Header/>
        <div className="home">
            <div className="column-gifs">
                <h3 class="title">Última busquedad</h3>
                <ListGif gifs={gifs}/>
            </div>


            <div class="trending">
            <h3 class="title">Tendencias</h3>
                <Trending/>
            </div>
            </div>
        </>
    )
}