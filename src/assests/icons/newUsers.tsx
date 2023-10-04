import { SVGProps, memo } from 'react';
const NewUsers = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns='http://www.w3.org/2000/svg' width={40} height={40} fill='none' {...props}>
		<rect width={40} height={40} fill='#3D72D9' rx={16} />
		<path
			stroke='#fff'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='m27.922 14.776-8.775-5.184-8.776 5.184v10.368l8.776 5.184m8.776-15.552-8.776 5.832m8.776-5.832v5.184m-8.776 10.368v-9.72m0 9.72 1.9-1.122m-1.9-8.598-8.233-5.184m12.033 1.944-8.233-5.184m8.548 13.932h2.85m0 0h2.85m-2.85 0V23.2m0 2.916v2.916'
		/>
	</svg>
);
const Memo = memo(NewUsers);
export default NewUsers;
