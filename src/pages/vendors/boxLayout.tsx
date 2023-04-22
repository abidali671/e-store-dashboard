import React, { useState } from 'react';
import { Chip, Stack, Box, Typography, IconButton } from '@mui/material';
import { Phone, Message, MoreOption } from '@assests/icons';
import { Table } from '@components/index';
import { VendorData } from './vendor';
import * as styles from './boxLayout.styles';
import Pagination from '@components/box/pagination';

export const VendorGrid = () => {
	const [entries, setEntries] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = React.useMemo(() => {
		return Math.ceil(VendorData.length / entries);
	}, [entries]);

	const dataShow = React.useMemo(() => {
		return VendorData.slice((currentPage - 1) * entries, (currentPage - 1) * entries + entries);
	}, [entries, currentPage]);

	const handleEntries = (e: any) => {
		setEntries(+e.target.value);
	};

	return (
		<Box sx={{ border: '1px solid', borderColor: 'gray.100', borderRadius: '20px' }}>
			<Box sx={styles.GridLayout}>
				{dataShow.map(({ name, email, totalSell: sells, product, profile }, index) => (
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
			</Box>
			<Pagination
				page={currentPage}
				onChange={setCurrentPage}
				count={totalPages}
				dataShow={dataShow}
				data={VendorData}
				entries={entries}
				handleEntries={handleEntries}
			/>
		</Box>
	);
};
export const VendorTable: React.FC<{ onSearch: string }> = ({ onSearch }) => {
	const [data, setData] = useState(VendorData);

	React.useEffect(() => {
		const filtered = VendorData.filter((item) =>
			item.name.toLowerCase().includes(onSearch.toLowerCase()),
		);
		setData(filtered);
	}, [onSearch]);

	return (
		<Table
			columns={[
				{
					name: 'profile',
					label: 'Profile',
					render: (val: string) => (
						<Box
							component='img'
							sx={styles.tableRowImg}
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
					render: () => (
						<IconButton>
							<MoreOption style={{ height: '20px', width: '20px' }} />
						</IconButton>
					),
				},
			]}
			data={data}
		/>
	);
};
