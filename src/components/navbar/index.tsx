import Logo from '@assests/logos.png';
import avatar from '@assests/Rectangle16.png';
import SearchBar from '@components/searchBar';
import { Box } from '@mui/material';
import { ComponentT } from './navbar.types';
import { Ring, Hameburger } from '@assests/icons';
import * as types from '@components/container/container.types';
import * as styles from './navbar.styles';
import { useLocation } from 'react-router-dom';
import { pathnames } from '@types';

const Navbar: ComponentT = ({ isSearchBar = true, toggleSidebar }) => {
	const location = useLocation();
	const isPath = location.pathname == pathnames.LOGIN || location.pathname == pathnames.REGISTER ? true : false
	return (
		<Box sx={styles.root}>
			{isPath ? '' : <Box
				onClick={() => toggleSidebar(types.TogglerType.MOBILE)}
				component={Hameburger}
				sx={{ display: { md: 'none' }, cursor: 'pointer' }}
			/>}
			<Box
				component='img'
				sx={{
					height: 50,
					display: { xs: isPath ? 'block' : 'none', md: 'block' },
				}}
				alt='Logo'
				src={Logo}
			/>
			{isSearchBar && <SearchBar placeholderText='Search...' />}
			{isPath ? '' : <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
				<Ring />
				<Box
					component='img'
					sx={{
						height: 25,
					}}
					alt='avatar'
					src={avatar}
				/>
			</Box>}
		</Box>
	);
};

export default Navbar;
