import { MoreOption } from '@assests/icons';
import { Pagination, ProductCard, SearchBar, Table } from '@components';
import { mainProduct } from '@components/productCard/productCard.style';
import { Button, IconButton, MenuItem, Select } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { useEffect, useMemo, useState, useId } from 'react';
import { useNavigate } from 'react-router-dom';
import { productData } from 'src/data/product';


export const ProductGrid = () => {
	const [selectMenu, setSelectMenu] = useState('All category');
	const [filteredData, setFilteredData] = useState(productData);

	const handleChange = (event: any) => {
		const selectedCategory = event.target.value;
		setSelectMenu(event.target.value)
		selectedCategory === 'All category' ? setFilteredData(productData) :
			setFilteredData(data => data.filter(item => item.name === selectedCategory))
	};

	const [entries, setEntries] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);
	const navigate = useNavigate();

	const totalPages = useMemo(() => {
		return Math.ceil(filteredData.length / entries);
	}, [entries]);

	const dataShow = useMemo(() => {
		return filteredData.slice((currentPage - 1) * entries, (currentPage - 1) * entries + entries);
	}, [entries, currentPage, filteredData]);

	const handleEntries = (e: any) => {
		setEntries(+e.target.value);
	};


	return (
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
					{dataShow.length > 0 ? dataShow.map((category, ind) => (
						<ProductCard title={category['name']} price={category.price} key={ind} />
					)) : 'No products found'}
				</Box>
			</Box>
			<Pagination
				page={currentPage}
				onChange={setCurrentPage}
				count={totalPages}
				dataShow={dataShow}
				data={productData}
				entries={entries}
				handleEntries={handleEntries}
			/>
		</Box>
	);
};

export const ProductTable: React.FC<{ onSearch: string }> = ({ onSearch }) => {
	const [data, setData] = useState(productData);

	useEffect(() => {
		const filtered = productData.filter((item) =>
			item['name'].toLowerCase().includes(onSearch.toLowerCase()),
		);
		setData(filtered);
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
			data={data}
		/>
	);
};
