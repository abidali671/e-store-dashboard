import Container from '@components/container';
import { Typography } from '@mui/material';
import Breadcrumbs from './breadcrumbs';
import BoxLayout from './boxLayout';
const Vendors = () => {
	return (
		<Container>
			<Typography variant='h6' fontWeight='bold'>
				Vendors
			</Typography>
			<Breadcrumbs />
			<BoxLayout />
		</Container>
	);
};

export default Vendors;
