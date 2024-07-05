import { Typography, Box, FormHelperText, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { AuthContainer, FormWrapper, FormikTextField } from '@components';
import { useNavigate } from 'react-router-dom';
import * as styles from './forget.styles';
import { Stack } from '@mui/system';
import React from 'react';
import useRegister from '../register/register.hook';

const ForgetPassword = () => {
	const navigate = useNavigate();
	const { formik } = useRegister();

	const forgetPassword = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setTimeout(() => {
			navigate('/reset-password');
		}, 2000);
	};

	return (
		<AuthContainer>
			<Box sx={styles.root}>
				<FormWrapper onSubmit={forgetPassword} sx={{ gap: 5 }}>
					<Stack sx={{ width: '100%', gap: 2 }}>
						<Typography variant='body2' color='gray.200'>
							Enter your email and we’ll send you a link to reset your password
						</Typography>
						<FormikTextField name='forgetPassword' label='Username or Email' {...formik} />
					</Stack>

					<LoadingButton variant='contained' fullWidth color='secondary' type='submit'>
						Submit
					</LoadingButton>
				</FormWrapper>
			</Box>
		</AuthContainer>
	);
};
export default ForgetPassword;
