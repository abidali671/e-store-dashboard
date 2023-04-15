import React from 'react';
import { Card, Container, DonutChart, AreaChart, BarChart, Table } from '@components';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import { CURRENT_USERS, ORDERS_OVERVIEW, SALES_REPORT, tableData } from 'src/data/dashboard';
import { ViewDetails, ViewDetailsT } from '../../data/app.data';
import { productsRow, productDetail } from '@components/box/box.data';
import * as styles from './dashboard.styles';
import _map from 'lodash/map';
import Chip from '@mui/material/Chip';

interface ProductProps {
	name: string;
	quantity: number;
	average: string;
}

const Dashboard: React.FC = () => {
	return (
		<Container sx={styles.Container}>
			<Grid container spacing={4} columns={{ xs: 6, sm: 6, md: 12 }}>
				{_map(ViewDetails, (item: ViewDetailsT, index) => (
					<Grid item xs={6} sm={3} md={3} key={index}>
						<DataCard {...item} />
					</Grid>
				))}
			</Grid>
			<Grid container spacing={4} columns={12} gridAutoRows='1fr'>
				<Grid item xs={12} md={8}>
					<Card title='Sales Report'>
						<BarChart series={SALES_REPORT} />
					</Card>
				</Grid>
				<Grid item xs={12} md={4}>
					<Card title='Orders Overview'>
						<DonutChart series={ORDERS_OVERVIEW} />
					</Card>
				</Grid>
				<Grid item md={8} xs={12}>
					<Card title='User Activity'>
						<BarChart series={SALES_REPORT} />
					</Card>
				</Grid>
				<Grid item md={4} xs={12}>
					<Card title='Current Users' footer='IN-DETAIL OVERVIEW'>
						<AreaChart series={CURRENT_USERS} />
					</Card>
				</Grid>
				<Grid item md={6} xs={12}>
					<Card title='Sold by item' footer='VIEW REPORT'>
						<SoldItemList list={productsRow} />
					</Card>
				</Grid>
				<Grid item md={6} xs={12}>
					<Card title='TOP SALLING PRODUCTS'>
						<SellingProducts productDetail={productDetail} />
					</Card>
				</Grid>

				<Grid item md={12} xs={12}>
					<Table
						columns={[
							{ name: 'product', label: 'Product' },
							{ name: 'units', label: 'Units' },
							{ name: 'orderDate', label: 'Order Date' },
							{ name: 'orderCost', label: 'Order Cost' },
							{
								name: 'status',
								label: 'Status',
								render: (value: string) => (
									<Chip
										label={value}
										color={
											value == 'COMPLETED'
												? 'success'
												: value === 'ON HOLD'
													? 'warning'
													: value == 'CANCELLED'
														? 'error'
														: value === 'IN PROGRESS'
															? 'secondary'
															: 'default'
										}
										sx={{ color: 'white !important' }}
									/>
								),
							},
							{
								name: 'action',
								label: '',
								render: (Icon: React.FC<React.SVGProps<SVGSVGElement>>) => (
									<IconButton>
										<Icon style={{ height: '20px', width: '20px' }} />
									</IconButton>
								),
							},
						]}
						data={tableData}
					/>
				</Grid>
			</Grid>
		</Container>
	);
};

const SoldItemList: React.FC<{
	list: ProductProps[];
}> = ({ list }) => {

	return (
		<Box
			sx={{
				display: 'grid',
				gridTemplateColumns: 'repeat(3, 1fr)',
				// px: '16px',
			}}
		>
			{_map(list, (item, index) => (
				<React.Fragment key={index} >
					<Typography
						variant='body2'
						sx={{
							color: 'gray.400',
							fontWeight: 600,
							lineHeight: '48px',
							whiteSpace: 'nowrap',
							px: '16px'
						}}
					>
						{item.name}
					</Typography>
					<Typography
						variant='body2'
						sx={{
							textAlign: 'center',
							color: 'gray.400',
							fontWeight: 600,
							lineHeight: '48px',
							whiteSpace: 'nowrap',
						}}
					>
						{item.quantity}
					</Typography>

					<Typography
						variant='body2'
						sx={{
							textAlign: 'right',
							color: 'gray.400',
							fontWeight: 600,
							lineHeight: '48px',
							whiteSpace: 'nowrap',
							px: '16px'
						}}
					>
						{item.average}
					</Typography>

					{index < list.length - 1 && (
						<Box
							sx={{
								width: '100%',
								height: '1px',
								backgroundColor: 'gray.100',
								gridColumnStart: 'span 3',
							}}
						/>
					)}
				</React.Fragment>
			))}
		</Box>
	);
};

const DataCard: React.FC<ViewDetailsT> = (props) => {
	return (
		<Box sx={styles.itemCard}>
			<Box>
				<Typography variant='h5' sx={styles.cardTitle}>
					{props.title}
				</Typography>
				<Typography variant='caption'>{props.info}</Typography>
			</Box>
			{props?.icon && <props.icon />}
		</Box>
	);
};

const SellingProducts = ({ productDetail }) => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', mt: 1 }}>
			{productDetail.map((product, ind) => (
				<Box sx={{ display: 'flex', p: 2 }} key={ind}>
					<Box
						component='img'
						src={require(`@assests/${product.img}.png`)}
						sx={{
							width: '96px',
							height: '96px',
							minHeight: '96px',
							minWidth: '96px',
							objectFit: 'contain',
							objectPosition: 'center',
						}}
					/>
					<Box pl={1} width='100%' >
						<Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
							<Typography variant='h6' fontWeight='bold' fontSize={14} color='initial'>
								{product.title}
							</Typography>
							<Typography variant='body1' fontWeight={600} fontSize={12} color='gray.400'>
								{product.sales} Sales
							</Typography>
						</Box>

						<Typography
							variant='subtitle1'
							fontWeight={400}
							sx={{ lineHeight: '15px', pt: 1, fontSize: { md: '14px', xs: '12px' } }}
							color='gray.300'
						>
							{product.desc}
						</Typography>
						<Typography variant='h6' pt={1} fontSize={14} fontWeight={600} color='initial'>
							${product.price}
						</Typography>
					</Box>
				</Box>
			))}
		</Box>
	);
};

export default Dashboard;
