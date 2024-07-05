import Container from '@components/container';
import { Box, Typography } from '@mui/material';
import { Breadcrumbs, SearchBar } from '@components';
import { UserTable, UserGrid } from './boxLayout';
import { useState } from 'react';
import GridViewIcon from '@mui/icons-material/GridView';
import TableViewIcon from '@mui/icons-material/TableView';

const Users = () => {
	const [view, setView] = useState('grid');
	const [onSearch, setOnSearch] = useState('');
	function toggleView() {
		setView(view === 'grid' ? 'table' : 'grid');
	}

	return (
		<Container>
			<Typography variant='h5' fontWeight='bold'>
				Users
			</Typography>
			<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<Breadcrumbs />
				{view === 'table' && <SearchBar placeholderText='Filter table' setOnSearch={setOnSearch} />}
				{view === 'grid' ? (
					<GridViewIcon sx={{ cursor: 'pointer', color: 'blue.500' }} onClick={toggleView} />
				) : (
					<TableViewIcon sx={{ cursor: 'pointer', color: 'blue.500' }} onClick={toggleView} />
				)}
			</Box>
			{view === 'grid' ? <UserGrid /> : <UserTable onSearch={onSearch} />}
		</Container>
	);
};

export default Users;
