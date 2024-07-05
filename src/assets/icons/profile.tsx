import * as React from 'react';
import { SVGProps } from 'react';

const Profile = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='32'
		height='32'
		color='#000'
		fill='none'
		viewBox='0 0 32 32'
		{...props}
	>
		<path
			 stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='1.5'
			d='M21.88 5.333A4.663 4.663 0 0126.547 10c0 2.52-2 4.573-4.494 4.667a1.5 1.5 0 00-.346 0m2.746 12c.96-.2 1.867-.587 2.614-1.16 2.08-1.56 2.08-4.134 0-5.694-.734-.56-1.627-.933-2.574-1.146m-12.28-4.174a2.43 2.43 0 00-.44 0A5.893 5.893 0 016.08 8.587c0-3.267 2.64-5.92 5.92-5.92a5.914 5.914 0 01.213 11.826zm-6.666 4.92c-3.227 2.16-3.227 5.68 0 7.827 3.666 2.453 9.68 2.453 13.346 0 3.227-2.16 3.227-5.68 0-7.827-3.653-2.44-9.666-2.44-13.346 0v0z'
		></path>
	</svg>
);

export default Profile;
