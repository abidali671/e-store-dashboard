import { NewEnquiry, NewUsers } from '@assets/icons';
import { SVGProps } from 'react';

export interface UserDataCardsT {
	title: string;
	info?: string;
	icon?: React.FC;
}
export const userDataCards: UserDataCardsT[] = [
	{
		title: '13.75K',
		info: 'NEW USERS',
		icon: NewUsers,
	},
	{
		title: '38.45k',
		info: 'TOTAL SALES',
		icon: NewUsers,
	},
	{
		title: '1.5K',
		info: 'ORDERS',
		icon: NewUsers,
	},
];

export interface NotificationsT {
	title: string;
	info?: string;
	icon?: React.FC<SVGProps<SVGSVGElement>>;
}
export const Notifications: NotificationsT[] = [
	{
		title: 'New Enquiry',
		info: 'Selena has placed an new order',
		icon: NewEnquiry,
	},
	{
		title: 'New Order',
		info: 'Selena has placed an new order',
		icon: NewEnquiry,
	},
	{
		title: 'Support Ticket',
		info: 'Selena has placed an new order',
		icon: NewEnquiry,
	},
	{
		title: 'Company Meetup',
		info: 'Selena has placed an new order',
		icon: NewEnquiry,
	},
	{
		title: 'New Order',
		info: 'Selena has placed an new order',
		icon: NewEnquiry,
	},
	{
		title: 'Support Ticket',
		info: 'Selena has placed an new order',
		icon: NewEnquiry,
	},
];
