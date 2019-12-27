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
        console.log("this was triggered")
        return  this.state.show ? (
            
            <section className={`section-intro`}>
                
                <img className="intro-pic" onClick={this.dismissable} src={require('../images/dawn.png')} alt="dawn pic"></img>
                <p>
                Click on an pokemon to earn points, but don't click on any more than once!
                <br/><br/><br/>
                Talk to Dawn to get started!
                </p>
                
            </section>
               
        ) : null 
    }
}

export default Intro;