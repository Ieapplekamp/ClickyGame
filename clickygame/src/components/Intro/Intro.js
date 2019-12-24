import React, { Component } from "react";

import "../Intro/Intro.css"

class Intro extends Component {
    state = {
        isDismissed: false
    }

    // dismissHandler = () => {
    //     this.setState({
    //         isDismissed: true
    //     })
    // }

    operation() {
        this.setState({
            isDismissed: true
        })
    }

    render() {
        return (
            // {
            //     (this.state.isDismissed) ?  : null;
            // }
            <section className="section-intro">
                <img className="intro-pic" onClick={()=>this.operation()} src={require('../images/dawn.png')} alt="dawn pic"></img>
                <p>
                Click on an pokemon to earn points, but don't click on any more than once!
                <br/><br/><br/>
                Talk to Dawn to get started!
                </p>
           </section>
        )
    }
}

export default Intro;