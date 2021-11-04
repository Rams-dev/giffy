import React, {useEffect} from "react";
import Gif from "../../components/Gif";
import { useGif } from "../../hooks/useGifs";

export default function GetGif({params}){
    const { getById, gif } = useGif()
    const {id} = params
    
    useEffect(() => {
        getById(id)
    }, [])
    console.log(gif)

    return(
        <>
        <div class="gifSelected">
            <Gif {...gif}/>
        </div>
        </>

    )
}
