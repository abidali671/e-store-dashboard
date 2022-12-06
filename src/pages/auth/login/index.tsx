import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import '../../styles.css';
import { AuthContainer } from '../../../components';
import useLogin from './login.hook';
import SignInImg from '../../../assests/Rectangle5.png';
import * as types from './sign_in.types';
import * as styles from '../login/sign_in.styles';
const Login: types.ComponentT =  () => {
	const { formik } = useLogin();
	return (
		<AuthContainer>
			<Box sx={styles.root}>
				<form className='flex-form' onSubmit={formik.handleSubmit}>
					<Typography
						variant='h3'
						sx={{ color: 'black', fontWeight: 'bold' }}
						display='block'
						style={{ textAlign: 'center' }}
					>
						Sign in
					</Typography>
					<br />
					<Typography
						variant='caption'
						sx={{ color: '#9F9B9B', textAlign: 'left' }}
						display='block'
						style={{ textAlign: 'left' }}
						gutterBottom
					>
						Email/Number or Username
					</Typography>
					<TextField
						id='email'
						name='email'
						value={formik.values.email}
						onChange={formik.handleChange}
						error={formik.touched.email && Boolean(formik.errors.email)}
						helperText={formik.touched.email && formik.errors.email}
						className='inputRounded'
						placeholder=''
						variant='outlined'
						size='small'
						sx={styles.textField}
					/>
					<Typography
						variant='caption'
						textAlign='left'
						sx={{ color: '#9F9B9B' }}
						display='block'
						gutterBottom
					>
						Password
					</Typography>
					<TextField
						id='password'
						name='password'
						className='inputRounded'
						placeholder=''
						variant='outlined'
						size='small'
						type='password'
						value={formik.values.password}
						onChange={formik.handleChange}
						sx={styles.textField}
						error={formik.touched.password && Boolean(formik.errors.password)}
						helperText={formik.touched.password && formik.errors.password}
					/>
					<Typography
						variant='caption'
						textAlign='left'
						sx={{ color: '#9F9B9B' }}
						display='block'
						gutterBottom
					>
						Forget Password
					</Typography>
					<Button
						style={{
							borderRadius: 50,
							backgroundColor: 'black',
							width: '60%',
							fontSize: '12px',
							textAlign: 'center',
							padding: '8px',
						}}
						className='form-btn'
						size='medium'
						color='primary'
						variant='contained'
						type='submit'
					>
						LOGIN
					</Button>
					<Typography
						variant='caption'
						textAlign='center'
						sx={{ color: '#9F9B9B',display:'flex',alignItems:'center',justifyContent:'center' }}
						display='block'
						
					>
						Dont have an account?  <p style={{fontWeight:'bolder', paddingLeft:'3px', color:'black'}}> Register</p>
					</Typography>
				</form>
			</Box>
		</AuthContainer>
	);
};
export default Login;
