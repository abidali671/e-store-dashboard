import React from 'react';

const Search = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		fill='none'
		viewBox='0 0 24 24'
		{...props}
	>
		<path
			stroke='#56606E'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='1.5'
			d='M10 20a9 9 0 100-18 9 9 0 000 18v0zm7.93.69c.53 1.6 1.74 1.76 2.67.36.85-1.28.29-2.33-1.25-2.33-1.14-.01-1.78.88-1.42 1.97v0z'
		></path>
	</svg>
);

export default Search;
