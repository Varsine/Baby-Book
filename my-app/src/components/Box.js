import React from 'react';
import GridData from './GridDarta';

class Box extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			grid: GridData,
			highlight: props.isHighlighted,
			isInFocus: props.isInFocus
		};
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			highlight: newProps.isHighlighted,
			isInFocus: newProps.isInFocus
		});
	}

	componentDidUpdate() {
		if (this.state.isInFocus) {
			this.textInput.focus();
		}
	}

	handleFocus = event => {
		this.props.setActiveClue(this.props.boxClues);

		let boxesToHighlight = [];

		for (const clue of this.props.boxClues) {
			boxesToHighlight = boxesToHighlight.concat(
				this.props.allClues[clue].boxes
			);
		}

		this.props.setActiveClueBoxes(boxesToHighlight);
		this.props.setBoxInFocus(event.target.id);
	};

	render() {
		let visibleLabel;
		let input;

		if (this.props.label) {
			visibleLabel = <span className="box-label"> {this.props.label} </span>;
		}

		if (this.props.letter) {
			input = (
				<input
					type="text"
					pattern={this.props.letter}
					maxLength={2}
					className={`box-input ${this.state.highlight ? 'highlight' : ''}`}
					onFocus={this.handleFocus}
					ref={input => {
						this.textInput = input;
					}}
					required
				/>
			);
		}

		return (
			<div className={`box ${!this.props.letter ? ' blank' : ''}`}>
				{' '}
				{visibleLabel} {input}{' '}
			</div>
		);
	}
}

export default Box;
