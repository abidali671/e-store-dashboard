import { VerifiedIcon } from '@assets/icons';
import Navbar from '@components/navbar';
import { Box, Typography, Button } from '@mui/material';
import React, { Fragment } from 'react';

const Verified: React.FC = () => {
	return (
		<Fragment>
			<Navbar isSearchBar={false} />
			<Box
				component='div'
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					height: '70vh',
					gap: 1,
				}}
			>
				<Typography variant='h6' fontWeight={700} color='initial'>
					VERIFIED SUCCESSFULLY
				</Typography>
				<VerifiedIcon />
				<Button
					variant='contained'
					sx={{
						backgroundColor: 'black',
						'&:hover': {
							color: 'black',
							backgroundColor: 'initial',
						},
					}}
				>
					Ok
				</Button>
			</Box>
		</Fragment>
	);
};

export default Verified;
