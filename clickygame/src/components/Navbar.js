import React from "react";

function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <span className="h3">Tap That</span>
            <span className="h6">Current Score: {props.currentScore} | High Score: {props.highScore}</span>
        </nav>
    )
}

export default Navbar;