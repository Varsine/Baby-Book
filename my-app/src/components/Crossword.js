import React from 'react';
import './Cross.css';
import Board from './Board';
import GridData from './GridDarta';
import ClueData from './ClueData';

class Crossword extends React.Component {
	state = {
		grid: GridData,
		clues: ClueData,
		activeClueBoxes: ClueData['Ac1'].boxes,
		activeClue: ['Ac1'],
		boxInFocus: ClueData['Ac1'].boxes[0]
	};

	setActiveClueBoxes = boxes => {
		this.setState({
			activeClueBoxes: boxes
		});
	};

	setActiveClue = clue => {
		this.setState({
			activeClue: clue
		});
	};

	setBoxInFocus = box => {
		this.setState({
			boxInFocus: box
		});
	};

	render() {
		return (
			<div className="crossword">
				<Board
					grid={this.state.grid}
					allClues={this.state.clues}
					//5clues={this.state.clues}
					setActiveClueBoxes={this.setActiveClueBoxes}
					highlightedBoxes={this.state.activeClueBoxes}
					setActiveClue={this.setActiveClue}
					setBoxInFocus={this.setBoxInFocus}
					boxInFocus={this.state.boxInFocus}
				/>{' '}
			</div>
		);
	}
}

export default Crossword;
