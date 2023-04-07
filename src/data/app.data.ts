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
	{ label: 'CATAGORIES', icon: Category, path: '/category' },
	{ label: 'PRODUCTS', icon: Products, path: '/products' },
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
	data?: any;
	typeChart?: boolean;
}


