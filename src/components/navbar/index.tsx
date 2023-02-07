import { Box, Typography } from '@mui/material';
import * as styles from './navbar.styles';
import * as types from './navbar.types';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';

import Logo from './../../assests/logos.png';
import SearchIcon from './../../assests/searchnormal.png';
import NotificationIcon from './../../assests/notification.png';
import avatar from './../../assests/Rectangle16.png';

const Navbar = () => {
	return (
		<Box sx={styles.root}>
			<Box
				component='img'
				sx={{
					height: 50,
				}}
				alt='Logo'
				src={Logo}
			/>
			<Box sx={{width:'50%'}}>
				<OutlinedInput
				sx={{
					borderRadius:'50px',
					height:45,
					
					
				}}
				fullWidth
					id='outlined-adornment-weight'
					startAdornment={
						<InputAdornment position='end'>
							<IconButton aria-label='toggle password visibility'>
								<Box
									component='img'
									sx={{
										height: 15,
										
									}}
									src={SearchIcon}
								/>
							</IconButton>
						</InputAdornment>
					}
					aria-describedby='outlined-weight-helper-text'
					inputProps={{
						'aria-label': 'weight',
					}}
				/>
			</Box>
			<Box >
			<Box
				component='img'
				sx={{
					height: 25,
					px:'10px'
				}}
				alt='NotificationIcon'
				src={NotificationIcon}
			/>
			<Box
				component='img'
				sx={{
					height: 25,
				}}
				alt='avatar'
				src={avatar}
			/>
			</Box>
		</Box>
	);
};

export default Navbar;
