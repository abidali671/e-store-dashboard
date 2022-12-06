import { Box, Typography } from '@mui/material';
import * as styles from './navbar.styles';
import * as types from './navbar.types';

const Navbar: types.ComponentT = () => {
	return (
		<Box sx={styles.root}>
			<Typography variant='h4'>EKKA</Typography>
		</Box>
	);
};

export default Navbar;
