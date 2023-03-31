import React, { useState } from 'react';
import Pagination from '@components/box/pagination';
import {
	TableCell,
	MenuItem,
	Typography,
	Box,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
	Select,
	SelectChangeEvent,
} from '@mui/material';

interface TableProps {
	columns: { name: string; label: string; render?: (arg: string) => JSX.Element }[];
	data: Record<string, string>[];
}

const TableComponent: React.FC<TableProps> = ({ data, columns }) => {
	const [entries, setEntries] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = React.useMemo(() => {
		return Math.ceil(data.length / entries);
	}, [entries]);

	const dataShow = React.useMemo(() => {
		return data.slice((currentPage - 1) * entries, (currentPage - 1) * entries + entries);
	}, [entries, currentPage]);

	const handleEntries = (e: SelectChangeEvent<string>) => {
		setEntries(+e.target.value);
	};

	return (
		<TableContainer
			sx={{
				border: '1px solid #D9D9D9',
				borderRadius: '20px',
				overflow: 'hidden',
			}}
		>
			<Table>
				<TableHead>
					<TableRow>
						{columns.map((column) => (
							<TableCell
								sx={{
									borderRadius: '20px',
									boxShadow: 'none',
									textAlign: 'center',
									fontWeight: 'bold',
								}}
								key={column.name}
							>
								{column.label}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{dataShow.map((item, index) => (
						<TableRow key={index}>
							{columns.map((column, index) => (
								<TableCell key={index} sx={{ textAlign: 'center' }}>
									{column?.render ? column?.render(item[column.name]) : item[column.name]}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
			<Box
				sx={{
					display: 'flex',
					justifyContent: { md: 'space-between', sm: 'center' },
					gap: '5px',
					alignItems: 'center',
					px: 2,
					py: 1,
				}}
			>
				<Box>
					<Typography
						variant='caption'
						color='#9F9B9B'
						sx={{ display: { xs: 'none', md: 'block' } }}
					>
						Showing 1 to 20 of 88 entries
					</Typography>
				</Box>
				<Box sx={{ display: 'flex', alignItems: 'center', color: '#9F9B9B' }}>
					<Typography variant='h6' fontSize={16} color='inherit'>
						Show
					</Typography>
					<Select
						sx={{
							'.MuiInputBase-root': {
								height: '30px',
								borderRadius: '40px',
								border: '1px solid #D9D9D9',
							},
							width: '80px',
							display: 'flex',
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
				<Box>
					<Pagination page={currentPage} onChange={setCurrentPage} count={totalPages} />
				</Box>
			</Box>
		</TableContainer>
	);
};
export default TableComponent;
