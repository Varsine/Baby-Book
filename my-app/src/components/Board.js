import React from 'react';
import Box from './Box';

function Board(props) {
	return (
		<div className="crossword-board">
			{' '}
			{props.grid.map(box => {
				const { id, letter, clues, label } = box;
				return (
					<Box
						key={id}
						id={id}
						letter={letter}
						boxClues={clues}
						label={label}
						allClues={props.allClues}
						isHighlighted={props.highlightedBoxes.indexOf(id) > -1}
						setActiveClueBoxes={props.setActiveClueBoxes}
						setActiveClue={props.setActiveClue}
						setBoxInFocus={props.setBoxInFocus}
						isInFocus={props.boxInFocus === id}
					/>
				);
			})}{' '}
		</div>
	);
}

export default Board;
