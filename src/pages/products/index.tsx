import { Breadcrumbs, Container } from '@components';
import ProductCard from '@components/productCard';
import { mainProduct } from '@components/productCard/productCard.style';
import SearchBar from '@components/searchBar';
import { Box, Stack, Typography, Button } from '@mui/material';
import useAxios from 'src/axios';


const Products = () => {

	const { response, loading, error, sendData } = useAxios({
		method: 'GET',
		url: '/products',
		headers: {
			accept: '*/*'
		}
	});
	console.log(response?.data, '=re');
	if (loading) {
		return <div>Loading...</div>;
	}

	// Check for error state
	if (error) {
		return <div>Error: {error.message}</div>;
	}


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
					<Box sx={mainProduct}>
						{response?.data.products.map((item, ind) => (
							<ProductCard title={item.title} price={item.price} image={item.images[0]} key={ind} />
						))}
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

export default Products;
