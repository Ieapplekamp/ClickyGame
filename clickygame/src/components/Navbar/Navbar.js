import React from "react";
import "../Navbar/Navbar.css"

function Navbar(props) {
    return (
        <header>
            <img className="nav-img" src="../public/images/pokeball.png" alt="pokeball"></img>
            <nav className="navbar">
            
                <span>Catch'Em All!</span>
                <span className="scores">Caught: {props.currentScore} | High Score: {props.highScore}</span>
            </nav>
        </header>
    )
}

export default Navbar;