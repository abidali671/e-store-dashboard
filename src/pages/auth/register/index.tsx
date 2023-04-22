import { AuthContainer, FormikTextField, FormWrapper } from '@components';
import { Typography, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useSign from './register.hook';
import Checkbox from '@mui/material/Checkbox';

import * as types from './register.types';
import * as styles from './register.styles';

const Register: types.ComponentT = () => {
	const { formik } = useSign();

	const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

	return (
		<AuthContainer>
			<Box sx={styles.root}>
				<Box component='form' onSubmit={formik.handleSubmit}>
					<FormWrapper>
						<Typography variant='h3'>Sign Up</Typography>
						<Box
							sx={{
								textAlign: 'left',
								width: { xs: '100%', md: '80%' },
								maxWidth: '100%',
								gap: '10px',
								'&>*': { margin: '5px 0' },
							}}
						>
							<Typography
								variant='caption'
								sx={{ color: '#9F9B9B', fontSize: { xs: '10px', md: '14px' } }}
							>
								User Name
							</Typography>

							<FormikTextField name='username' label='username' {...formik} />

							<Typography
								variant='caption'
								sx={{ color: '#9F9B9B', fontSize: { xs: '10px', md: '14px' } }}
							>
								First Name
							</Typography>

							<FormikTextField name='firstName' label='firstname' {...formik} />

							<Typography
								variant='caption'
								sx={{ color: '#9F9B9B', fontSize: { xs: '10px', md: '14px' } }}
							>
								Last Name
							</Typography>

							<FormikTextField name='lastName' label='lastname' {...formik} />

							<Typography
								variant='caption'
								sx={{ textAlign: 'left', fontSize: { xs: '10px', md: '14px' }, color: '#9F9B9B' }}
							>
								Email or Number
							</Typography>

							<FormikTextField name='email' type='text' label='email' {...formik} />

							<Typography
								variant='caption'
								sx={{ textAlign: 'left', fontSize: { xs: '10px', md: '14px' }, color: '#9F9B9B' }}
							>
								Password
							</Typography>

							<FormikTextField name='password' type='password' label='password' {...formik} />
						</Box>

						<Typography variant='caption' sx={{ display: 'flex', alignItems: 'center' }}>
							<Checkbox {...label} defaultChecked size='small' /> I Accept Terms & Coditions
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
