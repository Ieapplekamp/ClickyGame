import React from 'react';
import Matches from "./components/matchmatch.json"
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Pics from "./components/Pics/Pics";
import shuffle from "./components/Shuffle"

let chosenArray = [];

class App extends React.Component {

	state = {
		Matches,
    	currentScore: 0,
    	highScore: 0
  	}

	gameLoop = (event) => {
    	event.preventDefault();
    
    	let chosen = event.target.getAttribute('alt');

    	if (chosenArray.includes(chosen)) {
      
    		this.setState({ currentScore: 0 });
    		chosenArray = [];
      
    	} else {
      
    		this.setState({ currentScore: this.state.currentScore + 1 });

    		if (this.state.currentScore >= this.state.highScore) {
        		this.setState({ highScore: this.state.highScore + 1 });
    		};
      
    		chosenArray.push(chosen);
    	};

		this.setState({ Matches: shuffle(this.state.Matches)});        
	};
  
	render() {
		return (
			<div>
				<Navbar
					currentScore={this.state.currentScore}
					highScore= {this.state.highScore}
				/>
				<Intro/>
				<Pics
					Matches={this.state.Matches}
					gameLoop = {this.gameLoop}
				/>
			</div>
      
    	);
	}
}



export default App;
