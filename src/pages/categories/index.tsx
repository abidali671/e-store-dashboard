import { Container, Table, Breadcrumbs } from '@components';
import {
	Typography,
	Grid,
	Box,
	Chip,
	Button,
	Tooltip,
	IconButton,
	Menu,
	MenuItem,
} from '@mui/material';
// import { categoryData } from 'src/data/category';
import { useNavigate } from 'react-router-dom';
import { MoreOption } from '@assests/icons';
import { useState } from 'react';
import useCategoryData from './categories.hook';

const Categories = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const { categoryData, loading, error } = useCategoryData();


	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleEdit = () => {
		navigate('/edit-category');
		handleClose();
	};

	const handleDelete = () => {
		handleClose();
	};
	const navigate = useNavigate();

	return (
		<Container sx={{ display: 'flex', flexDirection: 'column' }}>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<Box>
					<Typography variant='h5' fontWeight='bold'>
						Category
					</Typography>
					<Breadcrumbs />
				</Box>
				<Button
					variant='text'
					color='secondary'
					onClick={() => navigate('/add-category')}
					sx={{ backgroundColor: '#3D72D9', borderRadius: '40px', fontWeight: 500 }}
				>
					Add
				</Button>
			</Box>

			<Grid container columns={12} spacing={4}>
				<Grid item xs={12} md={12}>
					<Table
						columns={[
							{
								name: 'thumb',
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
								render: () => (
									<Box>
										<IconButton
											aria-controls='dropdown-menu'
											aria-haspopup='true'
											onClick={handleClick}
										>
											<MoreOption style={{ height: '20px', width: '20px' }} />
										</IconButton>
										<Menu
											id='basic-menu'
											anchorEl={anchorEl}
											open={Boolean(anchorEl)}
											onClose={handleClose}
											MenuListProps={{
												'aria-labelledby': 'basic-button',
											}}
										>
											<MenuItem onClick={handleEdit}>Edit</MenuItem>
											<MenuItem onClick={handleDelete}>Delete</MenuItem>
										</Menu>
									</Box>
								),
							},
						]}
						data={categoryData}
					/>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Categories;
