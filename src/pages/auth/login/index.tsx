import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../../styles.css';
import { styled } from '@mui/material/styles';
import { AuthContainer } from '../../../components';
import useLogin from './login.hook';
import SignInImg from '../../../assests/Rectangle5.png';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	// padding: theme.spacing(1),
	textAlign: 'left',
	color: theme.palette.text.secondary,
}));

const Login = () => {
	const { formik } = useLogin();
	return (
		<AuthContainer>
			<Box sx={{ flexGrow: 1 }}>
				{/* grid layout */}
				<Grid container columns={12}>
					<Grid item lg={6} sm={6}>
						{/* side Image */}
						<img src={SignInImg} className='signIn-img' />
					</Grid>
					<Grid item lg={6} sm={6} flexGrow={1}>
						{/* Sign in */}
						<div className='main-signIn'>
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
										width: '40%',
										fontSize: '12px',
										textAlign: 'center',
										padding: '10px',
									}}
									className='form-btn'
									size='medium'
									color='primary'
									variant='contained'
									type='submit'
								>
									LOGIN
								</Button>
							</form>
						</div>
					</Grid>
				</Grid>
			</Box>
		</AuthContainer>
	);
};
export default Login;
