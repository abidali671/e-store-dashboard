import { Box } from '@mui/material';
import * as types from './auth_container.types';
import * as styles from './auth_container.styles';

import Logo from '@assets/logo.png';
import Rectangle from '@assets/Rectangle5.png';

const AuthContainer: types.ComponentT = ({ children }: types.PropsT) => {
	return (
		<Box sx={styles.root}>
			<Box sx={styles.contentWrapper}>
				<Box sx={styles.imgWrapper}>
					<Box component='img' src={Rectangle} sx={styles.coverImg} />
				</Box>
				<Box sx={styles.formWrapper}>
					<Box component='img' alt='Logo' src={Logo} />
					<Box>{children}</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default AuthContainer;
