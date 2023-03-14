import React from 'react';
import { Card, Container, MyChartComponent, AreaChart, ColumnChart } from '@components';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Boxes, ViewDetails, ViewDetailsT, boxValue } from '../../data/app.data';
import Typography from '@mui/material/Typography';
import { DenseTable, RowTable } from '../../components';
import Box1 from '@components/box/Box1';
import * as styles from './dashboard.styles';
import _map from 'lodash/map';
const Dashboard: React.FC = () => {
	return (
		<Container>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 6, sm: 6, md: 12 }}>
					{_map(ViewDetails, (item: ViewDetailsT, index) => (
						<Grid item xs={6} sm={3} md={3} key={index}>
							<Box sx={styles.itemCard}>
								<Box>
									<Typography variant='h5' sx={styles.cardTitle}>
										{item.title}
									</Typography>
									<Typography variant='caption'>{item.info}</Typography>
								</Box>

								{item?.icon && <item.icon />}
							</Box>
						</Grid>
					))}

					{/* <Box1 /> */}
					{/* <DenseTable />
					<RowTable /> */}
				</Grid>
			</Box>
			<Grid container pt={2} spacing={{ xs: 2, md: 2 }} columns={{ xs: 6, sm: 6, md: 12 }}>
				{_map(boxValue, (item: Boxes, ind: number) => (
					<Grid item xs={6} sm={6} md={item.md} key={ind}>
						<Card title={item.title} footer={item.bottom}>
							{item.md == 8 && (
								<ColumnChart
									userData={[
										{
											name: 'Net Profit',
											data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
										},
										{
											name: 'Revenue',
											data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
										},
										{
											name: 'Free Cash Flow',
											data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
										},
									]}
								/>
							)}
							{item.md == 4 && item.typeChart && (
								<MyChartComponent userData={item?.data.map((v) => v)} />
							)}
							{item.md == 4 && !item.typeChart && <AreaChart userData={item?.data.map((v) => v)} />}
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Dashboard;
