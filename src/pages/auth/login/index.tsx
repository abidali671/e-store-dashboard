import { Typography, Box, Stack, FormHelperText } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { AuthContainer, FormikTextField, FormWrapper } from '@components';
import { Link } from 'react-router-dom';
import pathnames from '../../../types/pathnames';
import useLogin from './login.hook';
import * as types from './login.types';
import * as styles from './login.styles';

const Login: types.ComponentT = () => {
	const { formik } = useLogin();

	return (
		<AuthContainer>
			<Box sx={styles.root}>
				<FormWrapper onSubmit={formik.handleSubmit} sx={{ gap: 8 }}>
					<Typography variant='h4' fontWeight={600}>
						Sign in
					</Typography>
					<Box width='100%'>
						<Stack sx={{ width: '100%', gap: '16px' }}>
							<FormikTextField name='username' label='username' {...formik} />
							<FormikTextField name='password' type='password' label='Password' {...formik} />

							<Typography variant='body1' sx={{ color: '#9F9B9B', textAlign: 'left' }}>
								<Link to='/forget-password' style={{ textDecoration: 'none' }}>
									Forget Password
								</Link>
							</Typography>
						</Stack>
						{formik.errors['non_field_error'] && (
							<FormHelperText sx={{ color: '#9F9B9B', textAlign: 'left' }}>
								{formik.errors['non_field_error']}
							</FormHelperText>
						)}
					</Box>
					<Stack gap='16px' width='100%'>
						<LoadingButton
							loading={formik.isSubmitting}
							variant='contained'
							color='secondary'
							fullWidth
							type='submit'
						>
							LOGIN
						</LoadingButton>
						<Typography variant='caption'>
							Dont have an account? <Link to={pathnames.REGISTER}> Register</Link>
						</Typography>
					</Stack>
				</FormWrapper>
			</Box>
		</AuthContainer>
	);
};
export default Login;
