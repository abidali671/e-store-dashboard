import { Container, Table, Breadcrumbs } from '@components';
import {
	Typography,
	Grid,
	Box,

	Chip,
	Button,
	Tooltip,
} from '@mui/material';
import { categoryData } from 'src/data/category';
import { useNavigate } from 'react-router-dom';
const Categories = () => {
	const navigate = useNavigate()
	return (
		<Container sx={{ display: 'flex', flexDirection: 'column' }}>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<Box>
					<Typography variant='h5' fontWeight='bold'>
						Category
					</Typography>
					<Breadcrumbs />
				</Box>
				<Button variant="text" color="secondary" onClick={() => navigate('/add-category')} sx={{ backgroundColor: '#3D72D9', borderRadius: '40px', fontWeight: 500 }}>
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
							{
								name: 'subCategory',
								label: 'Sub Category',
								render: (val: string[]) => (
									<Tooltip title={val.map((x, ind) => (ind ? ', ' : '') + x)}>
										<Chip sx={{ cursor: 'pointer' }} label={val.length} />
									</Tooltip>
								),
							},
							{ name: 'product', label: 'Product' },
							{ name: 'totalSell', label: 'Total Sell' },
							{
								name: 'status',
								label: 'Status',
							},
							{
								name: 'joinOn',
								label: 'Join On',
								render: (value: string) => (
									<Chip
										label={value}
										sx={{ backgroundColor: 'green.500', color: 'white !important' }}
									/>
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
