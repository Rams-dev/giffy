import React from 'react'
import { Link } from 'wouter'

export default function Gif(props) {
    const { title, id, url } = props
    return (
                <div className="gif">
            <Link to={`/gif/${id}`}>
                    <img src={url} alt={title} title={title} className="image-gif" />
            </Link>
                    <p class="title-gif">{title}</p>
                </div>
    )

}