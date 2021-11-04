import {token, URLAPI } from "./settings"

export function get(){
    return fetch(`${URLAPI}/trending/searches?api_key=${token}&limit=10&rating=g`)
            .then(response => response.json() )
            .then(res => res.data)
}