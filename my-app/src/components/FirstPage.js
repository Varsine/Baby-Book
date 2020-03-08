import React from 'react';

class FirstPage extends React.Component {
	changSimbaImage() {
		document.getElementById('simba').src =
			'https://media2.giphy.com/media/LjUXZgnT2z7kA/source.gif';
	}

	passNextPage() {
		window.location.assign('secondPage.js');
	}
	render() {
		return (
			<div>
				<div className="first-header">
					<img
						onMouseOver={this.changSimbaImage}
						alt="Simba"
						id="simba"
						src="https://media0.giphy.com/media/3Vp0zc4z9ARJS/source.gif"
					/>
				</div>{' '}
				<hr />
				<div className="first-body">
					<div className="page-box">
						<div className="label">1</div>
					</div>{' '}
					<div className="page-box">
						<div className="label">2</div>{' '}
					</div>{' '}
					<div className="page-box">
						<div className="label">3</div>{' '}
					</div>{' '}
					<div className="page-box">
						<div className="label">4</div>
					</div>{' '}
					<div className="page-box">
						<div className="label">5</div>
					</div>{' '}
					<div className="page-box">
						<div className="label">6</div>{' '}
					</div>{' '}
				</div>{' '}
			</div>
		);
	}
}

export default FirstPage;
