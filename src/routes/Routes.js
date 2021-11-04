import React from 'react'
import {Route} from 'wouter'
import Search from '../views/Search/Search'
import Home from '../views/home/Index'
import {GifContextProvider} from '../context/GifContext'
import GetGif from '../views/home/GetGif'
export default function Routes(){
    return(
        <GifContextProvider>
            <Route path="/gifs/:word" component={Search}/>
            <Route path="/gif/:id" component={GetGif}/>
            <Route path="/" component={Home}/>
        </GifContextProvider>
    )
    
}
