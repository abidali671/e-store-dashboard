import { Typography, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { AuthContainer, FormikTextField, FormWrapper } from '@components';
import { Link } from 'react-router-dom';
import { pathnames } from 'src/types';
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
						<Box sx={{ textAlign: 'left', width: { xs: '100%', md: '80%' } }}>
							<Typography
								variant='caption'
								sx={{ color: '#9F9B9B', fontSize: { xs: '10px', md: '12px' } }}
							>
								Email/Number or Username
							</Typography>

							<FormikTextField name='username' label='username' {...formik} />
							<Typography
								variant='caption'
								sx={{ textAlign: 'left', fontSize: { xs: '10px', md: '12px' }, color: '#9F9B9B' }}
							>
								Password
							</Typography>

							<FormikTextField name='password' type='password' label='Password' {...formik} />
							<Typography variant='caption' sx={{ color: '#9F9B9B' }}>
								Forget Password
							</Typography>
						</Box>
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
