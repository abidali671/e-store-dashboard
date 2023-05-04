import { Typography, Box, Stack, FormHelperText, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { AuthContainer, FormWrapper } from '@components';
import * as styles from './reset.styles';

const ResetPassword = () => {
	return (
		<AuthContainer>
			<Box sx={styles.root}>
				<FormWrapper
					onSubmit={(e) => {
						console.log(e);
					}}
					sx={{ gap: 8 }}
				>
					<Stack sx={{ width: '100%', gap: 2 }}>
						<Typography variant='body1' fontSize={32} fontWeight={600} color='gray.500'>
							Reset Password
						</Typography>
						<Typography variant='body1' color='gray.300'>
							Enter your new password
						</Typography>
						<TextField name='newPassword' type='password' label='New Password' />
						<TextField name='confirmPassword' type='password' label='Confirm Password' />
					</Stack>
					<LoadingButton variant='contained' color='secondary' fullWidth type='submit'>
						Submit
					</LoadingButton>
				</FormWrapper>
			</Box>
		</AuthContainer>
	);
};

export default ResetPassword;
