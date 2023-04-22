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
	const userEmail = useSelector((state: RootState) => state.auth.email);

	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logout());
	};
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
					/>

				</Box>

			</Box>
		</Box>
	);
};

export default Navbar;
