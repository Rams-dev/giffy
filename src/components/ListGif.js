import React from "react";
import Gif from './Gif'
import Masonry from "react-masonry-css";

export default function ListGif(props){
    const {gifs} = props
    
    return(
        <div className="gifs">
            {
            gifs.map(singleGif => (
                <>
                <Gif
                key={singleGif.id} 
                id={singleGif.id} 
                url={singleGif.url}
                title={singleGif.title}
                />
                </>
            ))
            
            }
        </div>
    )
}
