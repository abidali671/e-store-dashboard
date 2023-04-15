import Container from '@components/container';
import { Box, Button, Typography } from '@mui/material';
import Breadcrumbs from '../../components/breadcrumbs/index';
import { VendorTable, VendorGrid } from './boxLayout';
import { useState } from 'react';
import GridViewIcon from '@mui/icons-material/GridView';
import TableViewIcon from '@mui/icons-material/TableView';
import SearchBar from '@components/searchBar';

const Vendors = () => {
	const [view, setView] = useState('grid');
	const [onSearch, setOnSearch] = useState('');
	function toggleView() {
		setView(view === 'grid' ? 'table' : 'grid');
	}

	return (
		<Container>
			<Typography variant='h5' fontWeight='bold'>
				Vendors
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
			{view === 'grid' ? <VendorGrid /> : <VendorTable onSearch={onSearch} />}
		</Container>
	);
};

export default Vendors;
