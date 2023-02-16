import { Box, CardMedia, Grid } from '@mui/material';
import { Navbar } from '@components';
import * as types from './auth_container.types';
import * as styles from './auth_container.styles';

import Rectangle from '@assests/Rectangle2.png';

const AuthContainer: types.ComponentT = ({ children }: types.PropsT) => {
	return (
		<Box sx={styles.root}>
			<Navbar />
			<Grid  alignItems='center'  container columns={12}>
				<Grid  item xs={6} md={6}>
					<Box component='img' src={Rectangle} sx={styles.coverImg} />
				</Grid>
				<Grid my={2}  item xs={12} sm={12} md={6} >
					{children}
				</Grid>
			</Grid>
		</Box>
	);
};

export default AuthContainer;
