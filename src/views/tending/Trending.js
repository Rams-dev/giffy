import React from "react";
import { Link } from "wouter";
import { useTrending } from "../../hooks/useTrending";
import './trending.css'

export default function Trending(){
    const {trending} = useTrending()
    return(
        <div class="trending-content">
            {
                trending.map(trend => (
                    <Link to={`/gifs/${trend}`}>
                     <h4 className="trend-name">{trend}</h4>
                    </Link>
                ))
            }
        </div>

    )
}
