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
	id: number;
	text?: string;
	icon?: React.FC;
	divider?: boolean;
}

export const sideListItems: SideItemT[] = [
	{ id: 1, text: 'DASHBOARD', icon: Dashboard },
	{ id: 2, text: 'VENDORS', icon: Vendors },
	{ id: 3, divider: true },
	{ id: 4, text: 'CATAGORIES', icon: Category },
	{ id: 5, text: 'PRODUCTS', icon: Products },
	{ id: 6, text: 'ORDERS', icon: Order },
	{ id: 7, text: 'REVIEWS', icon: Review },
	{ id: 8, text: 'BRANDS', icon: Brand },
	{ id: 9, divider: true },
	{ id: 10, text: 'LOG OUT', icon: logout },
	{ id: 11, text: 'OTHER PAGES', icon: Copy },
];

export const ViewDetails = [
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
