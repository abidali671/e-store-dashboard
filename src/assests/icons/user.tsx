import React from 'react';

const User = (props: React.SVGProps<SVGSVGElement>) => (
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
			d='M4.547 29.333C4.547 24.173 9.68 20 16 20c1.28 0 2.52.173 3.68.493M16 16a6.667 6.667 0 100-13.334A6.667 6.667 0 0016 16v0z'
		></path>
		<path
			stroke='#000'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit='10'
			strokeWidth='1.5'
			d='M25.987 23.973h-3.974M24 22.027v3.986M29.333 24c0 .427-.053.84-.16 1.24a4.98 4.98 0 01-.613 1.507A5.294 5.294 0 0124 29.333a5.227 5.227 0 01-3.547-1.373c-.4-.347-.746-.76-1.013-1.213A5.227 5.227 0 0118.667 24 5.329 5.329 0 0124 18.667c1.573 0 3 .68 3.96 1.773A5.312 5.312 0 0129.333 24z'
		></path>
	</svg>
);

export default User;
