import { Typography, Box, Stack, FormHelperText } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { AuthContainer, FormikTextField, FormWrapper } from '@components';
import { Link, useLocation } from 'react-router-dom';
import { pathnames } from '@types';
import useLogin from './login.hook';
import * as types from './login.types';
import * as styles from './login.styles';

const Login: types.ComponentT = () => {
	const { formik } = useLogin();

	return (
		<AuthContainer>
			<Box sx={styles.root}>
				<Box component='form' onSubmit={formik.handleSubmit}>
					<FormWrapper>
						<Typography variant='h3'>Sign in</Typography>
						<Stack sx={{ width: '100%', gap: '10px' }}>
							<FormikTextField name='username' label='username' {...formik} />
							<FormikTextField name='password' type='password' label='Password' {...formik} />
							<Typography variant='caption' sx={{ color: '#9F9B9B', textAlign: 'left' }}>
								Forget Password
							</Typography>
						</Stack>
						{formik.errors['non_field_error'] && (
							<FormHelperText sx={{ color: '#9F9B9B', textAlign: 'left' }}>
								{formik.errors['non_field_error']}
							</FormHelperText>
						)}
						<LoadingButton
							loading={formik.isSubmitting}
							variant='contained'
							sx={styles.button}
							type='submit'
						>
							LOGIN
						</LoadingButton>

						<Typography variant='caption'>
							Dont have an account? <Link to={pathnames.REGISTER}> Register</Link>
						</Typography>
					</FormWrapper>
				</Box>
			</Box>
		</AuthContainer>
	);
};
export default Login;
