import { Box, CardMedia, Grid } from '@mui/material';
import { Navbar } from '@components';
import * as types from './auth_container.types';
import * as styles from './auth_container.styles';

import Rectangle from '@assests/Rectangle5.png';

const AuthContainer: types.ComponentT = ({ children }: types.PropsT) => {
	return (
		<Box sx={styles.root}>
			<Navbar isSearchBar={false} />
			<div style={{ width: '100%' }}>
				<Box
					sx={{
						display: 'flex',

						justifyContent: { md: 'space-around', sm: 'center' },
						alignItems: 'center',
					}}
				>
					<Box sx={{ flex: 1, display: { md: 'block', xs: 'none', width: '100%' } }}>
						<Box component='img' src={Rectangle} sx={styles.coverImg} />
					</Box>
					<Box mt={2} sx={{ flex: 1 }}>
						{children}
					</Box>
				</Box>
			</div>
		</Box>
	);
};

export default AuthContainer;
