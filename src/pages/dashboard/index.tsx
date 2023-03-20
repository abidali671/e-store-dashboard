import React from 'react';
import {
	Card,
	Container,
	DonutChart,
	AreaChart,
	BarChart,
	DenseTable,
	RowTable,
} from '@components';
import { Box, Grid, Typography } from '@mui/material';
import { CURRENT_USERS, ORDERS_OVERVIEW, SALES_REPORT } from 'src/data/dashboard';
import { ViewDetails, ViewDetailsT } from '../../data/app.data';

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
				<Grid item xs={12}>
					<DenseTable />
				</Grid>
				<Grid item xs={12}>
					<RowTable />
				</Grid>
			</Grid>
		</Container>
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
