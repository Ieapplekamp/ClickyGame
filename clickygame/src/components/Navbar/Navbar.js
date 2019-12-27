import React from "react";
import "../Navbar/Navbar.css"

function Navbar(props) {
    return (
        <header>
            <img className="nav-img" src={require('../images/pokeball.png')} alt="pokeball"/>
            <nav className="navbar nav-p">
                <span className="nav-p">Catch'Em All!</span>
                <span className="scores">Caught: {props.currentScore} | High Score: {props.highScore}</span>
            </nav>
        </header>
    )
}

export default Navbar;