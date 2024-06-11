import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Divider, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { SideItemT, sideListItems } from '../../data/app.data';
import arrowleft2 from '@assests/arrowleft2.png';
import * as styles from './sidebar.styles';
import * as types from '@components/container/container.types';

const Sidebar = ({
	toggleSidebar,
	isCollapsed,
}: {
	toggleSidebar: (type: types.TogglerType) => void;
	isCollapsed: { mobile: boolean; desktop: boolean };
}) => {
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
					width: { md: 'auto', xs: '80%' },
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
									}}
									disablePadding
								>
									<Box sx={location.pathname === item.path ? styles.select : null} />

									<ListItemButton sx={{ height: '54px' }}>
										{item?.icon && (
											<item.icon
												style={{
													minHeight: 24,
													minWidth: 24,
													color: location.pathname === item.path ? '#86AAF1' : '#9F9B9B',
												}}
											/>
										)}
										<ListItemText
											sx={{
												whiteSpace: 'nowrap',
												fontWeight: 'lighter',
												color: location.pathname === item.path ? '#86AAF1' : '#9F9B9B',
												display: { md: isCollapsed.desktop ? 'none' : 'flex', xs: 'flex' },
												paddingLeft: '8px',
											}}
										>
											{item.label}
										</ListItemText>
									</ListItemButton>
								</ListItem>
							)}
						</React.Fragment>
					))}
				</Box>
				<Box
					onClick={() => toggleSidebar(types.TogglerType.DESKTOP)}
					sx={isCollapsed.desktop ? styles.collapseBtn : styles.collapsedBtn}
				>
					<Box
						component='img'
						src={arrowleft2}
						sx={{
							transition: '0.3s',
							rotate: isCollapsed.desktop ? '180deg' : '360deg',
							filter: 'invert(100%)',
						}}
					/>
				</Box>
			</Box>
			{!isCollapsed.mobile && (
				<Box
					onClick={() => toggleSidebar(types.TogglerType.MOBILE)}
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
