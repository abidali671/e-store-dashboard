import * as React from 'react';
import { SVGProps } from 'react';

const NewEnquiry = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns='http://www.w3.org/2000/svg' width={22} height={22} fill='none' {...props}>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={10}
			strokeWidth={1.5}
			d='M1 1h1.74c1.08 0 1.93.93 1.84 2l-.83 9.96a2.796 2.796 0 0 0 2.79 3.03h10.65c1.44 0 2.7-1.18 2.81-2.61l.54-7.5c.12-1.66-1.14-3.01-2.81-3.01H4.82M8 7h12m-4.75 14a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm-8 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z'
		/>
	</svg>
);

export default NewEnquiry;
