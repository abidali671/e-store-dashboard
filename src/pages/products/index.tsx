import { Breadcrumbs, Container } from '@components';
import { Typography } from '@mui/material';
import React from 'react';

const Products = () => {
	return (
		<Container>
			<Typography variant='h5' fontWeight='bold'>
				Category
			</Typography>
			<Breadcrumbs />

		</Container>
	);
};

export default Products;
