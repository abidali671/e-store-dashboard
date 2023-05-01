import { AuthContainer, FormikTextField, FormWrapper } from '@components';
import { Typography, Box, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useSign from './register.hook';
import Checkbox from '@mui/material/Checkbox';
import * as types from './register.types';
import * as styles from './register.styles';

const Register: types.ComponentT = () => {
	const { formik } = useSign();

	return (
		<AuthContainer>
			<Box sx={styles.root}>
				<FormWrapper onSubmit={formik.handleSubmit} sx={{ gap: 8 }}>
					<Typography variant='h4' fontWeight={600}>
						Sign Up
					</Typography>
					<Box width='100%'>
						<Stack sx={{ width: '100%', gap: '16px' }}>
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
							<Checkbox defaultChecked size='small' />
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
