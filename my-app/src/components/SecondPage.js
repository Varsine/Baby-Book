import React from 'react';
import Questions from './Questions';
import Crossword from './Crossword';

class SecondPage extends React.Component {
	render() {
		return (
			<div>
				<div className="secondPage-title">
					<p>
						<em>Լուծել խաչբառը</em>
					</p>
					<img src="https://i.ya-webdesign.com/images/simba-lion-king-png-4.png" />
				</div>
				<hr />
				<Questions />
				<Crossword />
			</div>
		);
	}
}

export default SecondPage;
