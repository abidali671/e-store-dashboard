import React from 'react';
import { Chip, Stack, Box, Typography, IconButton } from '@mui/material';
import { Phone, Message } from '@assests/icons';
import { Table } from '@components/index';
import { VendorData } from './vendor';

import * as styles from './boxLayout.styles';

export const VendorGrid = () => {
	return (
		<Box sx={styles.GridLayout}>
			{VendorData.map(({ name, email, totalSell: sells, product, profile }, index) => (
				<Box key={index} sx={styles.card}>
					<Box component='img' sx={styles.cardImg} src={profile} />
					<Box sx={{ textAlign: 'center' }}>
						<Typography variant='h6' fontWeight={600} my={1}>
							{name}
						</Typography>
						<Stack direction='row' alignItems='center' justifyContent='center' gap={1}>
							<Phone />
							<Typography variant='h6' fontSize={14} fontWeight={300} color='#9F9B9B'>
								{email}
							</Typography>
						</Stack>

						<Stack direction='row' alignItems='center' gap={1} my={1} justifyContent='center'>
							<Message />
							<Typography variant='h6' fontSize={14} fontWeight={300} color='#9F9B9B'>
								{email}
							</Typography>
						</Stack>
					</Box>
					<Stack justifyContent='center' flexWrap='wrap' gap={1} flexDirection='row'>
						<Stack flexDirection='column'>
							<Chip label='Items' />
							<Typography variant='caption' color='initial'>
								{product}
							</Typography>
						</Stack>
						<Stack flexDirection='column'>
							<Chip label='Sells' />
							<Typography variant='caption' color='initial'>
								{sells}
							</Typography>
						</Stack>
						<Stack flexDirection='column'>
							<Chip label='Payout' />
							<Typography variant='caption' color='initial'>
								{sells}
							</Typography>
						</Stack>
					</Stack>
				</Box>
			))}
			{/* <Pagination /> */}
		</Box>
	);
};
export const VendorTable = () => {
	return (
		<Table
			columns={[
				{
					name: 'profile',
					label: 'Profile',
					render: (val: string) => (
						<Box
							component='img'
							sx={{
								height: '50px',
								width: '50px',
								objectFit: 'cover',
								borderRadius: '50%',
								objectPosition: 'center',
							}}
							src={val}
							alt=''
							height='100'
							width='100'
						/>
					),
				},
				{ name: 'name', label: 'Name' },
				{ name: 'email', label: 'Email' },
				{ name: 'product', label: 'Product' },
				{ name: 'totalSell', label: 'Total Sell' },
				{
					name: 'status',
					label: 'Status',
				},
				{
					name: 'joinOn',
					label: 'Join on',
				},
				{
					name: 'action',
					label: 'Action',
					render: (Icon: React.FC<React.SVGProps<SVGSVGElement>>) => (
						<IconButton>
							<Icon style={{ height: '20px', width: '20px' }} />
						</IconButton>
					),
				},
			]}
			data={VendorData}
		/>
	);
};
