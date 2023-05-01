import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Divider, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { SideItemT, sideListItems } from '../../data/app.data';
import arrowleft2 from '@assests/arrowleft2.png';
import * as styles from './sidebar.styles';
import { useDispatch } from 'src/hooks';
import { logout } from 'src/features/auth/auth.slice';

const Sidebar = ({
	toggleSidebar,
	isCollapsed,
}: {
	toggleSidebar: (type: 'desktop' | 'mobile') => void;
	isCollapsed: { mobile: boolean; desktop: boolean };
}) => {
	const dispatch = useDispatch();

	const navigate = useNavigate();
	const location = useLocation();

	const handleChangePage = (path: string) => {
		navigate(path);
	};

	return (
		<React.Fragment>
			<Box
				sx={{
					flex: 1,
					overflowY: 'hidden',
					position: { md: 'initial', xs: 'fixed' },
					top: 0,
					left: { md: !isCollapsed.desktop ? 0 : '-100%', xs: !isCollapsed.mobile ? 0 : '-100%' },
					opacity: { md: !isCollapsed.desktop ? 1 : 0, xs: !isCollapsed.mobile ? 1 : 0 },
					width: { md: 'auto', xs: '75%' },
					height: '100%',
					backgroundColor: '#FFF',
					zIndex: 999,
					transition: '0.5s',
				}}
			>
				<Box sx={styles.sideListWrapper}>
					{sideListItems.map((item: SideItemT, index: number) => (
						<React.Fragment key={index}>
							{item?.divider ? (
								<Divider />
							) : (
								<ListItem
									onClick={() => {
										item?.path && handleChangePage(item.path);
										item.label === 'LOG OUT' ? dispatch(logout()) : null;
									}}
									disablePadding
								>
									<Box sx={location.pathname === item.path ? styles.select : null} />

									<ListItemButton sx={{ height: '54px' }}>
										{item?.icon && (
											<item.icon
												style={{ color: location.pathname === item.path ? '#86AAF1' : '#9F9B9B' }}
											/>
										)}
										{!isCollapsed && (
											<ListItemText
												sx={{
													fontWeight: 'lighter',
													color: location.pathname === item.path ? '#86AAF1' : '#9F9B9B',
													display: 'flex',
													paddingLeft: '8px',
												}}
											>
												{item.label}
											</ListItemText>
										)}
									</ListItemButton>
								</ListItem>
							)}
						</React.Fragment>
					))}
				</Box>
				<Box
					onClick={() => toggleSidebar('desktop')}
					sx={isCollapsed.desktop ? styles.collapseBtn : styles.collapsedBtn}
				>
					<Box
						component='img'
						src={arrowleft2}
						sx={{
							transition: '0.3s',
							rotate: isCollapsed.desktop ? '180deg' : '360deg',
						}}
					/>
				</Box>
			</Box>
			{!isCollapsed.mobile && (
				<Box
					onClick={() => toggleSidebar('desktop')}
					sx={{
						display: { md: 'none', xs: 'block' },
						width: '100%',
						height: '100%',
						background: '#000',
						opacity: 0.5,
						position: 'fixed',
						top: 0,
						left: 0,
						zIndex: 998,
					}}
				/>
			)}
		</React.Fragment>
	);
};

export default Sidebar;
