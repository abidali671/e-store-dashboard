import React from 'react';
import { Box } from '@mui/material';
import { Navbar } from '../../components';
import * as types from './auth_container.types';

const AuthContainer: types.ComponentT = ({ children }: types.PropsT) => {
	return (
		<Box>
			<Navbar />
			{children}
		</Box>
	);
};

export default AuthContainer;
