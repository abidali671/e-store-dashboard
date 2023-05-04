import React, { useState } from 'react';
import { Breadcrumbs, Container, Pagination } from '@components';
import SearchBar from '@components/searchBar';
import { Box, Typography } from '@mui/material';

import GridViewIcon from '@mui/icons-material/GridView';
import TableViewIcon from '@mui/icons-material/TableView';
import { ProductTable, ProductGrid } from './boxLayout';

const Products = () => {
	const [view, setView] = useState('grid');
	const [onSearch, setOnSearch] = useState('');
	function toggleView() {
		setView(view === 'grid' ? 'table' : 'grid');
	}

	return (
		<Container>
			<Typography variant='h5' fontWeight='bold'>
				Products
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
			{view === 'grid' ? <ProductGrid /> : <ProductTable onSearch={onSearch} />}
		</Container>
	);
};

export default Products;
