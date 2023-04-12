import { Breadcrumbs, Container } from '@components';
import ProductCard from '@components/productCard';
import { Box, Typography } from '@mui/material';


const Products = () => {
	return (
		<Container>
			<Typography variant='h5' fontWeight='bold'>
				Products
			</Typography>
			<Breadcrumbs />
			<Box sx={{ border: '1px solid', borderColor: 'gray.100', borderRadius: '20px', }}>
				<ProductCard />
			</Box>
		</Container>
	);
};

export default Products;
