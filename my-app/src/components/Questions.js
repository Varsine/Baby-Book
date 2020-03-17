import React from 'react';

class Questions extends React.Component {
	state = {
		quest: [
			{ id: 1, value: ' 1. Շլդիկ մուլտհերոս:' },
			{ id: 2, value: '2. Խորեն ․․․ (ժողովրդական արտիստ):' },
			{ id: 3, value: '3. ․․․ որսկան (Թումանյանի հեքիաթներից):' },
			{ id: 4, value: '4. Բնության երևոյթ:' },
			{ id: 5, value:'4.ուղահայաց- Թերի, անավարտ (հոմ․):'},
			{ id: 6, value: '5. Գուլպա:' },
			{ id: 7, value: '6. Շաբաթվա օր:' },
			{ id: 8, value: '7.Չար, դաժան (հակ․):' },
			{ id: 9, value: '8. Ինչ էր տանում կարմիր գլխարկը:' },
			{ id: 10, value: '9. Հայաստանի քաղաքներից:' }
		]
	};
	render() {
		return (
			<div className="quest-div">
			<h1 className="quest">Հարցեր</h1>
				<ul className='quest-list'>
					{' '}
					{this.state.quest.map(item => {
						return <li key={item.id}> {item.value} </li>;
					})}{' '}
				</ul>{' '}
				</div>
		);
	}
}
export default Questions;
