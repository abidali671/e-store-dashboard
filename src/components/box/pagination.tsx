import * as React from 'react';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import { Box, MenuItem, Select, Typography } from '@mui/material';
// import * as styles from './pagination.styles';
const List = styled('ul')({
	listStyle: 'none',
	padding: 0,
	margin: 0,
	display: 'flex',
});

export default function Pagination({ count, page, onChange, dataShow, data, entries, handleEntries }) {
	const { items } = usePagination({ count, page });

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					justifyContent: { md: 'space-between', sm: 'center' },
					gap: '5px',
					alignItems: 'center',
					px: 2,
					py: 1,
					borderTop: '1px solid',
					borderColor: 'gray.100'
				}}
			>
				<Box>
					<Typography
						variant='caption'
						color='#9F9B9B'
						sx={{ display: { xs: 'none', md: 'block' } }}
					>
						Showing {page} to {dataShow.length} of {data.length}
					</Typography>
				</Box>
				<Box sx={{ display: 'flex', alignItems: 'center', color: '#9F9B9B' }}>
					<Typography variant='h6' fontSize={16} color='inherit'>
						Show
					</Typography>
					<Select
						size='small'
						sx={{

							width: '80px',

							mx: 2,
						}}
						value={String(entries)}
						onChange={handleEntries}
					>
						<MenuItem value={5}>5</MenuItem>
						<MenuItem value={10}>10</MenuItem>
						<MenuItem value={20}>20</MenuItem>
					</Select>
					<Typography variant='h6' fontSize={16} color='#9F9B9B'>
						Entries
					</Typography>
				</Box>

				{/* pagination */}
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
			</Box>

		</>
	);
}
