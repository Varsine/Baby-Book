const GridData = [
	//   Row A
	{
		id: 'A1',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'A2',
		letter: '^[նՆ]{1}$',
		clues: ['Ac1'],
		label: '1↳'
	},
	{
		id: 'A3',
		letter: '^[աԱ]{1}$',
		clues: ['Ac1', 'Dn2'],
		label: '2↓'
	},
	{
		id: 'A4',
		letter: '^[պՊ]{1}$',
		clues: ['Ac1'],
		label: null
	},
	{
		id: 'A5',
		letter: '^[Աա]{1}$',
		clues: ['Ac1'],
		label: null
	},
	{
		id: 'A6',
		letter: '^[սՍ]{1}$',
		clues: ['Ac1', 'Dn3'],
		label: '3↓'
	},
	{
		id: 'A7',
		letter: '^[տՏ]{1}$',
		clues: ['Ac1'],
		label: null
	},
	{
		id: 'A8',
		letter: '^[աԱ]{1}$',
		clues: ['Ac1'],
		label: null
	},
	{
		id: 'A9',
		letter: '^[կԿ]{1}$',
		clues: ['Ac1'],
		label: null
	},
	{
		id: 'A10',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'A11',
		letter: null,
		clues: null,
		label: null
	},
	//   Row B
	{
		id: 'B1',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'B2',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'B3',
		letter: '^[բԲ]{1}$',
		clues: ['Dn2'],
		label: null
	},
	{
		id: 'B4',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'B5',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'B6',
		letter: '^[ՈԻու]{2}',
		clues: ['Dn3'],
		label: null
	},
	{
		id: 'B7',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'B8',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'B9',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'B10',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'B11',
		letter: null,
		clues: null,
		label: null
	},
	//   Row C
	{
		id: 'C1',
		letter: '^[Կկ]{1}$',
		clues: ['Ac4', 'Dn4'],
		label: '4↓→'
	},
	{
		id: 'C2',
		letter: '^[աԱ]{1}$',
		clues: ['Ac4'],
		label: null
	},
	{
		id: 'C3',
		letter: '^[րՐ]{1}$',
		clues: ['Ac4', 'Dn2'],
		label: null
	},
	{
		id: 'C4',
		letter: '^[Կկ]{1}$',
		clues: ['Ac4'],
		label: null
	},
	{
		id: 'C5',
		letter: '^[ՈՒու]{2}$',
		clues: ['Ac4'],
		label: null
	},
	{
		id: 'C6',
		letter: '^[տՏ]{1}$',
		clues: ['Ac4', 'Dn3'],
		label: null
	},
	{
		id: 'C7',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'C8',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'C9',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'C10',
		letter: '^[Նն]{1}$',
		clues: ['Dn5'],
		label: '5↴'
	},
	{
		id: 'C11',
		letter: null,
		clues: null,
		label: null
	},
	// Row D
	{
		id: 'D1',
		letter: '^[իԻ]{1}$',
		clues: ['Dn4'],
		label: null
	},
	{
		id: 'D2',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'D3',
		letter: '^[աԱ]{1}$',
		clues: ['Dn2']
	},
	{
		id: 'D4',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'D5',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'D6',
		letter: '^[լԼ]{1}$',
		clues: ['Dn3'],
		label: null
	},
	{
		id: 'D7',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'D8',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'D9',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'D10',
		letter: '^[աԱ]{1}$',
		clues: ['Dn5'],
		label: null
	},
	{
		id: 'D11',
		letter: null,
		clues: null,
		label: null
	},
	//   Row E
	{
		id: 'E1',
		letter: '^[սՍ]{1}$',
		clues: ['Dn4'],
		label: null
	},
	{
		id: 'E2',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'E3',
		letter: '^[հՀ]{1}$',
		clues: ['Dn2'],
		label: null
	},
	{
		id: 'E4',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'E5',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'E6',
		letter: '^[Իի]{1}$',
		clues: ['Dn3'],
		label: null
	},
	{
		id: 'E7',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'E8',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'E9',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'E10',
		letter: '^[սՍ]{1}$',
		clues: ['Dn5'],
		label: null
	},
	{
		id: 'E11',
		letter: null,
		clues: null,
		label: null
	},
	//   Row F
	{
		id: 'F1',
		letter: '^[աԱ]{1}$',
		clues: ['Dn4'],
		label: null
	},
	{
		id: 'F2',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'F3',
		letter: '^[աԱ]{1}$',
		clues: ['Dn2'],
		label: null
	},
	{
		id: 'F4',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'F5',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'F6',
		letter: '^[Կկ]{1}$',
		clues: ['Dn3', 'Ac6'],
		label: '6↳'
	},
	{
		id: 'F7',
		letter: '^[իԻ]{1}$',
		clues: ['Ac6'],
		label: null
	},
	{
		id: 'F8',
		letter: '^[րՐ]{1}$',
		clues: ['Ac6'],
		label: null
	},
	{
		id: 'F9',
		letter: '^[Աա]{1}$',
		clues: ['Ac6'],
		label: null
	},
	{
		id: 'F10',
		letter: '^[Կկ]{1}$',
		clues: ['Ac6'],
		label: null
	},
	{
		id: 'F11',
		letter: '^[իԻ]{1}$',
		clues: ['Ac6'],
		label: null
	},
	//   Row G
	{
		id: 'G1',
		letter: '^[Տտ]{1}$',
		clues: ['Dn4'],
		label: null
	},
	{
		id: 'G2',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'G3',
		letter: '^[Մմ]{1}$',
		clues: ['Dn2'],
		label: null
	},
	{
		id: 'G4',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'G5',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'G6',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'G7',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'G8',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'G9',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'G10',
		letter: '^[իԻ]{1}$',
		clues: ['Dn5'],
		label: null
	},
	{
		id: 'G11',
		letter: null,
		clues: null,
		label: null
	},
	//   Row H
	{
		id: 'H1',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'H2',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'H3',
		letter: '^[Յյ]{1}$',
		clues: ['Dn2'],
		label: null
	},
	{
		id: 'H4',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'H5',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'H6',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'H7',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'H8',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'H9',
		letter: '^[Բբ]{1}$',
		clues: ['Dn7'],
		label: '7↴'
	},
	{
		id: 'H10',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'H11',
		letter: null,
		clues: null,
		label: null
	},
	// Row I
	{
		id: 'I1',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'I2',
		letter: '^[Կկ]{1}$',
		clues: ['Ac8'],
		label: '8↳'
	},
	{
		id: 'I3',
		letter: '^[Աա]{1}$',
		clues: ['Ac8', 'Dn2'],
		label: null
	},
	{
		id: 'I4',
		letter: '^[րՐ]{1}$',
		clues: ['Ac8'],
		label: null
	},
	{
		id: 'I5',
		letter: '^[Կկ]{1}$',
		clues: ['Ac8'],
		label: null
	},
	{
		id: 'I6',
		letter: '^[Աա]{1}$',
		clues: ['Ac8'],
		label: null
	},
	{
		id: 'I7',
		letter: '^[Նն]{1}$',
		clues: ['Ac8'],
		label: null
	},
	{
		id: 'I8',
		letter: '^[Դդ]{1}$',
		clues: ['Ac8'],
		label: null
	},
	{
		id: 'I9',
		letter: '^[Աա]{1}$',
		clues: ['Ac8', 'Dn7'],
		label: null
	},
	{
		id: 'I10',
		letter: '^[Կկ]{1}$',
		clues: ['Ac8'],
		label: null
	},
	{
		id: 'I11',
		letter: null,
		clues: null,
		label: null
	},
	// Row J
	{
		id: 'J1',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'J2',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'J3',
		letter: '^[Նն]{1}$',
		clues: ['Dn2'],
		label: null
	},
	{
		id: 'J4',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'J5',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'J6',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'J7',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'J8',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'J9',
		letter: '^[Րր]{1}$',
		clues: ['Dn7'],
		label: null
	},
	{
		id: 'J10',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'J11',
		letter: null,
		clues: null,
		label: null
	},
	// Row K
	{
		id: 'K1',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'K2',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'K3',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'K4',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'K5',
		letter: '^[Մմ]{1}$',
		clues: ['Ac9'],
		label: '9↳'
	},
	{
		id: 'K6',
		letter: '^[Եե]{1}$',
		clues: ['Ac9'],
		label: null
	},
	{
		id: 'K7',
		letter: '^[ղՂ]{1}$',
		clues: ['Ac9'],
		label: null
	},
	{
		id: 'K8',
		letter: '^[րՐ]{1}$',
		clues: ['Ac9'],
		label: null
	},
	{
		id: 'K9',
		letter: '^[Իի]{1}$',
		clues: ['Ac9', 'Dn7'],
		label: null
	},
	{
		id: 'K10',
		letter: null,
		clues: null,
		label: null
	},
	{
		id: 'K11',
		letter: null,
		clues: null,
		label: null
	}
];

export default GridData;
