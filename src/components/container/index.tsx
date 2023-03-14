import React from 'react';
import { Navbar, Sidebar } from '@components';
import { Box } from '@mui/material';
import useContainer from './container.hook';
import * as styles from './container.styles';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const { isCollapsed, toggleSidebar } = useContainer();
	return (
		<Box sx={styles.root}>
			<Navbar toggleSidebar={toggleSidebar} />
			<Box sx={{ ...styles.pageWrapper(isCollapsed) }}>
				<Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
				<Box sx={styles.contentWrapper}>{children}</Box>
			</Box>
		</Box>
	);
};

export default Container;
