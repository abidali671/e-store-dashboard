import React, { useState } from 'react';
import Pagination from '@components/box/pagination';
import {
	TableCell,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,

	SelectChangeEvent,
} from '@mui/material';
import { tableContainer } from './table.styles';

interface TableProps {
	columns: { name: string; label: string; render?: (column_value: unknown) => JSX.Element }[];
	data: unknown[];
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
	console.log(data, 'datdsa=');


	return (
		<TableContainer sx={tableContainer}>
			<Table stickyHeader>
				<TableHead>
					<TableRow>
						{columns.map((column) => (
							<TableCell key={column.name}>
								{column.label}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody >
					{dataShow.map((item, index) => (
						<TableRow key={index} sx={{ border: index < dataShow.length - 1 ? '1 ' : '0' }}>
							{columns.map((column, index) => (
								<TableCell key={index} >
									{column?.render ? column?.render(item[column.name]) : item[column.name]}
								</TableCell>
							))}
						</TableRow>

					))}
				</TableBody>
			</Table>
			<Pagination page={currentPage} onChange={setCurrentPage} count={totalPages} dataShow={dataShow} data={data} entries={entries} handleEntries={handleEntries} />
		</TableContainer>
	);
};
export default TableComponent;
