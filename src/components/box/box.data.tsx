function createData(
	name: number,
	calories: number,
	fat: number,
	carbs: number,
	protein: number,
	task: string,
	color: string,
) {
	return { name, calories, fat, carbs, protein, task, color };
}

export const rows = [
	createData(2541, 159, 6.0, 24, 4.0, 'completed', '#00E396'),
	createData(2542, 237, 9.0, 37, 4.3, 'onHold', '#A368BF'),
	createData(2543, 262, 16.0, 24, 6.0, 'onHold', '#A368BF'),
	createData(2544, 305, 3.7, 67, 4.3, 'cancelled', '#FF2828'),
	createData(2545, 356, 16.0, 49, 3.9, 'delayed', '#FEB019'),
];

export const productsRow = [
	{ name: 'Backpack', quantity: 9, average: '20%' },
	{ name: 'Backpack', quantity: 9, average: '20%' },
	{ name: 'Backpack', quantity: 9, average: '20%' },
	{ name: 'Backpack', quantity: 9, average: '20%' },
	{ name: 'Backpack', quantity: 9, average: '20%' },
	{ name: 'Backpack', quantity: 9, average: '20%' },
	{ name: 'Backpack', quantity: 9, average: '20%' },
	{ name: 'Backpack', quantity: 9, average: '20%' },
	{ name: 'Backpack', quantity: 9, average: '20%' },
	{ name: 'Backpack', quantity: 9, average: '20%' },
];
