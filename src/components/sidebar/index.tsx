import React, { useState } from 'react';
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
		<Box sx={styles.sideListWrapper}>
			{sideListItems.map((item: SideItemT, index: number) => (
				<React.Fragment key={index}>
					{item?.divider ? (
						<Divider />
					) : (
						<ListItem
							sx={location.pathname === item.path ? styles.selected : styles.unselect}
							onClick={() => item?.path && handleChangePage(item.path)}
							disablePadding
						>
							<ListItemButton>
								{item?.icon && <item.icon />}
								{!isCollapsed && (
									<ListItemText
										sx={{
											fontWeight: 'lighter',
											color: '#9F9B9B',
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
			))}
			<Box onClick={toggleSidebar} sx={styles.collapseBtn}>
				<Box
					component='img'
					src={arrowleft2}
					sx={{
						rotate: isCollapsed ? '180deg' : '360deg',
					}}
				/>
			</Box>
		</Box>
	);
};

export default Sidebar;
