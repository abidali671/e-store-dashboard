import { Box, Grid } from '@mui/material';
import { Navbar } from '@components';
import * as types from './auth_container.types';
import * as styles from './auth_container.styles';

import SignInImg from '@assests/account.png';

const AuthContainer: types.ComponentT = ({ children }: types.PropsT) => {
	return (
		<Box sx={styles.root}>
			<Navbar />
			<Grid container columns={12}>
				<Grid item xs={6}>
					<Box component='img' src={SignInImg} sx={styles.coverImg} />
				</Grid>
				<Grid item xs={12} sm={12} md={6} flexGrow={1}>
					{children}
				</Grid>
			</Grid>
		</Box>
	);
};

export default AuthContainer;
