import React from "react";
import "../components/Navbar.css"

function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <span className="h3">Catch Them All!<img src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c31f.png" alt="pokeball"></img></span>
            <span className="h6">Current Score: {props.currentScore} | High Score: {props.highScore}</span>
        </nav>
    )
}

export default Navbar;