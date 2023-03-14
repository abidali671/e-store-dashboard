import Chart from '@assests/Chart.png';
import ChartB from '../assests/circle.png';
import ChartC from '../assests/Chart9.png';
import Vector from '../assests/Vector.png';
import {
	Copy,
	User,
	Category,
	Products,
	Order,
	Review,
	Brand,
	logout,
	Dashboard,
	Vendors,
	Profile,
	Dollar,
	Package,
} from '@assests/icons';
import React from 'react';


export interface SideItemT {
	label?: string;
	icon?: React.FC<React.SVGProps<SVGSVGElement>>;
	divider?: boolean;
	path?: string;
}

// export const chartArr = [MyChartComponent, AreaChart, ColumnChart]


export const sideListItems: SideItemT[] = [
	{ label: 'DASHBOARD', path: '/dashboard', icon: Dashboard },
	{ label: 'VENDORS', path: '/vendors', icon: Vendors },
	{ divider: true },
	{ label: 'CATAGORIES', icon: Category },
	{ label: 'PRODUCTS', icon: Products },
	{ label: 'ORDERS', icon: Order },
	{ label: 'REVIEWS', icon: Review },
	{ label: 'BRANDS', icon: Brand },
	{ divider: true },
	{ label: 'LOG OUT', icon: logout },
	{ label: 'OTHER PAGES', icon: Copy },
];
export interface ViewDetailsT {
	title: string;
	info?: string;
	icon?: React.FC;

}
export const ViewDetails: ViewDetailsT[] = [
	{
		title: '1.15K',
		info: 'Daily Signups',
		icon: User,
	},
	{
		title: '38.45k',
		info: 'Daily Visitors',
		icon: Profile,
	},
	{
		title: '13.75K',
		info: 'Daily Orders',
		icon: Package,
	},
	{
		title: '$1.5M',
		info: 'Daily Revenue',
		icon: Dollar,
	},
];

export interface Boxes {
	title: string;
	subValue?: Record<string, string>[];
	img?: string;
	md: number;
	full: boolean;
	bottom?: string;
	data?: any
	typeChart?: boolean
}

export const boxValue = [
	{
		title: 'Sales Report',
		subValue: [
			{
				label: 'Via Referral',
				color: 'red',
			},
			{
				label: 'Direct',
				color: 'green',
			},
			{
				label: 'Via Social',
				color: 'yellow',
			},
		],

		img: Chart,
		md: 8,
		full: true,
	},
	{
		title: 'Orders Overview',
		md: 4,
		img: ChartB,
		full: false,
		data: [9.9, 8.7, 25.6, 32.0, 23.8],
		typeChart: true
	},
	{
		title: 'User Activity',
		md: 8,
		img: Vector,
		full: true,
	},
	{
		title: 'Current Users',
		md: 4,
		full: false,
		img: ChartC,
		bottom: 'IN-DETAIL OVERVIEW',
		data: [
			{ name: 'series1', data: [31, 40, 28, 51, 42, 109, 100] },
			{
				name: 'series2',
				data: [11, 32, 45, 32, 34, 52, 41],
			},
		],
		typeChart: false
	},
];
interface productT {
	title: string,
	desc: string,
	price: number,
	sales: number,
	img: string
}
export const productDetail: productT[] = [{
	img: 'shoes',
	title: 'Baby Cotton Shoes',
	desc: 'Statement belting with double-turnlock hardware adds “swagger” to a simple.',
	price: 340,
	sales: 590
},
{
	img: 'shirt',
	title: 'Hoddies For Mens',
	desc: 'Statement belting with double-turnlock hardware adds “swagger” to a simple.',
	price: 399,
	sales: 300
},
{
	img: 'jack',
	title: 'Long-Slive T-Shirt',
	desc: 'Statement belting with double-turnlock hardware adds “swagger” to a simple.',
	price: 480,
	sales: 210
},
]