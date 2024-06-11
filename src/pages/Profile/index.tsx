import Breadcrumbs from '@components/breadcrumbs';
import Container from '@components/container';
import { Box, Typography } from '@mui/material';
import * as React from 'react';
import { useSelector } from 'src/hooks';

export default function Profile() {
	const token = useSelector((state) => state.auth);
	const { firstName, lastName, email, username } = token;

	return (
		<Container>
			<Box>
				<Typography variant='h5' fontWeight='bold'>
					Profile
				</Typography>

				<Breadcrumbs />
			</Box>
			<Box>
				<Typography variant='h5' fontWeight='bold'>
					{username}
				</Typography>
				<Typography variant='h5' fontWeight='bold'>
					{firstName} {lastName}
				</Typography>
				<Typography variant='h5' fontWeight='bold'>
					{email}
				</Typography>
			</Box>
		</Container>
	);
}
