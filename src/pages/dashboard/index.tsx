import React from 'react';
import { Card, Container, DonutChart, AreaChart, BarChart, DenseTable } from '@components';
import { Box, Grid, Typography } from '@mui/material';
import { CURRENT_USERS, ORDERS_OVERVIEW, SALES_REPORT } from 'src/data/dashboard';
import { ViewDetails, ViewDetailsT } from '../../data/app.data';
import { productsRow } from '@components/box/box.data';
import * as styles from './dashboard.styles';
import _map from 'lodash/map';

const Dashboard: React.FC = () => {
	return (
		<Container sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
			<Grid container spacing={4} columns={{ xs: 6, sm: 6, md: 12 }}>
				{_map(ViewDetails, (item: ViewDetailsT, index) => (
					<Grid item xs={6} sm={3} md={3} key={index}>
						<DataCard {...item} />
					</Grid>
				))}
			</Grid>
			<Grid container spacing={4} columns={12}>
				<Grid item xs={8}>
					<Card title='Sales Report'>
						<BarChart series={SALES_REPORT} />
					</Card>
				</Grid>
				<Grid item xs={4}>
					<Card title='Orders Overview'>
						<DonutChart series={ORDERS_OVERVIEW} />
					</Card>
				</Grid>
				<Grid item xs={8}>
					<Card title='User Activity'>
						<BarChart series={SALES_REPORT} />
					</Card>
				</Grid>
				<Grid item xs={4}>
					<Card title='Current Users' footer='IN-DETAIL OVERVIEW'>
						<AreaChart series={CURRENT_USERS} />
					</Card>
				</Grid>
				<Grid item xs={6}>
					<Card title='Sold by item' footer='VIEW REPORT'>
						<SoldItemList list={productsRow} />
					</Card>
				</Grid>
				<Grid item xs={6}>
					<Card title='Current Users' footer='IN-DETAIL OVERVIEW'>
						<AreaChart series={CURRENT_USERS} />
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

const SoldItemList: React.FC<{ list: Record<string, string | number>[] }> = ({ list }) => {
	return (
		<Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', px: '16px' }}>
			{_map(list, (item, index) => (
				<React.Fragment key={index}>
					<Typography
						variant='body2'
						sx={{
							color: 'gray.400',
							fontWeight: 600,
							lineHeight: '48px',
							whiteSpace: 'nowrap',
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

export default Dashboard;
