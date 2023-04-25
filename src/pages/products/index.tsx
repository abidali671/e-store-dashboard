import React, { useState } from 'react';
import { Breadcrumbs, Container, Pagination } from '@components';
import ProductCard from '@components/productCard';
import { mainProduct } from '@components/productCard/productCard.style';
import SearchBar from '@components/searchBar';
import { Box, Stack, Typography, Button } from '@mui/material';
import { categoryData } from 'src/data/category';
import { useNavigate } from 'react-router-dom';

const Products = () => {
	const [entries, setEntries] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);
	const navigate = useNavigate()
	const totalPages = React.useMemo(() => {
		return Math.ceil(categoryData.length / entries);
	}, [entries]);

	const dataShow = React.useMemo(() => {
		return categoryData.slice((currentPage - 1) * entries, (currentPage - 1) * entries + entries);
	}, [entries, currentPage]);

	const handleEntries = (e: any) => {
		setEntries(+e.target.value);
	};
	return (
		<Container>
			<Typography variant='h5' fontWeight='bold'>
				Products
			</Typography>
			<Breadcrumbs />
			<Box sx={{ border: '1px solid', borderColor: 'gray.100', borderRadius: '20px' }}>
				<Box sx={{ py: '40px', px: '40px' }}>
					<Stack
						flexWrap='wrap'
						gap={3}
						width='100%'
						flexDirection='row'
						justifyContent='space-between'
					>
						<SearchBar placeholderText='search with product name' />
						<Stack flexDirection='row' gap={2}>
							<Button
								variant='outlined'
								sx={{
									color: 'gray.400',
									borderColor: 'gray.100',
									borderRadius: '10px',
									height: '45px',
								}}

							>
								All Category
							</Button>
							<Button
								variant='outlined'
								sx={{
									color: 'gray.400',
									borderColor: 'gray.100',
									borderRadius: '10px',
									height: '45px',
								}}
								onClick={() => navigate('/add-product')}
							>
								ORDER BY
							</Button>
						</Stack>
					</Stack>
					<Box sx={mainProduct}>
						{dataShow.map(((category, ind) => (
							<ProductCard title={category.name} price='200$' key={ind} />
						)))

						}
					</Box>


				</Box>
				<Pagination
					page={currentPage}
					onChange={setCurrentPage}
					count={totalPages}
					dataShow={dataShow}
					data={categoryData}
					entries={entries}
					handleEntries={handleEntries}
				/>
			</Box>
		</Container>
	);
};

export default Products;
