import React from "react";

import "../Pics/Pics.css"

function Pictures(props) {
    return (
        <div >
            <div className="pokemans-container">
                {props.Matches.map((pic, index) => (
                    <div className="" key={pic.name}>
                        <img src={pic.source} className="pokemans" alt={pic.name} onClick={(event) =>  props.gameLoop(event, pic.name) }></img>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Pictures;