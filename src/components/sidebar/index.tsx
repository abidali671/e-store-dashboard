import React, { useState } from 'react';
import { Box, Divider, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { SideItemT, sideListItems } from '../../data/app.data';
import { Copy } from '@assests/icons';
import arrowleft2 from '@assests/arrowleft2.png';
import * as styles from './sidebar.styles';

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
			<Copy color='green' />
			{sideListItems.map((item: SideItemT) => {
				return (
					<React.Fragment key={item.id}>
						{item.divider ? (
							<Divider />
						) : (
							<ListItem
								sx={item.id === selectedDiv ? styles.selected : styles.unselect}
								onClick={() => setSelectedDiv(item.id)}
								disablePadding
							>
								<ListItemButton>
									<Box component='img' src={item.icon} />
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
				);
			})}
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
