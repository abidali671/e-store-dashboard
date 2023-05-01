import { Typography, Box, FormHelperText, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { AuthContainer, FormWrapper, FormikTextField } from '@components';
import { useNavigate } from 'react-router-dom';
import * as styles from './forget.styles';
import useSign from '../register/register.hook';
import { Stack } from '@mui/system';
import React from 'react';

const ForgetPassword = () => {
	const navigate = useNavigate();
	const { formik } = useSign();

	const forgetPassword = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setTimeout(() => {
			navigate('/reset-password');
		}, 2000);
		console.log(e, '==forget');
	};
	return (
		<AuthContainer>
			<Box sx={styles.root}>
				<FormWrapper onSubmit={forgetPassword} sx={{ gap: 8 }}>
					<Stack sx={{ width: '100%', gap: 2 }}>
						<Typography variant='h4' fontWeight={600} color='gray.500'>
							Forget Password
						</Typography>
						<Typography variant='body1' color='gray.300'>
							Enter your email and we’ll send you a link to reset your password
						</Typography>
						<FormikTextField name='forgetPassword' label='Forget Password' {...formik} />
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
