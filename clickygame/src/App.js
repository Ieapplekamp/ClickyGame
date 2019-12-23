import React from 'react';
// import { render } from 'react-dom';
// import logo from './logo.svg';
// import './App.css';
import Matches from "./components/matchmatch.json"

import Navbar from "./components/Navbar";
// import Intro from "./components/Intro";
import Pics from "./components/Pics";
import shuffle from "./components/Shuffle"

var chosenArray = [];

class App extends React.Component {

  state = {
    Matches,
    currentScore: 0,
    highScore: 0
  }

  // gameLoop handles onclick events for images
  gameLoop = (event) => {
    event.preventDefault();
    // Grabs the unique alt tag of the image clicked on
    let chosen = event.target.getAttribute('alt');

    // Checks if image has been saved in chosenArray
    if (chosenArray.includes(chosen)){
      // Resets score to 0 if already saved in chosenArray
      this.setState({ currentScore: 0 });
      // Empties chosen array to reset game
      chosenArray =[];
    } else {
      // If not in chosenArray increments currentScore by 1
      this.setState({ currentScore: this.state.currentScore + 1 });
      // Checks the topScore and updates if currentScore is higher than top score
      if (this.state.currentScore >= this.state.highScore) {
          this.setState({ highScore: this.state.highScore + 1 });
      };
      // Pushes the selected array item to chosenArray
      chosenArray.push(chosen);
    };

    // Shuffles the matches array
    this.setState({ Matches: shuffle(this.state.Matches)});        
  };
  
  render() {
    return (
      <div>
        <header>
          <Navbar
            currentScore={this.state.currentScore}
            highScore= {this.state.highScore}
          />
          {/* <Intro dismissable={true} title="Click any picture to begin!">
            Press on a picture to earn points, but try not press the same picture twice!
          </Intro> */}
          <Pics
            Matches={this.state.Matches}
            gameLoop = {this.gameLoop}
          />
        </header>
      </div>
      
    );
  }

}



export default App;
