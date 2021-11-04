import React from 'react'
import { URLAPI, token } from './settings'
const endpoint = `${URLAPI}/gifs/search?api_key=${token}`


export function allgifs(word){
    return fetch(`${endpoint}&q=${word}&limit=25`)
        .then(response => response.json())
        .then(res => {
            const {data } = res
            const gifs = data.map(element => {
            const {title, id} = element
            const {url} = element.images.downsized_medium

            return { title, url, id}
        })
        return gifs
    })    
}

export function getGifById(id){
    return fetch(`${URLAPI}/gifs/${id}?api_key=${token}`)
            .then(response => response.json())
            .then(res =>{
                 const {title} = res.data
                 const {id} = res.data
                 const {url} = res.data.images.downsized_medium
                 return { title, id, url}
            })

}