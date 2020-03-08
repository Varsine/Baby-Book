import React from 'react';

class Questions extends React.Component {
	state = {
		quest: [
			{ id: 1, value: 'Շլդիկ մուլտհերոս' },
			{ id: 2, value: 'Խորեն ․․․ (ժողովրդական արտիստ)' },
			{ id: 3, value: '․․․ որսկան (Թումանյանի հեքիաթներից)' },
			{ id: 4, value: 'Բնության երևոյթ' },
			{ id: 5, value: 'Գուլպա' },
			{ id: 6, value: 'Շաբաթվա օր' },
			{ id: 7, value: 'Չար, դաժան (հակ․)' },
			{ id: 8, value: 'Ինչ էր տանում կարմիր գլխարկը' },
			{ id: 9, value: 'Հայաստանի քաղաքներից' }
		],
		verticalQuest: [{ id: 1, value: 'Թերի, անավարտ (հոմ․)' }]
	};
	render() {
		return (
			<div>
				<ol>
					{' '}
					{this.state.quest.map(item => {
						return <li key={item.id}> {item.value} </li>;
					})}{' '}
				</ol>{' '}
				<p>4 ուղահայաց. {this.state.verticalQuest[0]}</p>
			</div>
		);
	}
}
export default Questions;
