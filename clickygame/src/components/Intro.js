import React, { Component } from "react";

class Intro extends Component {
    state = {
        isDismissed: false
    }

    dismissHandler = () => {
        this.setState({
            isDismissed: true
        })
    }

    render() {
        return (
            <section>
                I need to figure out how to hide this, but this will be a section with a button that will dismiss the jumbotron an start
           </section>
        )
    }
}

export default Intro;