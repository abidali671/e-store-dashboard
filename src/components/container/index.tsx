import React from 'react';
import { Navbar, Sidebar } from '@components';
import { Box, SxProps } from '@mui/material';
import useContainer from './container.hook';
import * as styles from './container.styles';

interface ContainerProps {
	children: React.ReactNode;
	sx?: SxProps;
}

const Container: React.FC<ContainerProps> = ({ children, sx }) => {
	const { isCollapsed, toggleSidebar } = useContainer();
	return (
		<Box sx={styles.root}>
			<Navbar toggleSidebar={toggleSidebar} />
			<Box sx={{ ...styles.pageWrapper(isCollapsed) }}>
				<Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
				<Box sx={{ ...styles.contentWrapper, ...sx } as SxProps}>{children}</Box>
			</Box>
		</Box>
	);
};

export default Container;
