import React from "react";
import "../Navbar/Navbar.css"

function Navbar(props) {
    return (
        <header>
            <img className="nav-img" src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c31f.png" alt="pokeball"></img>
            <nav className="navbar">
            
                <span>Catch'Em All!</span>
                <span className="scores">Caught: {props.currentScore} | High Score: {props.highScore}</span>
            </nav>
        </header>
    )
}

export default Navbar;