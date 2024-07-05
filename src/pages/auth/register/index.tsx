import { AuthContainer, FormikTextField, FormWrapper } from '@components';
import { Typography, Box, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useSign from './register.hook';
import Checkbox from '@mui/material/Checkbox';
import * as types from './register.types';
import * as styles from './register.styles';

const Register: types.ComponentT = () => {
	const { formik } = useSign();
	return (
		<AuthContainer>
			<Box sx={styles.root}>
				<FormWrapper onSubmit={formik.handleSubmit} sx={{ gap: 5 }}>
					<Typography variant='body2' color='gray.200'>
						Join us to enjoy a personalized shopping experience, faster checkouts, order tracking,
						and exclusive offers.
					</Typography>
					<Box width='100%'>
						<Stack sx={{ width: '100%', gap: '14px' }}>
							<FormikTextField name='username' label='Username' {...formik} />
							<FormikTextField name='first_name' label='First Name' {...formik} />
							<FormikTextField name='last_name' label='Last Name' {...formik} />
							<FormikTextField name='email' type='text' label='Email' {...formik} />
							<FormikTextField name='password' type='password' label='Password' {...formik} />
						</Stack>
						<Stack
							sx={{
								alignItems: 'center',
								flexDirection: 'row',
								width: '100%',
							}}
						>
							<Checkbox size='small' />
							<Typography variant='caption' color='initial'>
								I Accept Terms & Coditions
							</Typography>
						</Stack>
					</Box>
					<LoadingButton
						loading={formik.isSubmitting}
						variant='contained'
						color='secondary'
						fullWidth
						type='submit'
					>
						SIGN UP
					</LoadingButton>
				</FormWrapper>
			</Box>
		</AuthContainer>
	);
};
export default Register;
