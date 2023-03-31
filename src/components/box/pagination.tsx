import * as React from 'react';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
// import * as styles from './pagination.styles';
const List = styled('ul')({
	listStyle: 'none',
	padding: 0,
	margin: 0,
	display: 'flex',
});

export default function Pagination({ count = 10, page, onChange }) {
	const { items } = usePagination({ count, page });

	return (
		<List
			sx={{
				'& > li> button': {
					height: '27px',
					border: '1px solid #D9D9D9',
					padding: '1px 6px',
				},

				display: 'flex',

				alignItems: 'center',
			}}
		>
			{items.map(({ page, type, selected, onClick, ...item }, index) => {
				let children = null;

				if (type === 'start-ellipsis' || type === 'end-ellipsis') {
					children = '…';
				} else if (type === 'page') {
					children = (
						<button
							type='button'
							style={{
								color: selected ? 'white' : 'black',
								cursor: 'pointer',
								outline: 'none',
								backgroundColor: selected ? '#86AAF1' : '',
							}}
							{...item}
							onClick={(e) => {
								onClick(e);
								onChange(page);
							}}
						>
							{page}
						</button>
					);
				} else {
					children = (
						<button
							type='button'
							{...item}
							style={{
								width: '95px',

								border: 'none',
								outline: 'none',
								borderRadius: type === 'previous' ? '20px 0px 0px 20px' : '0px 20px 20px  0px',
								textTransform: 'capitalize',
								color: '#9F9B9B',
								cursor: 'pointer',
								backgroundColor: '#D9D9D9',
							}}
							onClick={(e) => {
								onClick(e);
								onChange(page);
							}}
						>
							{type}
						</button>
					);
				}

				return <li key={index}>{children}</li>;
			})}
		</List>
	);
}
