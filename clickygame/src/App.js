import React from 'react';
import Matches from "./components/matchmatch.json"
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Pics from "./components/Pics/Pics";
import shuffle from "./components/Shuffle"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

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
			
			MySwal.fire({
				onOpen: () => {
				  MySwal.clickConfirm()
				}
			}).then(() => {
				//    Issues with getting image to appear in modal <img src={this.state.Matches.source} alt={chosen}></img>
				  return MySwal.fire(<p className="alert">You already guessed {chosen}!</p>)
			  })
      
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
