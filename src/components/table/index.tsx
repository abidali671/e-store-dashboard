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
	Box,
} from '@mui/material';
import { tableContainer } from './table.styles';
import { JSONArray, JSONValue } from '@types';
import { useLocation, useNavigate } from 'react-router-dom';

interface TableProps {
	columns: {
		name: string;
		label: string;
		render?: (column_value: JSONValue) => JSX.Element;
	}[];
	data: JSONArray;
}

const TableComponent: React.FC<TableProps> = ({ data, columns }) => {
	const [entries, setEntries] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);
	const navigate = useNavigate();
	const location = useLocation();

	const RouteToProfile = (id: string) => {
		navigate(`/vendors/${id}`);
	};

	const totalPages = React.useMemo(() => {
		return Math.ceil(data.length / entries);
	}, [entries]);

	const dataShow = React.useMemo(() => {
		return data.slice((currentPage - 1) * entries, (currentPage - 1) * entries + entries);
	}, [entries, currentPage, data]);

	const handleEntries = (e: SelectChangeEvent<string>) => {
		setEntries(+e.target.value);
	};

	return (
		<Box sx={tableContainer}>
			<TableContainer>
				<Table stickyHeader>
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell key={column.name}>{column.label}</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{dataShow.map((item, index) => (
							<TableRow key={index}>
								{columns.map((column, index) => (
									<TableCell
										onClick={() => location.pathname == '/vendors' && RouteToProfile(item['id'])}
										key={index}
									>
										{column?.render ? column?.render(item[column.name]) : item[column.name]}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Pagination
				page={currentPage}
				onChange={setCurrentPage}
				count={totalPages}
				dataShow={dataShow}
				data={data}
				entries={entries}
				handleEntries={handleEntries}
			/>
		</Box>
	);
};
export default TableComponent;
