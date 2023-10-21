import { Container, Table, Breadcrumbs } from '@components';
import { Typography, Grid, Box, Button, IconButton, Menu, MenuItem } from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';
import { useNavigate } from 'react-router-dom';
import { MoreOption } from '@assests/icons';
import { useState } from 'react';
import useCategoryData from './categories.hook';
import API from 'src/axios';
import { toast, ToastContainer } from 'react-toastify';

const Categories = () => {
	const { categoryData, loading, refreshData } = useCategoryData();
	const navigate = useNavigate();
	console.log(categoryData);
	return (
		<Container sx={{ display: 'flex', flexDirection: 'column' }}>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<Box>
					<Typography variant='h5' fontWeight='bold'>
						Category
					</Typography>
					<Breadcrumbs />
				</Box>
				<Box sx={{ alignItems: 'center', display: 'flex', gap: 2 }}>
					<CachedIcon
						onClick={refreshData}
						sx={{
							color: 'gray.200',
							transition: 'transform 0.3s',
							'&:hover': { color: 'gray.400', transform: 'rotate(180deg)', cursor: 'pointer' },
						}}
					/>

					<Button
						variant='text'
						color='secondary'
						onClick={() => navigate('/category/add-category')}
						sx={{ backgroundColor: '#3D72D9', borderRadius: '40px', fontWeight: 500 }}
					>
						Add
					</Button>
				</Box>
			</Box>

			<Grid container columns={12} spacing={4}>
				<Grid item xs={12} md={12}>
					{loading ? (
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								color: 'gray.200',
							}}
						>
							<Typography variant='h5'>Loading...</Typography>
						</Box>
					) : (
						<Table
							columns={[
								{
									name: 'thumbnail',
									label: 'Thumb',
									render: (val: string) => (
										<Box
											component='img'
											sx={{
												height: '48px',
												width: '48px',
												objectFit: 'cover',
												objectPosition: 'center',
											}}
											src={val}
										/>
									),
								},
								{ name: 'name', label: 'Name' },

								{ name: 'product', label: 'Product' },
								{ name: 'totalSell', label: 'Total Sell' },
								{
									name: 'status',
									label: 'Status',
								},

								{
									name: 'action',
									label: '',
									render: (productSlug, item) => <ActionButton item={item} />,
								},
							]}
							data={categoryData}
						/>
					)}
				</Grid>
			</Grid>
			<ToastContainer />
		</Container>
	);
};

const ActionButton = ({ item }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const navigate = useNavigate();
	const handleEdit = () => {
		navigate(`/category/${item.slug}`);
	};

	const handleDelete = async () => {
		try {
			const res = await API.delete(`/api/category/${item.slug}`);
			toast.success(res.data.msg);
		} catch (error) {
			console.log(error);
		}
		handleClose();
	};
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<Box>
			<IconButton onClick={handleClick}>
				<MoreOption style={{ height: '20px', width: '20px' }} />
			</IconButton>
			<Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
				<MenuItem onClick={handleEdit}>Edit</MenuItem>
				<MenuItem onClick={handleDelete}>Delete</MenuItem>
			</Menu>
		</Box>
	);
};

export default Categories;
