import * as React from 'react';

const Brand = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		color='#000'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='m4.405 15.526 4.53 4.53a4.78 4.78 0 0 0 6.75 0l4.39-4.39a4.78 4.78 0 0 0 0-6.75l-4.54-4.52a4.75 4.75 0 0 0-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.35.45 2.66 1.4 3.61v0Z'
			stroke='currentColor'
			strokeWidth={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.735 12.226a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5v0Z'
			stroke='currentColor'
			strokeWidth={1.5}
			strokeLinecap='round'
		/>
		<path
			d='m13.235 17.226 4-4'
			stroke='currentColor'
			strokeWidth={1.5}
			strokeMiterlimit={10}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

export default Brand;
