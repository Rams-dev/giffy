import { useState, useEffect } from "react";
import { get } from "../services/trendigService";

export function useTrending(){
    const [trending, setTrending]= useState([])

    useEffect(() => {
        get()
        .then(res => setTrending(res))
    }, [])

    return{
        trending
    }

}