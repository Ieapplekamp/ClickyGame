import React from "react";
import "../Navbar/Navbar.css"
// import "../images/pokeball.png"

function Navbar(props) {
    return (
        <header>
            <img className="nav-img" src={require('../images/pokeball.png')} alt="pokeball"/>
            <nav className="navbar">
            
                <span>Catch'Em All!</span>
                <span className="scores">Caught: {props.currentScore} | High Score: {props.highScore}</span>
            </nav>
        </header>
    )
}

export default Navbar;