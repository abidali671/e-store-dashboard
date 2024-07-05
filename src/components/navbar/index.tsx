import Logo from '@assests/logo.png';
import SearchBar from '@components/searchBar';
import { Box } from '@mui/material';
import { ComponentT } from './navbar.types';
import { Ring, Hameburger } from '@assests/icons';
import * as types from '@components/container/container.types';
import * as styles from './navbar.styles';
import { ProfileDropdown } from '..';

const Navbar: ComponentT = ({ isSearchBar = true, toggleSidebar, isNav }) => {
	const menuItems = [
		{ label: 'Profile', route: '/profile' },
		{ label: 'My account', route: '/account' },
		{ label: 'Logout' },
	];

	return (
		<Box sx={styles.root}>
			{isNav ? (
				<Box
					onClick={() => toggleSidebar(types.TogglerType.MOBILE)}
					component={Hameburger}
					sx={{ display: { md: 'none' }, cursor: 'pointer' }}
				/>
			) : (
				''
			)}
			<Box
				component='img'
				sx={{
					height: 50,
					display: { xs: isNav ? 'none' : 'block', md: 'block' },
				}}
				alt='Logo'
				src={Logo}
			/>
			{isSearchBar && <SearchBar placeholderText='Search...' />}
			{isNav ? (
				<Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
					<Ring />
					<ProfileDropdown items={menuItems} />
				</Box>
			) : (
				''
			)}
		</Box>
	);
};

export default Navbar;
