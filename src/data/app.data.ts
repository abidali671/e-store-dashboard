import dashboardIcon from '@assests/element4.png';
import trontron from '@assests/trontron.png';
import profile2user from '@assests/profile2user.png';
import solana from '@assests/solana.png';
import convertshape2 from '@assests/convertshape2.png';
import shoppingcart from '@assests/shoppingcart.png';
import star from '@assests/star.png';
import tag2 from '@assests/tag2.png';
import copy from '@assests/copy.png';
import userAdd from '@assests/useradd.png';
import packageplus from '@assests/packageplus.png';
import dollarsquare from '@assests/dollarsquare.png';

export interface SideItemT {
	id: number;
	text?: string;
	icon?: string;
	divider?: boolean;
}

export const sideListItems: SideItemT[] = [
	{ id: 1, text: 'DASHBOARD', icon: dashboardIcon },
	{ id: 2, text: 'VENDORS', icon: trontron },
	{ id: 3, divider: true },
	{ id: 4, text: 'CATAGORIES', icon: profile2user },
	{ id: 5, text: 'PRODUCTS', icon: solana },
	{ id: 6, text: 'ORDERS', icon: convertshape2 },
	{ id: 7, text: 'REVIEWS', icon: shoppingcart },
	{ id: 8, text: 'BRANDS', icon: star },
	{ id: 9, divider: true },
	{ id: 10, text: 'LOG OUT', icon: tag2 },
	{ id: 11, text: 'OTHER PAGES', icon: copy },
];

export const ViewDetails = [{
	title: '1.15K',
	info: 'Daily Signups',
	icon:userAdd
},{
	title: '38.45k',
	info: 'Daily Visitors',
	icon:profile2user
},
{
	title: '13.75K',
	info: 'Daily Orders',
	icon:packageplus
},{
	title: '$1.5M',
	info: 'Daily Revenue',
	icon:dollarsquare
},

]