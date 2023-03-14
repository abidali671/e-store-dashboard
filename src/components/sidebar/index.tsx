import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Divider, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { SideItemT, sideListItems } from '../../data/app.data';
import arrowleft2 from '@assests/arrowleft2.png';
import * as styles from './sidebar.styles';

const Sidebar = ({
	toggleSidebar,
	isCollapsed,
}: {
	toggleSidebar: () => void;
	isCollapsed: boolean;
}) => {
	const navigate = useNavigate();
	const location = useLocation();

	const handleChangePage = (path: string) => {
		navigate(path);
	};

	return (
		<Box
			sx={{
				flex: 1,
				overflowY: 'hidden',
				position: { md: 'initial', xs: 'fixed' },
				top: 0,
				left: 0,
				width: { md: 'auto', xs: '75%' },
				backgroundColor: 'green ',
				zIndex: 999,
			}}
		>
			<Box sx={styles.sideListWrapper}>
				{sideListItems.map((item: SideItemT, index: number) => {
					return (
						<React.Fragment key={index}>
							{item?.divider ? (
								<Divider />
							) : (
								<ListItem onClick={() => item?.path && handleChangePage(item.path)} disablePadding>
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
													display: { md: 'flex', xs: 'none' },
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
					);
				})}
			</Box>
			<Box onClick={toggleSidebar} sx={isCollapsed ? styles.collapseBtn : styles.collapsedBtn}>
				<Box
					component='img'
					src={arrowleft2}
					sx={{
						transition: '0.3s',
						rotate: isCollapsed ? '180deg' : '360deg',
					}}
				/>
			</Box>
		</Box>
	);
};

export default Sidebar;
