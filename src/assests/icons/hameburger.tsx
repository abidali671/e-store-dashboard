import React from 'react';

function Hameburger(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='36'
			height='36'
			{...props}
			fill='none'
			viewBox='0 0 36 36'
		>
			<rect width='36' height='36' fill='#757575' rx='8'></rect>
			<g filter='url(#filter0_b_147_566)'>
				<rect width='28' height='28' x='4' y='4' fill='#F8F8F8' rx='8'></rect>
				<rect
					width='27'
					height='27'
					x='4.5'
					y='4.5'
					stroke='currentColor'
					strokeOpacity='0.2'
					rx='7.5'
				></rect>
			</g>
			<g stroke='#000' strokeWidth='2' filter='url(#filter1_d_147_566)'>
				<path d='M8 12L28 12'></path>
				<path d='M8 17L28 17'></path>
				<path d='M8 22L28 22'></path>
			</g>
			<defs>
				<filter
					id='filter0_b_147_566'
					width='36'
					height='36'
					x='0'
					y='0'
					colorInterpolationFilters='sRGB'
					filterUnits='userSpaceOnUse'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
					<feGaussianBlur in='BackgroundImageFix' stdDeviation='2'></feGaussianBlur>
					<feComposite
						in2='SourceAlpha'
						operator='in'
						result='effect1_backgroundBlur_147_566'
					></feComposite>
					<feBlend in='SourceGraphic' in2='effect1_backgroundBlur_147_566' result='shape'></feBlend>
				</filter>
				<filter
					id='filter1_d_147_566'
					width='24'
					height='16'
					x='6'
					y='11'
					colorInterpolationFilters='sRGB'
					filterUnits='userSpaceOnUse'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
					<feColorMatrix
						in='SourceAlpha'
						result='hardAlpha'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
					></feColorMatrix>
					<feOffset dy='2'></feOffset>
					<feGaussianBlur stdDeviation='1'></feGaussianBlur>
					<feComposite in2='hardAlpha' operator='out'></feComposite>
					<feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'></feColorMatrix>
					<feBlend in2='BackgroundImageFix' result='effect1_dropShadow_147_566'></feBlend>
					<feBlend in='SourceGraphic' in2='effect1_dropShadow_147_566' result='shape'></feBlend>
				</filter>
			</defs>
		</svg>
	);
}

export default Hameburger;
