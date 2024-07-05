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
import { JSONValue, pathnames } from '@types';

export interface SideItemT {
	label?: string;
	icon?: React.FC<React.SVGProps<SVGSVGElement>>;
	divider?: boolean;
	path?: string;
}

export const sideListItems: SideItemT[] = [
	{ label: 'DASHBOARD', path: pathnames.DASHBOARD, icon: Dashboard },
	{ label: 'VENDORS', path: pathnames.VENDORS, icon: Vendors },
	{ divider: true },
	{ label: 'CATAGORIES', icon: Category, path: pathnames.CATEGORY },
	{ label: 'PRODUCTS', icon: Products, path: pathnames.PRODUCTS },
	{ label: 'ORDERS', icon: Order, path: pathnames.ORDERS },
	{ label: 'REVIEWS', icon: Review },
	{ label: 'BRANDS', icon: Brand },
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
	data?: JSONValue;
	typeChart?: boolean;
}
