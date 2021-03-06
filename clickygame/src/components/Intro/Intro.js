import React, { Component } from "react";

import "../Intro/Intro.css"

class Intro extends Component {

    constructor() {
        super();
        this.state = {
          show: true,
        };
    }

    dismissable = () => {

        if (this.state.show === true) {
          this.setState({ show: false });
        } else {
          this.setState({ show: true });
        }

    };

    render() {
        
        return  this.state.show ? (
            
            <section className={`section-intro`}>
                
                <img className="intro-pic" onClick={this.dismissable} src={require('../images/dawn.png')} alt="dawn pic"></img>
                <p className="intro-p">
                Click on a pokemon to earn points, but don't click on any more than once!
                <br/><br/><br/>
                Click on Dawn to clear up some space!
                </p>
                
            </section>
               
        ) : null 
    }
}

export default Intro;