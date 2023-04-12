import { Box } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import * as styles from './navbar.styles';
import useContainer from '../container/container.hook';
import Logo from '@assests/logos.png';
import { Search, Ring, Hameburger } from '@assests/icons';
import avatar from '@assests/Rectangle16.png';
import SearchBar from '@components/searchBar';

const Navbar = ({
	isSearchBar = true,
	toggleSidebar,
}: {
	isSearchBar?: boolean;
	toggleSidebar?: () => void;
}) => {
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
			{isSearchBar && (
				<SearchBar placeholderText='Search...' />
			)}
			<Box>
				<Ring />
				<Box
					component='img'
					sx={{
						height: 25,
						paddingLeft: '10px',
					}}
					alt='avatar'
					src={avatar}
				/>
			</Box>
		</Box>
	);
};

export default Navbar;
