import React, {useEffect} from "react";
import Gif from "../../components/Gif";
import ListGif from "../../components/ListGif";
import whatsAppIcon from '../../assets/images/whatsapp.png'
import { useGif } from "../../hooks/useGifs";
import {Link} from 'wouter'

export default function GetGif({params}){
    const { getById, gif, gifs } = useGif()
    const {id} = params

    const link = `https://api.whatsapp.com/send?text=Mira%20Este%20gif%20${window.location.href}`
    
    useEffect(() => {
        getById(id)
    }, [])
    console.log(gif)

    return(
        <>
        <div className="Button_start">
            <Link to={'/'}>
                <button className="button_start__button">Regresar al incio</button>
            </Link>
                <a target="_blank" href={link} class="button_start__button button_share">
                    <img src={whatsAppIcon} alt="whatsapp ico" class="icon"/>
                     Compartir en whatsapp
                </a>
        </div>
        <div class="gifSelected">
            <Gif {...gif}/>
        </div>
        <div className="seeMoreGifs">
            <h3 class="title">Más gifs</h3>

            <ListGif gifs={gifs}/>

        </div>
        

        </>

    )
}
