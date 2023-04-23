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
				<Box component='form' onSubmit={formik.handleSubmit}>
					<FormWrapper>
						<Typography variant='h3'>Sign Up</Typography>
						<Stack
							sx={{ width: '100%', gap: '10px', }}>
							<FormikTextField name='username' label='Username' {...formik} />
							<FormikTextField name='first_name' label='First Name' {...formik} />
							<FormikTextField name='last_name' label='Last Name' {...formik} />
							<FormikTextField name='email' type='text' label='Email' {...formik} />
							<FormikTextField name='password' type='password' label='Password' {...formik} />
						</Stack>

						<Typography variant='caption' sx={{ display: 'flex', alignItems: 'center' }}>
							<Checkbox defaultChecked size='small' /> I Accept Terms & Coditions
						</Typography>

						<LoadingButton
							loading={formik.isSubmitting}
							variant='contained'
							sx={styles.button}
							type='submit'
						>
							SIGN UP
						</LoadingButton>
					</FormWrapper>
				</Box>
			</Box>
		</AuthContainer>
	);
};
export default Register;
