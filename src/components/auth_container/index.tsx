import { Box } from '@mui/material';
import { Navbar } from '@components';
import * as types from './auth_container.types';
import * as styles from './auth_container.styles';

import Rectangle from '@assests/Rectangle5.png';

const AuthContainer: types.ComponentT = ({ children }: types.PropsT) => {
	return (
		<Box sx={styles.root}>
			<Navbar isSearchBar={false} isNav={false} />
			<Box sx={styles.contentWrapper}>
				<Box sx={styles.imgWrapper}>
					<Box component='img' src={Rectangle} sx={styles.coverImg} />
				</Box>
				<Box>{children}</Box>
			</Box>
		</Box>
	);
};

export default AuthContainer;
