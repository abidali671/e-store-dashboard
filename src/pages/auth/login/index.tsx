import { Link, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import { AuthContainer, FormikTextField, FormWrapper } from '../../../components';
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
						<FormikTextField name='email' label='Email' {...formik} />
						<FormikTextField name='password' type='password' label='Password' {...formik} />
						<Typography variant='caption'>Forget Password</Typography>
						<LoadingButton variant='contained' type='submit'>
							LOGIN
						</LoadingButton>
						<Typography variant='caption'>
							Dont have an account? <Link href='#'> Register</Link>
						</Typography>
					</FormWrapper>
				</Box>
			</Box>
		</AuthContainer>
	);
};
export default Login;
