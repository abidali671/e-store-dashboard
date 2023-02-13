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
	icon?: React.FC;
	divider?: boolean;
	path?: string;
}

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
export const ViewDetails:ViewDetailsT[] = [
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
	},
];
