import { Box, Button, Menu, MenuItem } from '@mui/material';
import * as styles from './navbar.styles';
import Logo from '@assests/logos.png';
import { Ring, Hameburger } from '@assests/icons';
import avatar from '@assests/Rectangle16.png';
import SearchBar from '@components/searchBar';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'src/features/auth/auth.slice';
import { useState } from 'react';
import { RootState } from 'src/store';

const Navbar = ({
	isSearchBar = true,
	toggleSidebar,
}: {
	isSearchBar?: boolean;
	toggleSidebar?: () => void;
}) => {


	const [anchorEl, setAnchorEl] = useState(null);

	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logout());
	};

	const open = Boolean(anchorEl);

	// menu items
	const menuItems = [
		{ label: JSON.parse(userEmail) || 'user101', action: () => console.log('profile') },
		{ label: 'My Account', action: () => console.log('account') },
		{ label: 'Logout', action: handleLogout },
	];



	return (
		<Box sx={styles.root}>
			<Box
				onClick={toggleSidebar}
				component={Hameburger}
				sx={{ display: { md: 'none' }, cursor: 'pointer' }}
			/>
			<Box
				component='img'
				sx={{
					height: 50,
					display: { xs: 'none', md: 'block' },
				}}
				alt='Logo'
				src={Logo}
			/>
			{isSearchBar && <SearchBar placeholderText='Search...' />}
			<Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
				<Ring />
				<Box>
					<Box
						component='img'
						sx={{
							height: 25,
						}}

						alt='avatar'
						src={avatar}
						onClick={handleClick}

					/>
					{/* Menu items with logout */}
					{anchorEl && <Menu
						id='custom-menu'
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							'aria-labelledby': 'custom-menu-button',
						}}
					>
						{menuItems.map((menuItem, index) => (
							<MenuItem key={index} onClick={menuItem.action}>
								{menuItem.label}
							</MenuItem>
						))}
					</Menu>}
				</Box>
				{/* <Button onClick={handleLogout} variant='outlined' sx={{ color: 'blue.300', cursor: 'pointer', height: '30px' }}>
					Log Out
				</Button> */}
			</Box>
		</Box>
	);
};

export default Navbar;
