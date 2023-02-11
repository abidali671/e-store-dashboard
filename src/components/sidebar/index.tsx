import React, { useState } from 'react';
import { Box, SvgIcon, Divider, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { SideItemT, sideListItems } from '../../data/app.data';
import arrowleft2 from '@assests/arrowleft2.png';
import * as styles from './sidebar.styles';
import { Copy } from '@assests/icons';
const Sidebar = ({
	toggleSidebar,
	isCollapsed,
}: {
	toggleSidebar: () => void;
	isCollapsed: boolean;
}) => {
	const [selectedDiv, setSelectedDiv] = useState<number>(1);

	return (
		<Box sx={styles.sideListWrapper}>
			{sideListItems.map((item: SideItemT) => (
				<React.Fragment key={item.id}>
					{item?.divider ? (
						<Divider />
					) : (
						<ListItem
							sx={item.id === selectedDiv ? styles.selected : styles.unselect}
							onClick={() => setSelectedDiv(item.id)}
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
										{item.text}
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
