import React from 'react';
import { Navbar, Sidebar, View } from '@components';
import { Box } from '@mui/material';

const Dashboard = () => {
	const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false);

	const toggleSidebar = () => {
		setIsCollapsed(!isCollapsed);
	};
	return (
		<Box
			sx={{
				height: '100vh',
				width: '100%',
				display: 'grid',
				gridTemplateRows: '60px 1fr',
				gridTemplateColumns: '1fr',
			}}
		>
			<Box >
				<Navbar />
			</Box>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: `${isCollapsed ? 60 : 300}px 1fr`,
					transition: '0.5s',
				}}
			>
				<Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
				<Box > 
				<View />
				</Box>
			</Box>
		</Box>
	);
};

export default Dashboard;
