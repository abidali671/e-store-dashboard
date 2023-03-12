import React from 'react';
import { Container } from '@components';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ViewDetails, ViewDetailsT } from '../../data/app.data';
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
					<Box1 />
					{/* <DenseTable />
					<RowTable /> */}
				</Grid>
			</Box>
		</Container>
	);
};

export default Dashboard;
