import * as React from 'react';
import { SVGProps } from 'react';

const Dollar = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='32'
		height='32'
		fill='none'
		viewBox='0 0 32 32'
		{...props}
	>
		<path
			stroke='#000'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='1.5'
			d='M11.563 19.107c0 1.72 1.32 3.106 2.96 3.106h3.346c1.427 0 2.587-1.213 2.587-2.706 0-1.627-.707-2.2-1.76-2.574l-5.373-1.866c-1.054-.374-1.76-.947-1.76-2.574 0-1.493 1.16-2.706 2.586-2.706h3.347c1.64 0 2.96 1.386 2.96 3.106M16 8v16'
		></path>
		<path
			stroke='#000'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='1.5'
			d='M20 29.333h-8c-6.667 0-9.333-2.666-9.333-9.333v-8c0-6.667 2.666-9.333 9.333-9.333h8c6.667 0 9.333 2.666 9.333 9.333v8c0 6.667-2.666 9.333-9.333 9.333z'
		></path>
	</svg>
);

export default Dollar;
