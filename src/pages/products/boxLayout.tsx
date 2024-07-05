import { MoreOption } from '@assests/icons';
import { Pagination, ProductCard, SearchBar, Table } from '@components';
import { mainProduct } from '@components/productCard/productCard.style';
import { Button, IconButton, MenuItem, Select } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProductData from './product.hook';
import API from 'src/axios';
export const ProductGrid = () => {
	const [selectMenu, setSelectMenu] = useState('All category');

	const [entries, setEntries] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);
	const navigate = useNavigate();

	const { productData: products, loading, error } = useProductData();
	const [productFilter, setProductFilter] = useState([]);

	useEffect(() => {
		if (!loading && !error && products) {
			setProductFilter(products);
		}
	}, [loading, error, products]);
	console.log(productFilter, 'product===');

	const handleChange = (event: any) => {
		const selectedCategory = event.target.value;
		setSelectMenu(event.target.value);
		selectedCategory === 'All category'
			? setProductFilter(products)
			: setProductFilter(products.filter((item) => item.name === selectedCategory));
	};

	const totalPages = useMemo(() => {
		return Math.ceil(productFilter.length / entries);
	}, [entries]);

	const dataShow = useMemo(() => {
		return productFilter.slice((currentPage - 1) * entries, (currentPage - 1) * entries + entries);
	}, [entries, currentPage, productFilter]);

	const handleEntries = (e: any) => {
		setEntries(+e.target.value);
	};

	return (
		<Box sx={{ border: '1px solid', borderColor: 'gray.50', borderRadius: '20px' }}>
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
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={selectMenu}
							label='categories'
							defaultValue='All category'
							onChange={handleChange}
						>
							<MenuItem value='All category'>All category</MenuItem>
							<MenuItem value='Shirt'>Shirt</MenuItem>
							<MenuItem value='Bag'>Bag</MenuItem>
						</Select>
						<Button
							sx={{
								color: 'gray.400',
								borderColor: 'gray.50',
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
					{dataShow.length > 0
						? dataShow.map((category, ind) => (
								<ProductCard
									title={category.name}
									id={category.id}
									price={category.price}
									slug={category.slug}
									key={ind}
								/>
						  ))
						: 'No products found'}
				</Box>
			</Box>
			<Pagination
				page={currentPage}
				onChange={setCurrentPage}
				count={totalPages}
				dataShow={dataShow}
				data={productFilter}
				entries={entries}
				handleEntries={handleEntries}
			/>
		</Box>
	);
};

export const ProductTable: React.FC<{ onSearch: string }> = ({ onSearch }) => {
	const { productData: products, loading, error } = useProductData();
	const [productFilter, setProductFilter] = useState([]);

	useEffect(() => {
		if (!loading && !error && products) {
			setProductFilter(products);
		}
	}, [loading, error, products]);

	useEffect(() => {
		const filtered = products.filter((item) =>
			item.name.toLowerCase().includes(onSearch.toLowerCase()),
		);
		setProductFilter(filtered);
	}, [onSearch]);

	return (
		<Table
			columns={[
				{
					name: 'product',
					label: 'Product',
					render: (val: string) => (
						<Box
							component='img'
							sx={{
								height: '48px',
								width: '48px',
								objectFit: 'cover',
								borderRadius: '50%',
								objectPosition: 'center',
							}}
							src={val}
							alt=''
							height='100'
							width='100'
						/>
					),
				},

				{ name: 'name', label: 'Name' },
				{ name: 'price', label: 'Price' },
				{ name: 'discount', label: 'Discount' },
				{ name: 'totalSell', label: 'Total Sell' },
				{
					name: 'status',
					label: 'Status',
				},
				{
					name: 'joinOn',
					label: 'Join On',
				},
				{
					name: 'action',
					label: 'Action',
					render: () => (
						<IconButton>
							<MoreOption style={{ height: '20px', width: '20px' }} />
						</IconButton>
					),
				},
			]}
			data={productFilter}
		/>
	);
};
