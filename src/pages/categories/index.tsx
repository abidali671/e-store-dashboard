import { Card, Container, Table, Breadcrumbs } from '@components';

import {
	Typography,
	Grid,
	Box,
	OutlinedInput,
	FormControl,
	TextField,
	Chip,
	Button,
	Tooltip,
} from '@mui/material';
import { mainForm } from './category.styles';
import { categoryData } from 'src/data/category';

const Categories = () => {
	return (
		<Container sx={{ display: 'flex', flexDirection: 'column' }}>
			<Typography variant='h5' fontWeight='bold'>
				Category
			</Typography>
			<Breadcrumbs />

			<Grid container columns={12} spacing={4}>
				<Grid item xs={12} md={4}>
					<Card title='Add New Category'>
						<Box sx={mainForm} component='form'>
							<FormControl>
								<Typography fontWeight='bold' variant='body1'>
									Name
								</Typography>

								<TextField name='name' placeholder='Please enter your name' />
							</FormControl>
							<FormControl>
								<Typography fontWeight='bold' variant='body1'>
									Slug
								</Typography>
								<TextField name='slug' placeholder='Please enter your slug' />
							</FormControl>
							<FormControl>
								<Typography variant='body1' fontWeight='bold'>
									Description
								</Typography>

								<TextField
									sx={{ '.MuiOutlinedInput-root': { height: 'auto' } }}
									multiline
									rows={5}
								/>
							</FormControl>
							<FormControl>
								<Box>
									<Typography fontWeight='bold' variant='body1'>
										Product Tags
									</Typography>
									<Typography variant='caption' color='initial'>
										(type & make a comma to seprate tags)
									</Typography>
								</Box>

								<TextField />
								<Button
									variant='contained'
									sx={{
										backgroundColor: 'blue.500',
										color: 'white',

										width: '120px',
										marginTop: '14px',
									}}
								>
									Submit
								</Button>
							</FormControl>
						</Box>
					</Card>
				</Grid>
				<Grid item xs={12} md={8}>
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
