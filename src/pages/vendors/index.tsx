import Container from '@components/container';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Breadcrumbs from './breadcrumbs';
import BoxLayout from './boxLayout';
const Vendors = () => {
	return (
		<Container>
			<Box m={3}>
				<Typography variant='h6' fontWeight='bold' gutterBottom>
					Vendors
				</Typography>
				<Breadcrumbs />
				<BoxLayout />
			</Box>
			
		</Container>
	);
};

export default Vendors;
