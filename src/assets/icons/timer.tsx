import * as React from 'react';
import { SVGProps } from 'react';
const Timer = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns='http://www.w3.org/2000/svg' width={22} height={22} fill='none' {...props}>
		<path
			stroke='#63666D'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11 7.333v4.584m8.02.229a8.024 8.024 0 0 1-8.02 8.02 8.024 8.024 0 0 1-8.021-8.02 8.024 8.024 0 0 1 8.02-8.021 8.024 8.024 0 0 1 8.022 8.02Z'
		/>
		<path
			stroke='#63666D'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={10}
			strokeWidth={1.5}
			d='M8.25 1.833h5.5'
		/>
	</svg>
);
export default Timer;
