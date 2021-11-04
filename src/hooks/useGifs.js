import {useContext, useEffect} from 'react'
import gifContext from '../context/GifContext'
import {allgifs, getGifById} from '../services/gifService'

export function useGif(word){
    const {gifs, setGifs, gif, setGif, isLoading, setIsLoading} = useContext(gifContext)

    useEffect(() => {
        const keyword = word || localStorage.getItem('lastWord')
       getGifs(keyword)
    }, [word])

    const getGifs = (word) => {
        setIsLoading(true)
        allgifs(word)
        .then(res =>{
            setGifs(res)
            localStorage.setItem('lastWord', word)
        } )
        .finally(res => setIsLoading(false))
    }

    const getById = (id) => {
        getGifById(id)
        .then(res => setGif(res))
    }
    

    return {
        gifs,
        getById,
        isLoading,
        gif
        // getGifs,
    }

}