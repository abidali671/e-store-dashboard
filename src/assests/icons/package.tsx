import * as React from 'react';
import { SVGProps } from 'react';

const Package = (props: SVGProps<SVGSVGElement>) => (
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
			strokeWidth='2'
			d='M26.428 9.6L15.343 3.2 4.258 9.6v12.8l11.085 6.4M26.428 9.6l-11.085 7.2m11.085-7.2V16M15.343 28.8v-12m0 12l2.4-1.385m-2.4-10.615l-10.4-6.4m15.2 2.4l-10.4-6.4m10.799 17.2h3.6m0 0h3.6m-3.6 0V20m0 3.6v3.6'
		></path>
	</svg>
);

export default Package;
