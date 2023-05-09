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
export const tableCell = [
	'Order ID',
	'Product Name',
	'Units',
	'Order Date',
	'Order Cost',
	'Status',
];
export const productsRow = [
	{ name: 'Backpack', quantity: 9, average: '20%' },
	{ name: 'Backpack', quantity: 9, average: '20%' },
	{ name: 'Backpack', quantity: 9, average: '20%' },
	{ name: 'Backpack', quantity: 9, average: '20%' },
	{ name: 'Backpack', quantity: 9, average: '20%' },
	{ name: 'Backpack', quantity: 9, average: '20%' },
	{ name: 'Backpack', quantity: 9, average: '20%' },
];
interface productT {
	title: string;
	desc: string;
	price: number;
	sales: number;
	img: string;
}

export const productDetail: productT[] = [
	{
		img: 'shoes',
		title: 'Baby Cotton Shoes',
		desc: 'Statement belting with double-turnlock hardware adds “swagger” to a simple.',
		price: 340,
		sales: 590,
	},
	{
		img: 'shirt',
		title: 'Hoddies For Mens',
		desc: 'Statement belting with double-turnlock hardware adds “swagger” to a simple.',
		price: 399,
		sales: 300,
	},
	{
		img: 'jack',
		title: 'Long-Slive T-Shirt',
		desc: 'Statement belting with double-turnlock hardware adds “swagger” to a simple.',
		price: 480,
		sales: 210,
	},
];
