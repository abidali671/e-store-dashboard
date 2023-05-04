import { Box } from '@mui/material';
import * as styles from './navbar.styles';
import Logo from '@assests/logos.png';
import { Ring, Hameburger } from '@assests/icons';
import avatar from '@assests/Rectangle16.png';
import SearchBar from '@components/searchBar';
import * as types from '@components/container/container.types';

const Navbar = ({
	isSearchBar = true,
	toggleSidebar,
}: {
	isSearchBar?: boolean;
	toggleSidebar?: (type: types.TogglerType) => void;
}) => {
	return (
		<Box sx={styles.root}>
			<Box
				onClick={() => toggleSidebar(types.TogglerType.MOBILE)}
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
