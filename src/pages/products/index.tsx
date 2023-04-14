import { Breadcrumbs, Container } from '@components';
import ProductCard from '@components/productCard';
import SearchBar from '@components/searchBar';
import { Box, Stack, Typography, Button } from '@mui/material';


const Products = () => {
	return (
		<Container>
			<Typography variant='h5' fontWeight='bold'>
				Products
			</Typography>
			<Breadcrumbs />
			<Box sx={{ border: '1px solid', borderColor: 'gray.100', borderRadius: '20px', }}>
				<Box sx={{ py: '40px', px: '40px' }}>
					<Stack flexWrap='wrap' gap={3} width='100%' flexDirection='row' justifyContent='space-between' >
						<SearchBar placeholderText='search with product name' />
						<Stack flexDirection='row' gap={2}>
							<Button variant="outlined" sx={{ color: 'gray.400', borderColor: 'gray.100', borderRadius: '10px', height: '45px' }}>
								All Category
							</Button>
							<Button variant="outlined" sx={{ color: 'gray.400', borderColor: 'gray.100', borderRadius: '10px', height: '45px' }}>
								ORDER BY
							</Button>
						</Stack>
					</Stack>
					<ProductCard />
				</Box>
			</Box>
		</Container>
	);
};

export default Products;
