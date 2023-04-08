import Container from '@components/container';
import { Box, Button, Typography } from '@mui/material';
import Breadcrumbs from '../../components/breadcrumbs/index';
import { VendorTable, VendorGrid } from './boxLayout';
import { useState } from 'react';
import GridViewIcon from '@mui/icons-material/GridView';
import TableViewIcon from '@mui/icons-material/TableView';
const Vendors = () => {
	const [view, setView] = useState('grid')
	function toggleView() {
		setView(view === 'grid' ? 'table' : 'grid')
	}


	return (
		<Container>

			<Typography variant='h5' fontWeight='bold'>
				Vendors
			</Typography>
			<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<Breadcrumbs />

				{view === 'grid' ? (
					<GridViewIcon sx={{ cursor: 'pointer', color: 'blue.500' }} onClick={toggleView} />
				) : (
					<TableViewIcon sx={{ cursor: 'pointer', color: 'blue.500' }} onClick={toggleView} />
				)}

			</Box>
			{view === 'grid' ? <VendorGrid /> : <VendorTable />}

		</Container>
	);
};

export default Vendors;
