import React from 'react';
import { Box, Grid } from '@mui/material';
import { Navbar } from '../../components';
import * as types from './auth_container.types';
import * as styles from '../../pages/auth/login/sign_in.styles';

import SignInImg from '../../assests/account.png';
const AuthContainer: types.ComponentT = ({ children }: types.PropsT) => {
	return (
		<Box>
			<Navbar />
			<Box sx={{ flexGrow: 1,justifyContent:'center',alignItem:'center'}}>
				{/* grid layout */}
				<Grid container columns={12}>
					<Grid item lg={6} md={6} xs={6}>
						{/* side Image */}
						<Box component='img' src={SignInImg} sx={styles.image} />
					</Grid>
					<Grid item lg={6} md={6} sm={12} flexGrow={1}>
						{/* Sign in */}
					{children}	
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default AuthContainer;
