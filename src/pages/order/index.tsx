import React from 'react';
import Container from '@components/container';
import {
	Box,
	Typography,
	Stack,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Table,
} from '@mui/material';
import { Card } from '@components';
import * as styles from './orders.styles';
import { orderDetail } from 'src/data/order.data';

const Order = () => {
	return (
		<Container>
			<Box display='flex' gap={5} flexDirection='column'>
				<Typography variant='h4' fontWeight={600} color='initial'>
					Order Detail
				</Typography>
				<Card
					title={
						<Stack sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							Order Detail <span>Order Id: #1234567</span>
						</Stack>
					}
				>
					<Stack p={5} gap={5}>
						<Stack flexDirection='row' gap={5} flexWrap='wrap'>
							{orderDetail.map((item, ind) => (
								<Box sx={styles.itemCard} key={ind}>
									<Box sx={styles.CardTop}>
										<Typography variant='body1' fontWeight={600} fontSize={20} color='initial'>
											{item.title}
										</Typography>
									</Box>
									<Box sx={{ p: 3 }}>
										<Typography variant='body1' fontSize={18} color='gray.400'>
											{item.detail}
										</Typography>
									</Box>
								</Box>
							))}
						</Stack>
						<Box
							sx={{
								border: '1px solid',
								borderColor: 'gray.50',
								borderRadius: '16px',
								overflow: 'hidden',
							}}
						>
							<Box sx={{ backgroundColor: 'gray.50', width: '100%', textAlign: 'center', p: 1 }}>
								<Typography variant='body1' fontWeight={600} fontSize={20} color='initial'>
									Customer
								</Typography>
							</Box>
							<Table stickyHeader>
								<TableHead>
									<TableRow>
										<TableCell color='initial'>#</TableCell>
										<TableCell color='initial'>IMAGE</TableCell>
										<TableCell color='initial'>PRODUCT</TableCell>
										<TableCell color='initial'>PRICE</TableCell>
										<TableCell color='initial'>QUANTITY</TableCell>
										<TableCell color='initial'>TOTAL</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell color='initial'>1</TableCell>
										<TableCell color='initial'>1</TableCell>
										<TableCell color='initial'>Baby Pink Shoes</TableCell>
										<TableCell color='initial'>15</TableCell>
										<TableCell color='initial'>74$</TableCell>
										<TableCell color='initial'>$1,110.00</TableCell>
									</TableRow>
									<TableRow>
										<TableCell colSpan={4} />
										<TableCell>Taxes</TableCell>
										<TableCell align='right'>N/A</TableCell>
									</TableRow>
									<TableRow>
										<TableCell colSpan={4} />

										<TableCell>Total</TableCell>
										<TableCell align='right'>$4,450.00</TableCell>
									</TableRow>
									<TableRow>
										<TableCell colSpan={4} />

										<TableCell>Payment Status</TableCell>
										<TableCell align='right'>Paid</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</Box>
					</Stack>
				</Card>
			</Box>
		</Container>
	);
};

export default Order;
